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
            addPlayers: addPlayers
        };
        return service;

        // Implementation

        function initGame(numOfPlayers, numOfRounds) {

            // Define Blackjack Game 
            game = new Blackjack(numOfPlayers, numOfRounds);

            // Create a dealer and add to the game
            var dealer = new Player('Dealer', true);
            game.addPlayer(dealer);
        }

        function addPlayers(playerNames) {
            for (var i = 0; i < playerNames.length; i++) {
                game.addPlayer(new Player(playerNames[i]));
            }
        }

        function getPlayers() {
            return game ? game.getPlayers() : []; 
        }

        function isGameStarted() {
            return game; 
        }
    }

})();