// Removes the homepage ticket section when showTickets is false in _config.yml.
// The section in source/index.md must be wrapped in
// <!-- TICKETS:START ... --> and <!-- TICKETS:END --> comments.
// Uses after_render:html (not before_post_render) so that toggling the flag
// takes effect without needing `hexo clean` to bust the render cache.
hexo.extend.filter.register('after_render:html', function (html, data) {
    if (hexo.config.showTickets) {
        return html;
    }
    if (!data.page || data.page.source !== 'index.md') {
        return html;
    }

    return html.replace(/<!-- TICKETS:START[\s\S]*?<!-- TICKETS:END -->/, '');
});
