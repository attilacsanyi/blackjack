(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .service('BlackjackService', BlackjackService);

    BlackjackService.$inject = ['$log', 'Blackjack', 'Player'];

    //////////////////////////////
    // BLACKJACK SERVICE
    function BlackjackService($log, Blackjack, Player) {
        $log.info('Init BlackjackService');

        var game;

        var service = {
            isGameStarted: isGameStarted,
            getPlayers: getPlayers,
            initGame: initGame,
            addPlayers: addPlayers,
            getPlayerById: getPlayerById
        };
        return service;

        // Implementation

        function initGame(numOfPlayers, numOfRounds) {

            // Define Blackjack Game 
            game = new Blackjack(numOfPlayers, numOfRounds);

            // Create a dealer and add to the game
            var dealer = new Player(0, 'Dealer', true);
            game.addPlayer(dealer);
        }

        function addPlayers(playerNames) {
            for (var i = 0; i < playerNames.length; i++) {
                game.addPlayer(new Player(i + 1, playerNames[i]));
            }
        }

        function getPlayerById(playerId) {
            var player;
            for (var i = 0; i < getPlayers().length; i++) {
                player = getPlayers()[i];
                if (player.getId() == playerId) {
                    return player;
                }
            }
            return new Player(999, 'undefined');
        }

        function getPlayers() {
            return game ? game.getPlayers() : []; 
        }

        function isGameStarted() {
            return game; 
        }
    }

})();