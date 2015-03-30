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
        var twoCardsWasDealt;
        var push = false;

        var service = {
            initGame: initGame,
            saveGame: saveGame,
            addPlayers: addPlayers,
            getPlayerById: getPlayerById,
            dealCardToPlayer: dealCardToPlayer,
            dealTwoCards: dealTwoCards,
            getPlayers: getPlayers,
            getDealer: getDealer,
            isGameStarted: isGameStarted,
            findWinners: findWinners,
            isPush: isPush
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

        function dealTwoCards() {
            game.dealTwoCards();
            twoCardsWasDealt = true;
        }

        function getPlayers() {
            var isPlayerFilter = function(player, index) {
                return !player.isDealer();
            };
            return isGameStarted() ? $filter('filter')(game.getPlayers(), isPlayerFilter) : []; 
        }

        function getDealer() {
            return isGameStarted() ? game.getDealer() : undefined; 
        }

        function isGameStarted() {
            return game; 
        }

        function isPush() {
            return push; 
        }

        function isGameInProgress() {
            var players = getPlayers();
            for (var i = 0; i < players.length; i++) {
                if (players[i].canStand()) return true;
            }
            return getDealer().canStand();
        }

        function findWinners() {
            var winners = [];
            if (twoCardsWasDealt && !isGameInProgress()) {
                $log.info('Find Winners');
                var dealer = getDealer();
                var players = getPlayers();
                var dealerCardScore = dealer.getCardScore();
                var markForWinners = [];
                var player;
    
                // Find players who has more than equal score to dealer
                for (var i = 0; i < players.length; i++) {
                    player = players[i];
                    if (!player.isBust() && (player.getCardScore() >= dealerCardScore || dealer.isBust())) {
                        markForWinners.push(player);
                    }
                }

                if (markForWinners.length === 0 && !dealer.isBust()) {
                    dealer.setWinner();
                    winners.push(dealer);
                } else {
                    // Order markForWinners by cardScore
                    var compareCardScore = function(player) {
                        return player.getCardScore();
                    };
                    var markForWinnersOrdered = $filter('orderBy')(markForWinners, compareCardScore, true);
                    
                    var j = 0;
                    var firstWinner = markForWinnersOrdered[j];
                    var firstWinnerCardScore = firstWinner.getCardScore();

                    // Checking Push state
                    if (!dealer.isBust() && firstWinnerCardScore == dealerCardScore) {
                        push = true;
                    // Checking equal cardScore among winners
                    } else {
                        var winner = firstWinner;
                        do {
                            winner.setWinner();
                            winners.push(winner);
                        } while(++j < markForWinnersOrdered.length && (winner = markForWinnersOrdered[j]).getCardScore() == firstWinnerCardScore);
                    }
                }
            }
            return winners;
        }
    }

})();