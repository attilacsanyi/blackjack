(function() {
  'use strict';

    angular
        .module('blackjack')
        .factory('Card', CardModel);

        CardModel.$inject = [ '$log' ];

    //////////////////////////////
    // CARD
    function CardModel($log) {

        // Constructor
        var Card = function (name, value) {
            this.name = name;
            this.value = value;
        };

        // Getters

        Card.prototype.getValue = function () {
            return this.value;
        };

        Card.prototype.getName = function () {
            return this.name;
        };

        return Card;
    }

})();