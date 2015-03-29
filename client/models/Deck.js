(function() {
    'use strict';

    angular
        .module('seedBlackjack')
        .factory('Deck', DeckModel);

    DeckModel.$inject = ['$log', 'Card'];

    //////////////////////////////
    // DECK
    function DeckModel($log, Card) {

        // Private properties

        // Constructor
        var Deck = function () {
            this.cards = initCards();
        };

        // Private methods 

        function initCards () {
            $log.info('Initialized Deck with cards');
            var blackJackCards = [];
            var patterns = ['Heart', 'Tile', 'Clover', 'Pike'];
            var types = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
            var card;
            var cardValue;

            for (var i = 0; i < patterns.length; i++) {
                for (var j = 0; j < types.length; j++) {
                    cardValue = (typeof types[j] == 'number') ? types[j] : 10;
                    card = new Card(types[j] + ' - ' + patterns[i], cardValue);
                    blackJackCards.push(card);
                }
            }
            return blackJackCards;
        }

        // Methods

        Deck.prototype.hasMoreCards = function () {
            return this.cards.length > 0;
        };

        // Return a random card from the deck if not empty
        Deck.prototype.deal = function () {
            var randomIndex = Math.floor(Math.random() * this.cards.length);
            var selectedCards = this.cards.splice(randomIndex, 1);
            return selectedCards[0];
        };

        return Deck;
    }

})();