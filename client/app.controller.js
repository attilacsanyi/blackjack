(function() {
    'use strict';

    angular
    .module('seedBlackjack')
    .controller('AppController', AppController);

    AppController.$inject = ['$router', '$location', '$log'];

    //////////////////////////////
    // APP CONTROLLER
    function AppController($router, $location, $log) {
        var vm = this;
        $log.info('Init AppController');

        vm.title = 'Seed Blackjack Test';


        // Define App Routing
        $router.config([
          {
            path: '/',
            component: 'blackjack'
          },
          {
            path: '/players/:name',
            component: 'player'
          }
        ]);
        $location.path('/');

    }

})();