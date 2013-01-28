require.config({
    paths: {
        config: 'common/config',
        application: 'common/application',
        text: '../libs/plugins/text',
        jquery: '../libs/jquery/182/jquery-min',
        underscore: '../libs/backbone/092/underscore-min',
        backbone: '../libs/backbone/092/backbone-min'
    }
});

define([
  'app', 
], function (App) {
    App.initialize();
});
