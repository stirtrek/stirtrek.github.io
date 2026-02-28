hexo.extend.generator.register('sponsor-json-generator', function(locals) {
  const currentYear = hexo.config.currentYear;
  const sponsorData = locals.data['sponsors' + currentYear];
  if (!sponsorData) return [];

  return [{
    path: 'api/sponsors/current.json',
    data: JSON.stringify(sponsorData, null, 2)
  }];
});
