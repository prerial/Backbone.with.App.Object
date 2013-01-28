define([
  'jquery',
  'underscore',
  'backbone',
  'application',
  'text!views/page/View2.html'
], function ($, _, Backbone, App, View) {

    return function () {
        var view = Backbone.View.extend({
            el: $(".view2"),
            render: function () {
                $(".view2").html(View);
            }
        });
        this.init = function () {
            var v = new view();
            v.render();
            App.eventManager.trigger('view2', { type: 'view2' });
        };
    };
  
});
