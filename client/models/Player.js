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
        var Player = function (id, name, dealer) {
            this.id = id;
            this.name = name;
            this.dealer = dealer || false;
            this.cards = [];                    // active cards[]:Card in the players hand
            this.score = 0;                     // after each round the score accumulated here
            this.stand = false;
            this.winner = false;

            this.dealerFilter = this.dealer;    // TODO: Ask about this
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

        Player.prototype.canHit = function () {
            return !this.isBust() && !this.isStand();
        };

        Player.prototype.canStand = function () {
            return !this.isBust() && !this.isStand() && this.getCardScore();
        };

        Player.prototype.hasCards = function () {
            return this.cards.length;
        };

        // Getters

        Player.prototype.getId = function () {
            return this.id;
        };

        Player.prototype.isStand = function () {
            return this.stand;
        };

        Player.prototype.isWinner = function () {
            return this.winner;
        };

        Player.prototype.getName = function () {
            return this.name;
        };

        Player.prototype.isDealer = function () {
            return this.dealer;
        };

        Player.prototype.getScore = function () {
            return this.score;
        };

        Player.prototype.getCards = function () {
            return this.cards;
        };

        // Setters

        Player.prototype.setStand = function () {
            this.stand = true;
        };

        Player.prototype.setWinner = function () {
            this.winner = true;
        };

        // Filter attribute for angular
        Player.prototype.dealerFilter = function () {
            return this.dealerFilter();
        };

        return Player;
    }

})();