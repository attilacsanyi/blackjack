(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .controller('NewGameModalController', NewGameModalController);

    NewGameModalController.$inject = ['$modalInstance', 'BlackjackService', '$log'];

    //////////////////////////////
    // NEW GAME MODAL CONTROLLER
    function NewGameModalController($modalInstance, BlackjackService, $log) {
        var vm = this;

        // CREATE NEW GAME

        var createNewGame = function() {
            BlackjackService.initGame(vm.numOfPlayers, vm.numOfRounds);
            $modalInstance.close(BlackjackService.isGameStarted());
        };
        vm.createNewGame = createNewGame;

        // VALIDATION

        // Form is valid when it was changed and all inputs are also valid
        var newGameFormValid = function (newGameForm) {
            return newGameForm.$dirty && newGameForm.$valid;
        };
        vm.newGameFormValid = newGameFormValid;

        // Retrieve bootstrap css class based on form validation
        vm.getValidationClass = function (ngModelController) {
            return {
                "has-error": ngModelController.$invalid && ngModelController.$dirty,
                "has-success": ngModelController.$valid && ngModelController.$dirty
            };
        };

        // Show related validation message of a field based on form validation rules
        vm.showValidation = function (ngModelController, error) {
            return ngModelController.$error[error];
        };
    }

})();