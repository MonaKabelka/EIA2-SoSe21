"use strict";
var OldMacDonald;
(function (OldMacDonald) {
    class Animal {
        constructor(_name, _breed, _sound) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }
        eat(_foodAmount, _foodPos) {
            OldMacDonald.stockAmount[_foodPos].amount -= _foodAmount;
            OldMacDonald.textDOMElement = document.querySelector("#animal" + _foodPos);
            OldMacDonald.textDOMElement.innerHTML = "The farmer has <i>" + OldMacDonald.stockAmount[_foodPos].amount + "</i>" + "kg " + OldMacDonald.stockAmount[_foodPos].name + " left.";
            console.log(this.breed + " " + this.name + " eats " + _foodAmount + "kg " + OldMacDonald.stockAmount[_foodPos].name + ". The farmer has " + OldMacDonald.stockAmount[_foodPos].amount + " kg " + OldMacDonald.stockAmount[_foodPos].name + " left.");
            let eatingDOMElement = document.querySelector("#eatingFood");
            eatingDOMElement.innerHTML = this.name + " eats " + _foodAmount + "kg " + OldMacDonald.stockAmount[_foodPos].name + ". <br>";
        }
        sing(_foodAmount) {
            let animalNameDOMElement = document.querySelector("#animalName");
            let songDOMElement = document.querySelector("#songText");
            animalNameDOMElement.innerHTML = this.breed + "  " + this.name;
            songDOMElement.innerHTML = "Old MacDonald had a farm " + "<br>" + (this.sound + " ").repeat(5) + "<br>" + "And on his farm he had some " + this.breed + "s " + "<br>" + (this.sound + " ").repeat(5) + "<br>";
        }
    }
    OldMacDonald.Animal = Animal;
    class Cow extends Animal {
        constructor() {
            super(...arguments);
            this.abilityCow = "Milkmaker!";
        }
        milkMaking() {
            console.log(this.abilityCow);
        }
    }
    OldMacDonald.Cow = Cow;
    class Chicken extends Animal {
        constructor() {
            super(...arguments);
            this.abilityChicken = "I lay eggs.";
        }
        layingEggs() {
            console.log(this.abilityChicken);
        }
    }
    OldMacDonald.Chicken = Chicken;
    class Pig extends Animal {
        constructor() {
            super(...arguments);
            this.abilityPig = "I eat all day and look cute!";
        }
        fatDirtyPig() {
            console.log(this.abilityPig);
        }
    }
    OldMacDonald.Pig = Pig;
    class Sheep extends Animal {
        constructor() {
            super(...arguments);
            this.abilitySheep = "I produce wool.";
        }
        mähkingWolle() {
            console.log(this.abilitySheep);
        }
    }
    OldMacDonald.Sheep = Sheep;
    class Cat extends Animal {
        constructor() {
            super(...arguments);
            this.abilityCat = "I sleep tight.";
        }
        lazyCat() {
            console.log(this.abilityCat);
        }
    }
    OldMacDonald.Cat = Cat;
})(OldMacDonald || (OldMacDonald = {}));
//# sourceMappingURL=animal.js.map