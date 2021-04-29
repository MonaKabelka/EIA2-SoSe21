namespace L03_MemorySettings {

    let pairsAmount: number;
    let cardSymbol: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    let cardArray: number[] = [];
    let cardField: HTMLElement;
    let cardStorage: HTMLElement[] = [];
    let foundPairs: number = 0;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        let divForm: HTMLElement = <HTMLElement>document.querySelector("#form");
        divForm.addEventListener("change", handleChange);
        cardField = <HTMLDivElement>document.querySelector("#memoryArea");
    }

    function handleChange(_event: Event): void {
        _event.preventDefault();
        let startButton: HTMLElement = <HTMLElement>document.querySelector("#startButton");
        let formData: FormData = new FormData(document.forms[0]);
        let cardProperties: string [] = [];

        for (let entry of formData) {
            cardProperties.push(String(entry[1]));
            console.log(cardProperties);
        }

        startButton.addEventListener("click", function (): void {             
            createCardboard(cardProperties); 
        });            
    }

    function createCardboard(_cardProperties: string[]): void {
        pairsAmount = Number(_cardProperties[0]);
        for (let i: number = 0; i < 2; i++) {
            for (let m: number = 0; m < pairsAmount; m++) {
                cardArray.push(cardSymbol[m]);
            }
        }
        
        cardArray.sort(() => 0.5 - Math.random());

        for (let index: number = 0; index < cardArray.length; index++) {
            let card: HTMLElement = <HTMLElement>document.createElement("div");
            card.style.background = "black";
            card.innerHTML = "<span>" + cardArray[index] + "</span>";
            cardField.appendChild(card);
            card.addEventListener("click", flipCard);
        }
    }

    function flipCard(_event: MouseEvent): void {
        cardStorage.push(_event.target);
        cardStorage[0].style.background = "grey";
        if (cardStorage.length == 2) {
            cardStorage[1].style.background = "grey";
            //set timeout
            compareCards();
        }
    }

    function compareCards(): void {
        // SPAN für die kreiirte Karte => je nachdem wie ich die karten erstelle
        let spanValue0: string = cardStorage[0].querySelector("span").innerHTML;
        let spanValue1: string = cardStorage[1].querySelector("span")?.innerHTML;
        if (spanValue0 == spanValue1) {
            cardStorage[0].classList.add("hidden");
            cardStorage[1].classList.add("hidden");
            cardStorage = [];
            foundPairs++;
            checkWin();
        } else {
            cardStorage[0].style.background = "black";
            cardStorage[1].style.background = "black";
            cardStorage = [];
        }
    }

    function checkWin(): void {
        if (foundPairs == pairsAmount) {
            //stop TImer
            window.alert("The game is over! You played for " + /*timer*/ + "s");
        }
    }
}