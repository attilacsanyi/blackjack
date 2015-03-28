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

        var score;          // after each round the score accumulated here
        var cards = [];     // active card:Card on the players hand

        // Constructor
        var Player = function (id, name, isDealer) {
            this.id = id;
            this.name = name;
            this.isDealer = isDealer || false;
        };

        // Methods

        Player.prototype.isPush = function (anotherPlayer) {
            return (anotherPlayer.isDealer() && this.getCardScore() == anotherPlayer.getCardScore()) ? true : false;
        };

        Player.prototype.isBust = function () {
            return (this.getCardScore() > 21) ? true : false;
        };

        Player.prototype.getCardScore = function () {
            var cardScore = 0;
            if (cards) {
                for (var i = 0; i < cards.length; i++) {
                    cardScore += cards[i].getValue();
                }
            }
            return cardScore;
        };

        // Getters

        Player.prototype.getId = function () {
            return this.id;
        };

        Player.prototype.isStand = function () {
            return this.isStand;
        };

        Player.prototype.getName = function () {
            return this.name;
        };

        Player.prototype.isDealer = function () {
            return this.isDealer;
        };

        Player.prototype.getScore = function () {
            return this.score;
        };

        return Player;
    }

})();