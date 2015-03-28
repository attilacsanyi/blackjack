(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .factory('Card', CardModel);

    CardModel.$inject = ['$log'];

    //////////////////////////////
    // CARD
    function CardModel($log) {

        // Private properties
        var name;
        var value;

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