(function() {
    'use strict';

    angular
        .module('blackjack')
        .directive('bjPlayer', PlayerDirective);

    PlayerDirective.$inject = [ '$log' ];

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

        var dealTwoCards = function () {
          $log.info('Deal two cards for all players');
          BlackjackService.dealTwoCards();
        };
        vm.dealTwoCards = dealTwoCards;

        var getPanelColour = function() {
          return {
            'panel-info': (vm.player) ? vm.player.isDealer() : false,
            'panel-success': (vm.player) ? vm.player.isWinner() : false,
            'panel-danger': (vm.player) ? vm.player.isBust() : false,
            'panel-warning': (vm.player) ? !(vm.player.isDealer() || vm.player.isWinner() || vm.player.isBust()) : false
          };
        };
        vm.getPanelColour = getPanelColour;
    }

})();