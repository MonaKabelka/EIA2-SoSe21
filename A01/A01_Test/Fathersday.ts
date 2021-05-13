namespace Fathersday {
    let cardFront: HTMLElement = document.getElementById("front")!;
    let cardBack: HTMLElement = document.getElementById("back")!;
    let card: HTMLElement = document.getElementById("imageContainer")!;

    card.addEventListener("click", changeImage);

    function changeImage(): void {
        console.log("click");
        if (cardFront.classList.contains("hidden")) {
            cardFront.classList.remove("hidden");
            cardBack.classList.add("hidden");
        } else {
            cardBack.classList.remove("hidden");
            cardFront.classList.add("hidden");
        }
    }
}