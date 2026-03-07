# Static Content Generation via [Hexo.io](http://Hexo.io)

This site uses [Hexo.io](https://hexo.io/) to generate static HTML pages.

All work is done on the `source` branch. GitHub Actions handles building and deploying the site automatically — pushing to `source` is all you normally need to do. See the [How deployment works](#how-deployment-works) for details.

Hexo uses the templates in `themes/stir-trek-comic` and compiles all the files in `source/` into those templates. Speaker and sponsor data comes from `source/_data/` JSON files.

## Local Development Setup

You'll need Node.js installed. Once you have that, from the root of the `source` branch run:

```
npm install
npm install -g hexo-cli
```

To serve the site locally on port 4000:

```
hexo server
```

To generate the static assets into the `/public` directory (useful for inspecting output locally):

```
hexo generate
```

### Manual deploy (advanced / break-glass only)

Normally deployment is fully automated via GitHub Actions — you do not need to run this. If Actions is unavailable or you need to deploy directly from your local machine, you can run:

```
hexo deploy
```

This requires having the GitHub deploy token configured locally.

---

## Folders You Should Care About


| Folder                            | Purpose                                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `./scripts`                       | Scripts Hexo runs automatically as part of every build                                                                              |
| `./scripts-manuallyexecuting`     | Helper scripts you run manually (or that Actions runs on a schedule) — can't be named `./scripts` or Hexo would run them constantly |
| `./source`                        | All Markdown content, styles, and images                                                                                            |
| `./source/_data`                  | JSON data files: speaker/session data synced from Sessionize, and sponsor data maintained by hand                                   |
| `./themes/stir-trek-comic/layout` | The Hexo EJS templates that control the site's look and feel                                                                        |


---

## How Deployment Works

There are two GitHub Actions workflows:

`**pages.yml**` — Triggered on every push to `source`. Runs `hexo generate` and deploys the static output to the `master` branch, which GitHub Pages serves.

`**speaker-session-update.yml**` — Runs automatically every 2 hours. Downloads the latest speaker/session data from Sessionize, rebuilds the schedule JSON, downloads any new speaker images, and commits changes back to `source` (which then triggers `pages.yml`). It can also be triggered manually from the GitHub Actions tab — see [Manually triggering the speaker/session update](#manually-triggering-the-speakersession-update).

**Normal workflow**: make a change, push to `source`, done.

---

## Feature Flag Lifecycle — The Playbook

All feature flags live in `_config.yml`. This table shows what should be enabled at each phase of the annual event cycle.


| Phase                                | `showSpeakers` | `showSessionList` | `showSchedule` | `showSurveyOnSchedule` | `showRecordings`      | `showWorkshops` | `showStore` |
| ------------------------------------ | -------------- | ----------------- | -------------- | ---------------------- | --------------------- | --------------- | ----------- |
| CFP open, no speakers yet            | false          | false             | false          | false                  | **true (prior year)** | false           | false       |
| Speakers announced, no schedule yet  | **true**       | **true**          | false          | false                  | false                 | false           | false       |
| Schedule published                   | **true**       | false             | **true**       | false                  | false                 | false           | false       |
| Day-of (if using the speaker survey) | **true**       | false             | **true**       | **true**               | false                 | false           | false       |
| Post-event / off-season              | false          | false             | false          | false                  | **true**              | false           | false       |


Also: after the event, set `recordingsYear` to the year that just completed once recordings are posted to YouTube.

`showWorkshops` and `showStore` are independent — enable them only if those features are active that year.

---

## Annual Kickoff Checklist

When starting a new year, do these in order:

1. **Create a new Sessionize instance** for the year and configure the API embed with the settings in the screenshots below (see [How do we get Sessionize data?](#how-do-we-get-sessionize-data)).
2. **Update `_config.yml`**:
  - Set `currentYear` to the new year
  - Add the new year to the `allYears` array
  - Update `sessionizeApiUrl` to the new Sessionize embed URL
3. **Scaffold data files**: Run `node scripts-manuallyexecuting/add-a-new-year.js YYYY` (replace `YYYY` with the actual year). This creates empty `sessionsYYYY.json`, `scheduleYYYY.json`, and `sponsorsYYYY.json` in `source/_data/`.
4. **Create the speaker images folder**: Add `source/images/speakers/YYYY/` with a `.gitkeep` file so the folder commits.
5. **Update homepage content** in `source/index.md`: event date, ticket prices, ticket platform link, movie title (once known), session count.
6. **Add a speaker archive page** for the previous year: create `source/speakers/YYYY.md` (copy an existing one and update the year in the YAML front matter). See [Creating a speaker archive page](#creating-a-speaker-archive-page).
7. **Set initial feature flags** in `_config.yml` per the playbook above (typically: `showSpeakers: false`, `showSessionList: false`, `showSchedule: false`, `showRecordings: true` pointing at last year).

### `currentYear` vs. `allYears` — what's the difference?

- `**currentYear`** controls which data files (`sessionsYYYY.json`, `scheduleYYYY.json`, `sponsorsYYYY.json`) the live site uses. Set this to the active event year.
- `**allYears`** controls which years get speaker archive pages generated and which years' speaker images are downloaded. Every year you want archived on the site must be in this list. This is also why images may fail to download for the current year if you forgot to add it — see the FAQ at the bottom.

---

## How Do We Get Sessionize Data?

Speaker and session data is pulled from Sessionize automatically every 2 hours by the `speaker-session-update.yml` Action. You normally don't need to do anything — just keep Sessionize up to date.

**Setting up Sessionize each year**: In Sessionize, create a new API / Embed with the following settings:

Format Settings
Data Settings

**Under Advanced Options, choose "Include Unscheduled Sessions" when initially publishing if the schedule is not finished yet.** Once the schedule is finalized, uncheck this.

Copy the API URL from the "Get Code" page and paste it into `_config.yml` as `sessionizeApiUrl`.

**To get an immediate update** rather than waiting up to 2 hours, trigger the Action manually from the GitHub Actions tab — see [Manually triggering the speaker/session update](#manually-triggering-the-speakersession-update).

**To run the download script locally** (useful when developing locally):

```
node scripts-manuallyexecuting/download-sessionize-details.js
```

This downloads whatever is at `sessionizeApiUrl` and saves it as `sessionsYYYY.json`. Commit and push to deploy.

---

## How Do Speaker/Session Pages Get Generated?

Scripts in `/scripts` run automatically during every `hexo generate`. They read the data files, generate individual HTML pages for each speaker and session, and merge them with the appropriate templates.

---

## How Does the Schedule Get Generated?

Full workflow from session selection to schedule live on the site:

1. Use the Sessionize schedule builder to assign all sessions to rooms and time slots.
2. Add service sessions for breakfast, lunch, the movie, etc. Each service session must be in a room — use one called **"Concourse"** or **"General"** for whole-event items.
3. **Do not add the suffix " Room"** to room names — the site adds this automatically. Any room named "Virtual" is treated specially and will not get the " Room" suffix.
4. Click **"Publish"** on the right side of the Accepted Sessions page in Sessionize.
5. Under Advanced Options in the Sessionize embed, **uncheck "Include Unscheduled Sessions"** now that the schedule is set.
6. Wait for the 2-hour Action to run, or trigger it manually. This runs `build-schedule-from-sessions.js` which generates `scheduleYYYY.json`.
7. Flip flags in `_config.yml`: `showSchedule: true`, `showSessionList: false`.

**To rebuild the schedule locally** (e.g., when testing changes):

```
node scripts-manuallyexecuting/build-schedule-from-sessions.js
```

---

## How Do I Change Static Content?

All static pages exist in `/source/` as Markdown files:

- Homepage: `source/index.md`
- Code of Conduct: `source/info/codeofconduct/index.md`
- Recordings: `source/recordings/index.md`
- History: `source/info/history/index.md`

The look and feel is driven by the templates in `/themes/stir-trek-comic/`. Don't edit those unless you know what you're doing.

**Important**: Because Hexo is a blog engine, any page without an explicit `layout` specified in its YAML front matter (the header stuff) will get the default blog layout instead of the site's standard page layout. Every static page must declare `layout: index` (or the appropriate layout) at the top. Check any existing page in `/source/` to see how this is done.

If you're new to Markdown: [simple overview](https://www.markdownguide.org/basic-syntax/).

---

## Homepage Ticket Section Management

The ticket tier cards in `source/index.md` are inline HTML and need to be updated several times per event cycle as tiers open, sell out, or close. See `ExampleHomepageHtml.md` for annotated examples of common states (on sale, sold out, highlighted, etc.).

Each tier card follows this structure:

```html
<div class="ticket-card comic-panel-light">
    <span class="ticket-tier-name">Early Bird</span>
    <div class="ticket-price">$185</div>
    <p class="ticket-note"> </p>
    <p class="ticket-date">2/24</p>
    <a class="btn-comic btn-comic-sm" href="https://events.humanitix.com/...">Buy Now</a>
</div>
```

Common updates:

- **Tier sells out**: Replace the `<a>` buy button with `<p class="btn-comic btn-comic-sm">Sold Out!</p>`
- **Tier goes on sale**: Replace the `<p>` placeholder with an `<a>` button pointing to the Humanitix event URL
- **Highlight the active tier**: Add `ticket-highlight` to the card's class list (`class="ticket-card ticket-highlight comic-panel-light"`)
- **Update ticket platform link**: The current platform is [Humanitix](https://humanitix.com). Update all `href` values if the platform changes.
- **Ticket sales end date**: Update the notice at the bottom of the ticket section.

---

## Blog Posts

Posts live in `source/_posts/` as Markdown files named `YYYY-MM-DD-title.md`. Required front matter:

```yaml
---
title: Your Post Title
date: 2026-02-25
tags:
  - 2026
author: Your Name
---
```

The blog feed is generated automatically by `scripts/blog-feed.js` during `hexo generate`. Commit the file to `source` and it will appear on the site after the next build.

---

## To Add a Sponsor

1. Add a **350x200 pixel** JPG or PNG of the sponsor logo to `/source/images/sponsors/`.
  - This size is important for consistent layout and they need to have white space around them to look right. Try to mimic existing sponsor images to make this work. 
  - If they don't have a white background, they will look weird on the site so make sure that's how they are designed.
2. Open `source/_data/sponsorsYYYY.json` (for the current year) and copy an existing sponsor entry into the appropriate tier (`platinum`, `gold`, `silver`, `bronze`, or `community`).
3. Commit to the `source` branch and it will deploy automatically.

### Sponsor tiers and long descriptions

Sponsorship tiers are hardcoded in a few places if you ever need to rename them:

- `site.css` — custom sizing per tier (e.g., platinum logos are largest)
- `themes/stir-trek-comic/layout/sponsors[Brief/Full].ejs` — renders the HTML per tier
- `scripts-manuallyexecuting/add-a-new-year.js` — scaffolds the tiers in the new year's JSON

If a sponsor has a very long description that breaks the layout, you have two options:

1. Add `"longDescription": "true"` to that sponsor's entry in `sponsorsYYYY.json` — this reduces their description font size slightly.
2. In `site.css`, find `sponsor.sponsor-bronze .sponsorCompany .description {` (replace `bronze` with the correct tier) and increase the height value.

It's **very common** to break the site by including an extra trailing comma so run the site locally after you make sponsorship changes to test this.

### Sponsors JSON API endpoint

A `/api/sponsors/current.json` endpoint is automatically generated at build time by `scripts/sponsor-json-generator.js`. It exposes the current year's sponsor data for the mobile app. No manual action is needed — keeping `sponsorsYYYY.json` up to date is sufficient.

---

## Workshops (If Happening That Year)

Workshops don't happen every year. If workshops are planned:

1. Enable `showWorkshops: true` in `_config.yml` when details are finalized. Leave it `false` if there are no workshops that year.
2. Edit `source/workshops/index.md` directly with the date, location, and session/speaker descriptions. This content is hand-authored and not pulled from Sessionize.
3. Workshop sponsor logos are referenced inline in that file.

---

## A Speaker Wants to Update Their Profile

Once a session is submitted on Sessionize, the speaker profile does not update automatically on the site. To push a profile change through:

1. Edit the speaker's profile in Sessionize and click the **"← Copy"** button on the right to copy changes to their global profile. Click **"Save Changes"**.
2. Trigger the speaker/session update Action (or wait up to 2 hours). See [Manually triggering the speaker/session update](#manually-triggering-the-speakersession-update).
3. To verify locally before deploying: run `node scripts-manuallyexecuting/download-sessionize-details.js` and then `hexo server`.

**Images**: Images are only downloaded once and will not be re-downloaded unless deleted. If a speaker uploads a new photo, delete their image from `source/images/speakers/YYYY/` first, then trigger the update Action.

---

## Removing or Replacing a Speaker

1. Make the change in Sessionize first (remove or reassign the session).
2. Delete the speaker's photo from `source/images/speakers/YYYY/` so it doesn't linger on the site.
3. Trigger the speaker/session update Action for an immediate update (or wait up to 2 hours). See [Manually triggering the speaker/session update](#manually-triggering-the-speakersession-update).
4. If the speaker was mentioned by name in any static content — `source/index.md`, homepage callouts, etc. — update those manually and push.

---

## Manually Triggering the Speaker/Session Update

The `speaker-session-update.yml` workflow can be run on demand rather than waiting for the 2-hour scheduled run. This is useful any time you need changes to appear immediately (new speaker, image swap, profile update, etc.).

**GitHub UI**: Go to the repository on GitHub → **Actions** tab → **"Speaker/Session Content Update"** → **"Run workflow"** button on the right → **"Run workflow"**.

The Action will download fresh Sessionize data, rebuild the schedule JSON, download any new images, and push a commit to `source`, which then triggers the site build automatically.

---

## Creating a Speaker Archive Page

Individual speaker/talk pages are generated automatically at `/speakers/1234/speaker-name.html`, but there is no automatic year-level archive page. To create one, add a file like `source/speakers/2025.md` (copy an existing archive year file and update the year in the YAML front matter).

The templates in `themes/stir-trek-comic/layout/index.ejs` automatically apply the correct speaker archive layout to any 4-digit-year filename in that path.

---

## Post-Event Checklist

After the event wraps:

- Post session recordings to YouTube and note the playlist URL
- Update `source/recordings/index.md` with the YouTube playlist link for the completed year
- Set `showRecordings: true` and `recordingsYear: YYYY` in `_config.yml` (replace `YYYY` with the year that just completed)
- Update `source/info/history/index.md` with the year's details (date, movie, attendance notes, etc.)
- Add `source/speakers/YYYY.md` archive page if not already done
- Set `showSchedule: false`, `showSpeakers: false`, `showSessionList: false` for the off-season (or leave the schedule visible — either is fine)
- Set `showSurveyOnSchedule: false` if it was enabled day-of

---

## Homepage Food Drive Section

The food drive section in `source/index.md` lists specific requested donation items. These may change year to year depending on what the charity currently needs most. Review this section during the annual kickoff and update the item list if needed — otherwise it can stay as-is.

---

## FAQs

### Are images downloading but not for the current year?

Check that the current year is in the `allYears` list in `_config.yml`. That list determines which years' images are downloaded — it's separate from `currentYear`.

### A speaker uploaded their image, bio, or abstract. How do we update it?

Images are not re-downloaded unless deleted. Go to `source/images/speakers/YYYY/` and delete that speaker's image file. You can skip this step for text-only changes (bio, abstract).

Then trigger the speaker/session update Action from the GitHub Actions tab (or wait up to 2 hours for the scheduled run).