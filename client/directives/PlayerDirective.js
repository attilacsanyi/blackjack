(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .directive('seedPlayer', PlayerDirective);

    PlayerDirective.$inject = ['$log'];

    //////////////////////////////
    // PLAYER DIRECTIVE
    function PlayerDirective($log) {
        var directive = {
          restrict: 'A',
          scope: {
                player: '='
          },
          templateUrl: 'directives/player.html',
          link: link,
          controller: PlayerController,
          controllerAs: 'vm',
          bindToController: true // because the scope is isolated
        };
        return directive;

        function link(scope, element, attrs, vm) {
          //$log.info('Player Directive');
        }
    }

    PlayerController.$inject = ['$log', 'BlackjackService'];

    function PlayerController($log, BlackjackService) {
        var vm = this;
        $log.info('Player Directive Controller');

        var hit = function () {
          $log.info(vm.player.getName() +  ' was hit');
          BlackjackService.dealCardToPlayer(vm.player.getId());
        };
        vm.hit = hit;
    }

})();