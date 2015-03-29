(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .directive('seedPlayers', PlayersDirective);

    PlayersDirective.$inject = [];

    //////////////////////////////
    // PLAYERS DIRECTIVE
    function PlayersDirective($log) {
        var directive = {
          restrict: 'A',
          scope: {
            game: '='
          },
          templateUrl: 'directives/players.html',
          link: link,
          controller: PlayersController,
          controllerAs: 'vm',
          bindToController: true // because the scope is isolated
        };
        return directive;

        function link(scope, element, attrs, vm) {
          //$log.info('Player Directive');
        }
    }

    PlayersController.$inject = ['$log'];

    function PlayersController($log) {
        var vm = this;
        //$log.info('Players Directive Controller');
    }

})();