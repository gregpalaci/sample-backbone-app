var homeView = Backbone.View.extend({
        el: 'div',
        listEl: '.apples-list',
        cartEl: '.cart-box',

        initialize: function() {
          this.$el.html(this.template);
          this.collection.on('addToCart', this.showCart, this);
        },

        template: _.template(appleHomeTpl),
        
        showCart: function(appleModel) {
          $(this.cartEl).append(appleModel.attributes.name + '<br>');
        },

        render: function() {
          var view = this;
          this.collection.each(function(apple) {
            var appleSubView = new appleItemView({model: apple});
            appleSubView.render();

            $(view.listEl).append(appleSubView.$el);
          });
        }

    });