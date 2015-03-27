(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .factory('Player', PlayerModel);

    PlayerModel.$inject = ['$log'];

    //////////////////////////////
    // PLAYER
    function PlayerModel($log) {

        // Private properties
        var name;
        var isStand;
        var isDealer;

        // Constructor
        var Player = function (name, isDealer) {
            this.name = name;
            this.isDealer = isDealer || false;
        };

        // Getters

        Player.prototype.isStand = function () {
            return this.isStand;
        };

        Player.prototype.getName = function () {
            return this.name;
        };

        Player.prototype.isDealer = function () {
            return this.isDealer;
        };

        return Player;
    }

})();