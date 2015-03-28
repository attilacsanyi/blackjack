(function() {
    'use strict';

    angular
    .module('seedBlackjack')
    .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$router', '$location', '$log', '$modal'];

    //////////////////////////////
    // APP CONTROLLER
    function AppController($scope, $router, $location, $log, $modal) {
        var vm = this;
        $log.info('Init AppController');

        vm.title = 'Seed Blackjack';


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

        // New Game Modal
        vm.openNewGameModal = function(size) {
            return $scope.openNewGameModal(size);   
        };

        $scope.openNewGameModal = function (size) {

            var newGameModalInstance = $modal.open({
                templateUrl: 'modals/newGameModal.html',
                controller: 'NewGameModalController as vm',
                size: size
            });

            newGameModalInstance.result.then(function () {

            }, function (reason) {
                $log.info('Closed New Game modal with reason: ' + JSON.stringify(reason));
            });
        };

    }

})();