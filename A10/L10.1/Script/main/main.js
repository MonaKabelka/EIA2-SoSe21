"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var OldMacDonald;
(function (OldMacDonald) {
    let counter = 0;
    let dayTime = document.querySelector("#daytime");
    OldMacDonald.stockAmount = [{
            name: "hay",
            amount: 500
        },
        {
            name: "seed",
            amount: 20
        },
        {
            name: "corn",
            amount: 400
        },
        {
            name: "grass",
            amount: 200
        },
        {
            name: "forage",
            amount: 30
        }
    ];
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        farmDay();
        document.querySelector("#newDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
    }
    function farmDay() {
        dayTime.innerHTML = "A new day has dawned!";
        let cow = new OldMacDonald.Cow("Bella", "Cow", "moo");
        setTimeout(function () {
            cow.eat(50, 0);
            cow.sing(50);
            cow.milkMaking();
        }, 100);
        let chicken = new OldMacDonald.Chicken("Agatha", "Chicken", "cluck");
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(2);
            chicken.layingEggs();
        }, 2500);
        let pig = new OldMacDonald.Pig("Rudi", "Pig", "oink");
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
            pig.fatDirtyPig();
        }, 5000);
        let sheep = new OldMacDonald.Sheep("Shaun", "Sheep", "baa");
        setTimeout(function () {
            sheep.eat(20, 3);
            sheep.sing(20);
            sheep.mähkingWolle();
        }, 7500);
        let cat = new OldMacDonald.Cat("Lucy", "Cat", "nya");
        setTimeout(function () {
            cat.eat(3, 4);
            cat.sing(3);
            cat.lazyCat();
        }, 10000);
        setTimeout(function () {
            dayTime.innerHTML = "The sun is down, the day is over! Start a new day on the button below.";
        }, 11000);
        let dayCounter = document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);
    }
    function stockUp() {
        let fullStock = [500, 20, 400, 30, 200];
        for (let index = 0; index < fullStock.length; index++) {
            OldMacDonald.stockAmount[index].amount = fullStock[index];
            OldMacDonald.textDOMElement = document.querySelector("#animal" + index);
            OldMacDonald.textDOMElement.innerHTML = "The farmer has " + OldMacDonald.stockAmount[index].amount + "kg " + OldMacDonald.stockAmount[index].name + " left.";
        }
    }
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=main.js.map