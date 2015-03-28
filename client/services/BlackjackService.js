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
            players: getPlayers,
            init: initGame,
            addPlayer: addPlayer
        };
        return service;

        // Implementation

        function initGame() {

            // Define Blackjack Game 
            game = new Blackjack(2, 3);

            // Create a dealer and add to the game
            var dealer = new Player('Dealer', true);
            game.addPlayer(dealer);
        }

        function addPlayer() {

            // Define new player then add to the game
            var player1 = new Player('John Seed');
            game.addPlayer(player1);
        }

        function getPlayers() {
            return game ? game.getPlayers() : []; 
        }
    }

})();