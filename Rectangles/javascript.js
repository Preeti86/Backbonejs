(function () {

    var Rectangle = Backbone.Model.extend({});

    var RectangleView = Backbone.View.extend({


        tagName: 'div',

        className: 'rectangle',

        render: function () {
            this.setDemensions();
            this.setPosition();
            return this;

        },

        setDimensions: function () {
            this.$el.css({
                width: this.model.get('width') + px,
                height: this.model.get('height') + 'px'
            });

        },

        setPosition: function () {
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y
            })

        }
    });

    // objects
    var myRectangle = new Rectangle({
        width: 100,
        height: 60,
            position: {
            x: 300,
                y: 150
    }
    });

    //View
    var myView = new RectangleView({model: myRectangle});

    $('div#canvas').append(myView.render().el);


})();