(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('BlackjackController', BlackjackController);

    BlackjackController.$inject = ['$log', 'BlackjackService'];

    //////////////////////////////
    // BLACKJACK CONTROLLER
    function BlackjackController($log, BlackjackService) {
        $log.info('Init BlackjackController');
        var vm = this;

        // View models

        vm.gameStarted = false;
        vm.playerAdded = false;
        vm.players = [];

        // View methods

        var startGame = function () {
            BlackjackService.startGame();
            vm.players = BlackjackService.getPlayers();
            vm.gameStarted = true;      
        };
        vm.startGame = startGame;

        var addPlayer = function () {
            BlackjackService.addPlayer();
            vm.playerAdded = true;
        };
        vm.addPlayer = addPlayer;
    }

})();