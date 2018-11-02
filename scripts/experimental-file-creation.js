hexo.extend.generator.register('experimental-file-creation', function(locals) {

    return [{
        path: '/Speakers/test.html',
        data: {
            content: 'this is a test'},
        layout: ['index']
    },{
        path: '/Speakers/test2.html',
        data: {
            content: 'this is a test 2'},
        layout: ['index']
        }]

});