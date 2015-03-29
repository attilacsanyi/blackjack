(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .service('Blackjack', BlackjackModel);

    BlackjackModel.$inject = ['$log', 'Player', 'Deck'];

    //////////////////////////////
    // BLACKJACK GAME
    function BlackjackModel($log, Player, Deck) {

        // Constructor
        var Blackjack = function (numOfPlayers, numOfRounds) {
            $log.info('Blackjack created');
            this.numOfPlayers = numOfPlayers;
            this.numOfRounds = numOfRounds;

            this.players = [];
            this.deck = new Deck();

            // Create a dealer and add to the game
            $log.info('Add dealer');
            this.dealer = new Player(0, 'Dealer', true);
            this.players.push(this.dealer);
        };

        // Add new player:Player
        Blackjack.prototype.addPlayer = function (player) {
            $log.info('Add player with name: ' + player.getName());
            this.players.push(player);
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
            for (var i = 0; i < this.players.length; i++) {
                player = this.players[i];
                if (player.getId() == playerId) {
                    return player;
                }
            }
            return undefined;
        };

        // Getters

        Blackjack.prototype.getPlayers = function () {
            return this.players;
        };

        Blackjack.prototype.getDealer = function () {
            return this.dealer;
        };

        return Blackjack;
    }

})();