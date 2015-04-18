(function() {
  'use strict';

  angular
  .module('blackjack')
  .controller('AppController', AppController);

  AppController.$inject = [ '$scope', '$router', '$location', '$log', '$modal', 'BlackjackService' ];

  //////////////////////////////
  // APP CONTROLLER
  function AppController($scope, $router, $location, $log, $modal, BlackjackService) {
    var vm = this;
    $log.info('Init AppController');

    // Define App Routing
    $router.config([
          {
            path: '/',
            component: 'blackjack'
          },
          {
            path: '/players/:id',
            component: 'player'
          }
        ]);
    $location.path('/');

    // View models
    vm.title = 'Blackjack';
    vm.isGameStarted = false;

    // New Game Modal
    vm.openNewGameModal = function(size) {
      return $scope.openNewGameModal(size);
    };

    $scope.openNewGameModal = function(size) {

      var newGameModalInstance = $modal.open({
        templateUrl: 'modals/newGameModal.html',
        controller: 'NewGameModalController as vm',
        size: size
      });

      newGameModalInstance.result.then(function(isGameStarted) {
        vm.isGameStarted = isGameStarted;
      }, function(reason) {
        $log.info('Closed New Game modal with reason: ' + JSON.stringify(reason));
      });
    };

    // Save Game
    var saveGame = function() {
      BlackjackService.saveGame();
    };
    vm.saveGame = saveGame;

  }

})();
