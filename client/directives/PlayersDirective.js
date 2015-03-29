(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .directive('seedPlayers', PlayersDirective);

    PlayersDirective.$inject = [];

    //////////////////////////////
    // PLAYERS DIRECTIVE
    function PlayersDirective() {
        return {
              restrict: 'A',
              scope: {
                game: '='
              },
              templateUrl: 'directives/players.html'
        };
    }

})();