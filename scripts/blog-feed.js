module.exports = function(hexo) {
  const config = hexo.config || {};
  const urlForHelper = hexo.extend.helper.get('url_for').bind(hexo);
  const siteUrl = (config.url || '').replace(/\/$/, '') + (config.root || '/');

  function xmlEscape(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  hexo.extend.generator.register('blog_feed', function(locals) {
    // Collect posts - only include typical blog posts (layout: post)
    // locals.posts is a Post collection; sort by date desc
    const allPosts = (locals.posts || []).sort('-date').filter(function(post) {
      // include only if layout is 'post' (most blog posts), or ensure it's under source/_posts
      return (post.layout === 'post' || (post.source && post.source.indexOf('_posts/') !== -1));
    }).toArray();

    const limit = (config.feed && config.feed.limit) ? config.feed.limit : 25;
    const posts = allPosts.slice(0, limit);

    const itemsXml = posts.map(function(post) {
      const rel = urlForHelper(post.path);
      const link = (siteUrl.replace(/\/$/, '') || '') + rel;
      const title = xmlEscape(post.title || '(Untitled)');
      const guid = xmlEscape(link);
      const pubDate = post.date && post.date.toUTCString ? xmlEscape(post.date.toUTCString()) : '';

      // Try to use excerpt if available, otherwise content. Keep as CDATA to preserve HTML.
      const description = post.excerpt || post.content || '';

      return ['  <item>',
              `    <title>${title}</title>`,
              `    <link>${xmlEscape(link)}</link>`,
              `    <guid isPermaLink="true">${guid}</guid>`,
              `    <pubDate>${pubDate}</pubDate>`,
              `    <description><![CDATA[${description}]]></description>`,
              '  </item>'].join('\n');
    }).join('\n');

    const channelTitle = xmlEscape((config.title || '').trim() ? (config.title + ' - Blog') : 'Blog');
    const channelLink = xmlEscape((siteUrl.replace(/\/$/, '') || '') + (urlForHelper('/blog/') || '/blog/'));
    const channelDesc = xmlEscape(config.description || config.subtitle || '');
    const lastBuildDate = posts.length && posts[0].date && posts[0].date.toUTCString ? xmlEscape(posts[0].date.toUTCString()) : '';

    const rss = `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<rss version="2.0">\n` +
      `<channel>\n` +
      `  <title>${channelTitle}</title>\n` +
      `  <link>${channelLink}</link>\n` +
      `  <description>${channelDesc}</description>\n` +
      (lastBuildDate ? `  <lastBuildDate>${lastBuildDate}</lastBuildDate>\n` : '') +
      `${itemsXml}\n` +
      `</channel>\n` +
      `</rss>`;

    return {
      path: 'blog/feed.xml',
      data: rss
    };
  });
};

