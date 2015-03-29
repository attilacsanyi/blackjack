(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .factory('Player', PlayerModel);

    PlayerModel.$inject = ['$log'];

    //////////////////////////////
    // PLAYER
    function PlayerModel($log) {

        // Constructor
        var Player = function (id, name, isDealer) {
            this.id = id;
            this.name = name;
            this.isDealer = isDealer || false;
            this.cards = [];                    // active cards[]:Card in the players hand
            this.score = 0;                     // after each round the score accumulated here
        };

        // Methods

        Player.prototype.isPush = function (anotherPlayer) {
            return (anotherPlayer.isDealer() && this.getCardScore() == anotherPlayer.getCardScore()) ? true : false;
        };

        Player.prototype.addCard = function (card) {
            this.cards.push(card);
        };

        Player.prototype.isBust = function () {
            return (this.getCardScore() > 21) ? true : false;
        };

        Player.prototype.getCardScore = function () {
            var cardScore = 0;
            if (this.cards) {
                for (var i = 0; i < this.cards.length; i++) {
                    cardScore += this.cards[i].getValue();
                }
            }
            return cardScore;
        };

        Player.prototype.addScore = function (score) {
            return this.score += score;
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