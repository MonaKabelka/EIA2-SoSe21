"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var Farm;
(function (Farm) {
    let counter = 0;
    let textDOMElement;
    let dayTime = document.querySelector("#daytime");
    let stockAmount = [{
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
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        eat(_foodAmount, _foodPos) {
            stockAmount[_foodPos].amount -= _foodAmount;
            textDOMElement = document.querySelector("#animal" + _foodPos);
            textDOMElement.innerHTML = "The farmer has <i>" + stockAmount[_foodPos].amount + "</i>" + "kg " + stockAmount[_foodPos].name + " left.";
            console.log(this.breed + " " + this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". The farmer has " + stockAmount[_foodPos].amount + " kg " + stockAmount[_foodPos].name + " left.");
            let eatingDOMElement = document.querySelector("#eatingFood");
            eatingDOMElement.innerHTML = this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". <br>";
        }
        sing(_foodAmount) {
            let animalNameDOMElement = document.querySelector("#animalName");
            let songDOMElement = document.querySelector("#songText");
            animalNameDOMElement.innerHTML = this.breed + "  " + this.name;
            songDOMElement.innerHTML = "Old MacDonald had a farm " + "<br>" + (this.sound + " ").repeat(5) + "<br>" + "And on his farm he had some " + this.breed + "s " + "<br>" + (this.sound + " ").repeat(5) + "<br>";
        }
    }
    function farmDay() {
        dayTime.innerHTML = "A new day has dawned!";
        let cow = new Animal("Bella", "Cow", "moo");
        setTimeout(function () {
            cow.eat(50, 0);
            cow.sing(50);
        }, 100);
        let chicken = new Animal("Agatha", "Chicken", "cluck");
        setTimeout(function () {
            chicken.eat(2, 1);
            chicken.sing(2);
        }, 2500);
        let pig = new Animal("Rudi", "Pig", "oink");
        setTimeout(function () {
            pig.eat(40, 2);
            pig.sing(40);
        }, 5000);
        let sheep = new Animal("Shaun", "Sheep", "baa");
        setTimeout(function () {
            sheep.eat(20, 3);
            sheep.sing(20);
        }, 7500);
        let cat = new Animal("Lucy", "Cat", "nya");
        setTimeout(function () {
            cat.eat(3, 4);
            cat.sing(3);
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
            stockAmount[index].amount = fullStock[index];
            textDOMElement = document.querySelector("#animal" + index);
            textDOMElement.innerHTML = "The farmer has " + stockAmount[index].amount + "kg " + stockAmount[index].name + " left.";
        }
    }
})(Farm || (Farm = {}));
//# sourceMappingURL=farm.js.map