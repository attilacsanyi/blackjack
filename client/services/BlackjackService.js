(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .service('BlackjackService', BlackjackService);

    BlackjackService.$inject = ['$log', '$filter', 'Blackjack', 'Player'];

    //////////////////////////////
    // BLACKJACK SERVICE
    function BlackjackService($log, $filter, Blackjack, Player) {
        $log.info('Init BlackjackService');

        var game;

        var service = {
            initGame: initGame,
            saveGame: saveGame,
            addPlayers: addPlayers,
            getPlayerById: getPlayerById,
            dealCardToPlayer: dealCardToPlayer,
            getPlayers: getPlayers,
            getDealer: getDealer,
            isGameStarted: isGameStarted
        };
        return service;

        // Implementation

        function initGame(numOfPlayers, numOfRounds) {
            game = new Blackjack(numOfPlayers, numOfRounds);
        }

        function saveGame(numOfPlayers, numOfRounds) {
            $log.warn('Not implemented yet');
        }

        function addPlayers(playerNames) {
            for (var i = 0; i < playerNames.length; i++) {
                game.addPlayer(new Player(i + 1, playerNames[i]));
            }
        }

        function getPlayerById(playerId) {
            var player = game.getPlayerById(playerId);
            return (player) ? player :  new Player(999, 'undefined');
        }

        function dealCardToPlayer(playerId) {
            game.dealCardToPlayer(playerId);
        }

        function getPlayers() {
            return isGameStarted() ? $filter('filter')(game.getPlayers(), { isDealer: false }) : []; 
        }

        function getDealer() {
            return isGameStarted() ? game.getDealer() : undefined; 
        }

        function isGameStarted() {
            return game; 
        }
    }

})();