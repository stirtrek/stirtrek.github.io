---
title: Sponsors
layout: index
alias:
- sponsors/index.html
- sponsors/
---

{% raw %}

<style>
    .sponsor-benefits-table {
        width: 100%;
        background-color: #fff;
        color: #000;
        border-collapse: collapse;
        margin: 20px 0;
    }
    
    .sponsor-benefits-table th,
    .sponsor-benefits-table td {
        padding: 15px;
        text-align: left;
        border: 2px solid #111c2e;
    }
    
    .sponsor-benefits-table th {
        background-color: #63ac91;
        font-family: 'Komika Axis', 'Comic Sans MS';
        text-transform: uppercase;
        font-weight: bold;
    }
    
    .sponsor-benefits-table tr:nth-child(even) {
        background-color: #f5f5f5;
    }
    
    .sponsor-level-platinum {
        background-color: #e5e4e2 !important;
        font-weight: bold;
    }
    
    .sponsor-level-gold {
        background-color: #d7c875 !important;
        font-weight: bold;
    }
    
    .sponsor-level-silver {
        background-color: #c0c0c0 !important;
        font-weight: bold;
    }
    
    .sponsor-level-bronze {
        background-color:rgb(229, 164, 99) !important;
        font-weight: bold;
    }
    
    .checkmark {
        color: #63ac91;
        font-size: 1.2em;
    }
    
    .cost-highlight {
        font-size: 1.3em;
        color: #d7c875;
        font-weight: bold;
    }
    
    .attendee-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
    }
    
    .stat-item {
        background-color: #3a3c55;
        padding: 15px;
        border: 4px solid #111c2e;
        text-align: center;
        color: #d7c875;
    }
    
    .stat-number {
        font-size: 2em;
        font-weight: bold;
        font-family: 'Komika Axis', 'Comic Sans MS';
    }
    
    .stat-label {
        font-size: 0.9em;
        color: #fff;
    }
    
    @media only screen and (max-width: 1200px) {
        /* Hide table header on mobile */
        .sponsor-benefits-table thead {
            display: none;
        }
        
        /* Each row becomes a card */
        .sponsor-benefits-table,
        .sponsor-benefits-table tbody {
            display: block;
        }
        
        .sponsor-benefits-table tr {
            display: block;
            margin-bottom: 20px;
            border: 2px solid #111c2e;
        }
        
        /* Each cell becomes a block row */
        .sponsor-benefits-table td {
            display: block;
            text-align: left;
            padding: 10px 15px;
            border: none;
            border-bottom: 1px solid #ddd;
        }
        
        /* Show label before each value */
        .sponsor-benefits-table td::before {
            content: attr(data-label);
            font-weight: bold;
            display: inline-block;
            width: 120px;
            margin-right: 10px;
        }
        
        /* First cell (Level) becomes card header */
        .sponsor-benefits-table td:first-child {
            font-size: 1.2em;
            text-align: center;
            border-bottom: 2px solid #111c2e;
        }
        
        .sponsor-benefits-table td:first-child::before {
            display: none;
        }
        
        /* Group checkmark columns inline */
        .sponsor-benefits-table td:nth-child(n+6) {
            display: inline-block;
            width: auto;
            border-bottom: none;
            padding: 8px 12px;
        }
    }
</style>

<div class="row">
    <div class="col-md-12">
        <div class="comic-panel-header offset comic-panel-gold">Want to be a hero?</div>
        <div class="comic-panel-body with-header">
            <strong>Interested in sponsoring Stir Trek 2026?</strong>
            <p>There are three steps to secure your organization's spot:</p>
            <ol>
                <li>Review the sponsorship details below or <a href="https://drive.google.com/file/d/1jVNN_lHfzJbPi0g-g1DXJ7yY_7efcS6f/view?usp=sharing" target="_blank">download this prospectus</a> and choose your level of engagement. Spots are limited and the earliest responses get the best booth locations.</li>
                <li>Go to <a href="https://stirtreksponsor.myshopify.com/" target="_blank">our sponsor portal</a> and purchase your sponsorship. If you absolutely must be invoiced instead of paying online (which is tough for us but we get it), please email <a href="mailto:sponsors@stirtrek.com" style="color: #34344c;">sponsors@stirtrek.com</a> so we can get an invoice to you.</li>
                <li>If you want to be a Gold sponsor, let us know if you want to sponsor breakfast, lunch, the popocorn, or the lanyards.</li>
            </ol>
            <p><em>If you are interested in capitalizing on your engagement in a special way, Stir Trek is always interested in partnering to support creative ideas that benefit our community in some way.</em></p>
            <br>
            <div style="text-align: center; padding: 20px; background-color: #63ac91; border: 4px solid #111c2e; margin-top: 20px;">
                <h3 style="margin-top: 0; color: #fff;">Have Questions?</h3>
                <p style="font-size: 1.2em; margin-bottom: 0; color: #fff;"><strong><a href="mailto:sponsors@stirtrek.com" style="color: #fff;">sponsors@stirtrek.com</a></strong></p>
            </div>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-md-12">
        <div class="comic-panel-header offset">Sponsorship Levels & Benefits</div>
        <div class="comic-panel-body with-header">
            <table class="sponsor-benefits-table">
                <thead>
                    <tr>
                        <th>Level</th>
                        <th>Price</th>
                        <th># Available</th>
                        <th>Booth Location</th>
                        <th>Additional Perks</th>
                        <th>Website</th>
                        <th>Slides</th>
                        <th>Room Signs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="sponsor-level-platinum">
                        <td>Platinum</td>
                        <td data-label="Price">$12,000</td>
                        <td data-label="# Available">1</td>
                        <td data-label="Booth Location">Best location right at the entrance</td>
                        <td data-label="Additional Perks">Featured onscreen in all rooms and YouTube after!</td>
                        <td data-label="Website"><span class="checkmark">✓</span></td>
                        <td data-label="Slides"><span class="checkmark">✓</span></td>
                        <td data-label="Room Signs"><span class="checkmark">✓</span></td>
                    </tr>
                    <tr class="sponsor-level-gold">
                        <td>Gold</td>
                        <td data-label="Price">$8,500</td>
                        <td data-label="# Available">4</td>
                        <td data-label="Booth Location">Premier locations close to the center</td>
                        <td data-label="Additional Perks">Featured at breakfast, lunch, on popcorn, or lanyards (pick one)!</td>
                        <td data-label="Website"><span class="checkmark">✓</span></td>
                        <td data-label="Slides"><span class="checkmark">✓</span></td>
                        <td data-label="Room Signs">×</td>
                    </tr>
                    <tr class="sponsor-level-silver">
                        <td>Silver</td>
                        <td data-label="Price">$6,000</td>
                        <td data-label="# Available">Unlimited</td>
                        <td data-label="Booth Location">Great spots by theaters</td>
                        <td data-label="Additional Perks">—</td>
                        <td data-label="Website"><span class="checkmark">✓</span></td>
                        <td data-label="Slides"><span class="checkmark">✓</span></td>
                        <td data-label="Room Signs">×</td>
                    </tr>
                    <tr class="sponsor-level-bronze">
                        <td>Bronze<br>(No Booth)</td>
                        <td data-label="Price">$3,000</td>
                        <td data-label="# Available">Unlimited</td>
                        <td data-label="Booth Location">×</td>
                        <td data-label="Additional Perks">—</td>
                        <td data-label="Website"><span class="checkmark">✓</span></td>
                        <td data-label="Slides"><span class="checkmark">✓</span></td>
                        <td data-label="Room Signs">×</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top: 30px;">
                <h3>All Presenting Sponsors Receive:</h3>
                <ul>
                    <li><strong>Attendee Contact Information:</strong> Get the contact information for every attendee who does not opt out at registration!</li>
                    <li><strong>Stickers/Postcards:</strong> Include a custom sticker or postcard in the attendee package. This is a great way to promote your brand, interest candidates, or provide free trials of your services.</li>
                </ul>
            </div>
        </div>
    </div>
</div>


<div class="row">
    <div class="col-md-12">
        <div class="comic-panel-header offset">Why Do We Need Sponsors?</div>
        <div class="comic-panel-body with-header">
            <p>We're a volunteer-led event, but we're not a free one. In 2025 it cost about <span class="cost-highlight">$275,000</span> to put Stir Trek on. Ticket sales cover more than half of this but they can't cover it all. <strong>That's why we need your help!</strong></p>
            <div class="row" style="margin-top: 30px;">
                <div class="col-md-6">
                    <h3>Event Costs</h3>
                    <ul>
                        <li><strong>~$125,000</strong> on the venue including renting the space, bringing in AV, signage, etc.</li>
                        <li><strong>~$20,000</strong> on speakers including a speaker dinner, thank you gifts, a speaker room, and some travel costs</li>
                        <li><strong>~$9,000</strong> on staff shirts, travel to the event, and a retro dinner right after</li>
                        <li><strong>~$6,000</strong> on software like Google, Mailchimp, our session management tool, etc.</li>
                    </ul>
                    <p><em>Running an event of our scale across a ton of theaters isn't cheap and while our speakers and staff are all volunteers, we try to make their day of experience a good one too.</em></p>
                </div>
                <div class="col-md-6">
                    <h3>Attendee Costs</h3>
                    <ul>
                        <li><strong>~$60,000</strong> on attendee items including name t-shirts, badges, lanyards, etc.</li>
                        <li><strong>~$30,000</strong> on breakfast, lunch, snacks, drinks, and popcorn for the movie</li>
                        <li><strong>~$25,000</strong> on movie tickets</li>
                    </ul>
                    <p><em>We're always trying to balance cost with making the experience at Stir Trek great both during the event and all year long. We believe investing in community building is what has let us make it this far to our 18th Stir Trek Conference!</em></p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="comic-panel-header offset">Community Sponsors</div>
        <div class="comic-panel-body with-header">
            Want to support the Stir Trek community but don't need all the stuff above?
            <br>
            <strong>Community Sponsorships are available from $250-$5000.</strong> <em>We won't stop you if you want to give more :-)</em>
            <br><br>
            All Community Sponsors will be:
            <ul>
                <li>Listed on our site</li>
                <li>Featured on slides throughout the day</li>
                <li>Receive a unique Stir Trek thank you gift!</li>
            </ul>
        </div>
    </div>
</div>

{% endraw %}

<br><br>

## 2026 Sponsors and Partners

<div class="icon-hr"></div>

Stir Trek wouldn't be possible without the support of our sponsors. They fund a large portion of the conference costs so that we can keep ticket costs affordable.

Please take a few minutes to learn about our sponsors and let them know you appreciate their support of our community!

<br>
