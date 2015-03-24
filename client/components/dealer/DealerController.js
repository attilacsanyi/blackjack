(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('DealerController', DealerController);

    DealerController.$inject = ['$log'];

    //////////////////////////////
    // DEALER CONTROLLER
    function DealerController($log) {
        $log.info('Init DealerController');
        var vm = this;

        vm.playerName = 'John Seed';
    }

})();