namespace OldMacDonald {

    export class Animal {
        public name: string;
        public breed: string;
        public sound: string;

        public constructor(_name: string, _breed: string, _sound: string) {
            this.name = _name;
            this.breed = _breed;
            this.sound = _sound;
        }

        public eat(_foodAmount: number, _foodPos: number): void { //_foodPos: Stelle im Interface Array
            stockAmount[_foodPos].amount -= _foodAmount;
            textDOMElement = <HTMLElement>document.querySelector("#animal" + _foodPos);
            textDOMElement.innerHTML = "The farmer has <i>" + stockAmount[_foodPos].amount + "</i>" + "kg " + stockAmount[_foodPos].name + " left.";
            console.log(this.breed + " " + this.name + " eats " + _foodAmount  + "kg " + stockAmount[_foodPos].name + ". The farmer has " + stockAmount[_foodPos].amount + " kg " + stockAmount[_foodPos].name + " left.");
            let eatingDOMElement: HTMLElement = <HTMLElement>document.querySelector("#eatingFood");
            eatingDOMElement.innerHTML = this.name + " eats " + _foodAmount + "kg " + stockAmount[_foodPos].name + ". <br>";
        }

        public sing(_foodAmount: number): void {
            let animalNameDOMElement: HTMLElement = <HTMLElement>document.querySelector("#animalName");
            let songDOMElement: HTMLElement = <HTMLElement>document.querySelector("#songText");

            animalNameDOMElement.innerHTML = this.breed + "  " + this.name;
            songDOMElement.innerHTML = "Old MacDonald had a farm " + "<br>" + (this.sound + " ").repeat(5) + "<br>" + "And on his farm he had some " + this.breed + "s " + "<br>" + (this.sound + " ").repeat(5) + "<br>";
        }
    }

    export class Cow extends Animal {
        public abilityCow: string = "Milkmaker!";

        public milkMaking(): void {
            console.log(this.abilityCow);
        }
    }

    export class Chicken extends Animal {
        public abilityChicken: string = "I lay eggs.";

        public layingEggs(): void {
            console.log(this.abilityChicken);
        }
    }

    export class Pig extends Animal {
        public abilityPig: string = "I eat all day and look cute!";
        public fatDirtyPig(): void {
            console.log(this.abilityPig);
        }
    }

    export class Sheep extends Animal {
        public abilitySheep: string = "I produce wool.";

        public mähkingWolle(): void {
            console.log(this.abilitySheep);
        }
    }

    export class Cat extends Animal {
        public abilityCat: string = "I sleep tight.";

        public lazyCat(): void {
            console.log(this.abilityCat);
        }
    }



}