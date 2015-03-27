(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .service('Blackjack', BlackjackModel);

    BlackjackModel.$inject = ['$log'];

    //////////////////////////////
    // BLACKJACK GAME
    function BlackjackModel($log) {

        // Private properties
        var numOfPlayers;
        var numOfRounds;
        var players = [];

        // Constructor
        var Blackjack = function (numOfPlayers, numOfRounds) {
            $log.info('Blackjack created');
            this.numOfPlayers = numOfPlayers;
            this.numOfRounds = numOfRounds;
        };

        // Add new player:Player
        Blackjack.prototype.addPlayer = function (player) {
            $log.info('Add player with name: ' + player.getName());
            players.push(player);
        };

        // Getters
        Blackjack.prototype.getPlayers = function () {
            return players;
        };

        return Blackjack;
    }

})();