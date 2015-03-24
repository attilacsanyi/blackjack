(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('PlayerController', PlayerController);

    PlayerController.$inject = ['$routeParams', '$log'];

    //////////////////////////////
    // PLAYER CONTROLLER
    function PlayerController($routeParams, $log) {
        $log.info('Init PlayerController');
        var vm = this;

        vm.playerName = $routeParams.name;
    }

})();