//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
namespace OldMacDonald {
    let counter: number = 0;
    export let textDOMElement: HTMLElement;
    let dayTime: HTMLElement = <HTMLElement>document.querySelector("#daytime");

    export interface Stock {
        name: string;
        amount: number;
    }

    export let stockAmount: Stock[] = [{
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


    function farmDay(): void {
        dayTime.innerHTML = "A new day has dawned!";

        let cow: Cow = new Cow("Bella", "Cow", "moo");
        setTimeout(function (): void {
            cow.eat(50, 0);
            cow.sing(50);
            cow.milkMaking();
        },         100);

        let chicken: Chicken = new Chicken("Agatha", "Chicken", "cluck");
        setTimeout(function (): void {
            chicken.eat(2, 1);
            chicken.sing(2);
            chicken.layingEggs();
        },         2500);

        let pig: Pig = new Pig("Rudi", "Pig", "oink");
        setTimeout(function (): void {
            pig.eat(40, 2);
            pig.sing(40);
            pig.fatDirtyPig();
        },         5000);

        let sheep: Sheep = new Sheep("Shaun", "Sheep", "baa");
        setTimeout(function (): void {
            sheep.eat(20, 3);
            sheep.sing(20);
            sheep.mähkingWolle();
        },         7500);
        
        let cat: Cat = new Cat("Lucy", "Cat", "nya");
        setTimeout(function (): void {
            cat.eat(3, 4);
            cat.sing(3);
            cat.lazyCat();
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