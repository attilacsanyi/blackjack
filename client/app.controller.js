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

        vm.title = 'Seed Blackjack';

        $router.config([
          {
            path: '/',
            component: 'dealer'
            
          },
          {
            path: '/player/:name',
            component: 'player'
          }
        ]);
        $location.path('/'); //set default otherwise is blank

    }

})();