define([
  'jquery',
  'underscore',
  'backbone',
  'application',
  'text!views/page/View3.html'
], function ($, _, Backbone, App, View) {

    return function () {
        var view = Backbone.View.extend({
            el: $(".view3"),
            render: function () {
                $(".view3").html(View);
            }
        });
        this.init = function () {
            var v = new view();
            v.render();
            App.eventManager.trigger('view3', { type: 'view3' });
        };
    };
  
});
