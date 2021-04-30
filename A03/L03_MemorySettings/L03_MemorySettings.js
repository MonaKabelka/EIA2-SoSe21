"use strict";
var L03_MemorySettings;
(function (L03_MemorySettings) {
    let pairsAmount;
    let cardSymbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray = [];
    let cardField;
    let cardStorage = [];
    let foundPairs = 0;
    let startButton;
    let divForm;
    let cardProperties = [];
    let seconds = 0;
    let minutes = 0;
    let hours = 0;
    let timerHTML = document.querySelector("#timer");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        divForm = document.querySelector("#form");
        startButton = document.querySelector("#startButton");
        divForm.addEventListener("change", handleChange);
        cardField = document.querySelector("#memoryArea");
        startButton.addEventListener("click", createCards);
    }
    function handleChange(_event) {
        _event.preventDefault();
        let formData = new FormData(document.forms[0]);
        cardProperties = [];
        for (let entry of formData) {
            cardProperties.push(String(entry[1]));
            console.log(cardProperties);
        }
    }
    function createCards() {
        divForm.classList.add("hidden");
        startButton.classList.add("hidden");
        pairsAmount = Number(cardProperties[0]);
        for (let i = 0; i < 2; i++) {
            for (let m = 0; m < pairsAmount; m++) {
                cardArray.push(cardSymbol[m]);
            }
        }
        cardArray.sort(() => 0.5 - Math.random());
        cardField.innerHTML = "";
        document.body.style.background = cardProperties[2];
        document.body.style.fontFamily = cardProperties[5];
        for (let index = 0; index < cardArray.length; index++) {
            let card = document.createElement("div");
            card.style.width = cardProperties[1] + "px";
            card.style.height = cardProperties[1] + "px";
            card.style.background = cardProperties[4];
            card.style.color = cardProperties[3];
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
            let allSpans = document.querySelectorAll("span");
            allSpans[index].classList.add("visibility");
        }
        add();
    }
    function add() {
        setInterval(function () {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            timerHTML.innerHTML = hours + ":" + minutes + ":" + seconds;
        }, 1000);
    }
    function flipCard(_event) {
        let target = _event.target;
        cardStorage.push(target);
        cardStorage[0].style.background = "white";
        cardStorage[0].querySelector("span")?.classList.remove("visibility");
        if (cardStorage.length == 2) {
            cardStorage[1].style.background = "white";
            cardStorage[1].querySelector("span")?.classList.remove("visibility");
            setTimeout(compareCards, 2000);
        }
    }
    function compareCards() {
        let spanValue0 = cardStorage[0].querySelector("span")?.innerHTML;
        let spanValue1 = cardStorage[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            cardStorage[0].classList.add("visibility");
            cardStorage[1].classList.add("visibility");
            cardStorage = [];
            foundPairs++;
            checkWin();
        }
        else {
            cardStorage[0].style.background = cardProperties[4];
            cardStorage[1].style.background = cardProperties[4];
            cardStorage[0].querySelector("span")?.classList.add("visibility");
            cardStorage[1].querySelector("span")?.classList.add("visibility");
            cardStorage = [];
        }
    }
    function checkWin() {
        if (foundPairs == pairsAmount) {
            //Stop Timer? 
            window.alert("The game is over! You played with " + cardProperties[0] + " card pairs for " + hours + ":" + minutes + ":" + seconds + "! Press F5 to play again!");
        }
    }
})(L03_MemorySettings || (L03_MemorySettings = {}));
//# sourceMappingURL=L03_MemorySettings.js.map