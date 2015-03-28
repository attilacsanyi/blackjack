(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = ['$routeParams', '$log', 'BlackjackService'];

    //////////////////////////////
    // PLAYER CONTROLLER
    function PlayerController($routeParams, $log, BlackjackService) {
        $log.info('Init PlayerController');
        var vm = this;

        vm.self = BlackjackService.getPlayerById($routeParams.id);
    }

})();