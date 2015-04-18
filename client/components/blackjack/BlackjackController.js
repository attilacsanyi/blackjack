(function() {
    'use strict';

    angular
        .module('blackjack')
        .controller('BlackjackController', BlackjackController);

    BlackjackController.$inject = [ '$log', 'BlackjackService' ];

    //////////////////////////////
    // BLACKJACK CONTROLLER
    function BlackjackController($log, BlackjackService) {
        $log.info('Init BlackjackController');
        var vm = this;

        // View models

        vm.game = BlackjackService;

        // View methods

        var winners = function () {
            return BlackjackService.findWinners();
        };
        vm.winners = winners;

    }

})();