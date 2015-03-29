(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .directive('seedPlayer', PlayerDirective);

    PlayerDirective.$inject = [];

    //////////////////////////////
    // PLAYER DIRECTIVE
    function PlayerDirective() {
        return {
              restrict: 'A',
              scope: {
                player: '='
              },
              templateUrl: 'directives/player.html'
        };
    }

})();