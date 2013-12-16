var appleView = Backbone.View.extend({
    template: _.template(appleTpl),

    templateSpinner: _.template(appleSpinnerTpl),

    initialize: function() {
        this.model = new(Backbone.Model.extend({}));
        this.model.bind('change', this.render, this);
        this.bind('spinner', this.showSpinner, this);
    },

    loadApple: function(appleName) {
        this.trigger('spinner');
        var view = this;
        setTimeout(function() {
            view.model.set(view.collection.where({
                name: appleName
            })[0].attributes);
        }, 1000);
    },

    render: function(appleName) {
        var appleHtml = this.template(this.model);
        $('body').html(appleHtml);
    },
    showSpinner: function() {
        $('body').html(this.templateSpinner);
    }
});