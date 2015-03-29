(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .service('Blackjack', BlackjackModel);

    BlackjackModel.$inject = ['$log', 'Deck'];

    //////////////////////////////
    // BLACKJACK GAME
    function BlackjackModel($log, Deck) {

        // Private properties
        var players = [];

        // Constructor
        var Blackjack = function (numOfPlayers, numOfRounds) {
            $log.info('Blackjack created');
            this.numOfPlayers = numOfPlayers;
            this.numOfRounds = numOfRounds;
            this.deck = new Deck();
        };

        // Add new player:Player
        Blackjack.prototype.addPlayer = function (player) {
            $log.info('Add player with name: ' + player.getName());
            players.push(player);
        };

        Blackjack.prototype.dealCardToPlayer = function (playerId) {
            $log.info('Deal card to player');

            var player = this.getPlayerById(playerId);
            if (player) {
                player.addCard(this.deck.deal());
            }
        };

        Blackjack.prototype.getPlayerById = function(playerId) {
            var player;
            for (var i = 0; i < players.length; i++) {
                player = players[i];
                if (player.getId() == playerId) {
                    return player;
                }
            }
            return undefined;
        };

        // Getters

        Blackjack.prototype.getPlayers = function () {
            return players;
        };

        return Blackjack;
    }

})();