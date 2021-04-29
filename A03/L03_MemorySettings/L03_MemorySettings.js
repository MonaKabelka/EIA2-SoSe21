"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    let pairsAmount;
    let cardSymbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray = [];
    let cardField;
    let cardStorage = [];
    let foundPairs = 0;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let divForm = document.querySelector("#form");
        divForm.addEventListener("change", handleChange);
        cardField = document.querySelector("#memoryArea");
    }
    function handleChange(_event) {
        _event.preventDefault();
        let startButton = document.querySelector("#startButton");
        let formData = new FormData(document.forms[0]);
        let cardProperties = [];
        for (let entry of formData) {
            cardProperties.push(String(entry[1]));
            console.log(cardProperties);
        }
        startButton.addEventListener("click", function () {
            createCardboard(cardProperties);
        });
    }
    function createCardboard(_cardProperties) {
        pairsAmount = Number(_cardProperties[0]);
        for (let i = 0; i < 2; i++) {
            for (let m = 0; m < pairsAmount; m++) {
                cardArray.push(cardSymbol[m]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement("div");
            card.style.background = "black";
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
        }
    }
    function flipCard(_event) {
        cardStorage.push(_event.target);
        cardStorage[0].style.background = "grey";
        if (cardStorage.length == 2) {
            cardStorage[1].style.background = "grey";
            //set timeout
            compareCards();
        }
    }
    function compareCards() {
        // SPAN für die kreiirte Karte => je nachdem wie ich die karten erstelle
        let spanValue0 = cardStorage[0].querySelector("span")?.innerHTML;
        let spanValue1 = cardStorage[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            cardStorage[0].classList.add("hidden");
            cardStorage[1].classList.add("hidden");
            cardStorage = [];
            foundPairs++;
            checkWin();
        }
        else {
            cardStorage[0].style.background = "black";
            cardStorage[1].style.background = "black";
            cardStorage = [];
        }
    }
    function checkWin() {
        if (foundPairs == pairsAmount) {
            //stop TImer
            window.alert("The game is over! You played for " + /*timer*/ +"s");
        }
    }
})(L03_MemorySettings || (L03_MemorySettings = {}));
//# sourceMappingURL=L03_MemorySettings.js.map