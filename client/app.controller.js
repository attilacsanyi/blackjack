(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('AppController', AppController);

    AppController.$inject = ['$log'];

    //////////////////////////////
    // APP CONTROLLER
    function AppController($log) {
        //var vm = this;

        $log.info('Init AppController');

        this.title = 'Seed Blackjack';

    }

})();