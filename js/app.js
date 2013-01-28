define([
  'jquery',
  'underscore',
  'backbone',
  'config',
  'application',
  'controllers/page/NavController',
  'controllers/page/HomeController',
  'controllers/page/FooterController'
], function ($, _, Backbone, Config, App, NavController, HomeController, FooterController) {

    var blnLoaded = false;
    var AppRouter = Backbone.Router.extend({
        routes: {
            '*actions': 'defaultAction'
        }
    });

    var subscribeAllEvents = function () {
        for (key in MG.Config.AppEvents) {
            App.eventManager.on(key, workflow);
        }
    };

    var workflow = function () {
        var arg = arguments[0];
        if (!blnLoaded) { 
             $('#msg').html('<b style="color:#999">Application Events fired:</b>');
             blnLoaded = true;
       }
        switch (arg.type) {
            case 'view1':
                $('#msg').append(', ' + arg.type);
                break;
            case 'view2':
                $('#msg').append(', ' + arg.type);
                break;
            case 'view3':
                $('#msg').append(', ' + arg.type);
                break;
        }
    };

    var initialize = function () {

        App.eventManager = _.extend({}, Backbone.Events);

        subscribeAllEvents();

        var app_router = new AppRouter;

        app_router.on('route:defaultAction', function () {

            var navController = new NavController();
            navController.init();

            var homeController = new HomeController();
            homeController.init();

            var footerController = new FooterController();
            footerController.init();

        });

        Backbone.history.start();

    };
    return {
        initialize: initialize
    };
});
