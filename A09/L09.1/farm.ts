//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
namespace Farm {
    let counter: number = 0;
    let textDOMElement: HTMLElement;
    let dayTime: HTMLElement = <HTMLElement>document.querySelector("#daytime");

    interface Stock {
        name: string;
        amount: number;
    }

    let stockAmount: Stock[] = [{
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

    function handleLoad(): void {
        farmDay();
        document.querySelector("#newDay")?.addEventListener("click", farmDay);
        document.querySelector("#stockUp")?.addEventListener("click", stockUp);
    }

    class Animal {
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

    function farmDay(): void {
        dayTime.innerHTML = "A new day has dawned!";

        let cow: Animal = new Animal("Bella", "Cow", "moo");
        setTimeout(function (): void {
            cow.eat(50, 0);
            cow.sing(50);
        },         100);

        let chicken: Animal = new Animal("Agatha", "Chicken", "cluck");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
        },         2500);

        let pig: Animal = new Animal("Rudi", "Pig", "oink");
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
        },         5000);

        let sheep: Animal = new Animal("Shaun", "Sheep", "baa");
        setTimeout(function (): void {
            sheep.eat(20, 3);
            sheep.sing(20);
        },         7500);
        
        let cat: Animal = new Animal("Lucy", "Cat", "nya");
        setTimeout(function (): void {
            cat.eat(3, 4);
            cat.sing(3);
        },         10000);

        setTimeout(function (): void {
            dayTime.innerHTML = "The sun is down, the day is over! Start a new day on the button below.";
        },         11000);
        
        let dayCounter: HTMLElement = <HTMLElement>document.querySelector("#dayCounter");
        counter++;
        dayCounter.innerHTML = "Day: " + counter;
        console.log("Day: " + counter);
    }

    function stockUp(): void {
        let fullStock: number[] = [500, 20, 400, 30, 200];
        for (let index: number = 0; index < fullStock.length; index++) {
            stockAmount[index].amount = fullStock[index];
            textDOMElement = <HTMLElement>document.querySelector("#animal" + index);
            textDOMElement.innerHTML = "The farmer has " + stockAmount[index].amount + "kg " + stockAmount[index].name + " left.";
        }
    }
}