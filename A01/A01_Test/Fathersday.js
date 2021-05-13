"use strict";
var Fathersday;
(function (Fathersday) {
    let cardFront = document.getElementById("front");
    let cardBack = document.getElementById("back");
    let card = document.getElementById("imageContainer");
    card.addEventListener("click", changeImage);
    function changeImage() {
        console.log("click");
        if (cardFront.classList.contains("hidden")) {
            cardFront.classList.remove("hidden");
            cardBack.classList.add("hidden");
        }
        else {
            cardBack.classList.remove("hidden");
            cardFront.classList.add("hidden");
        }
    }
})(Fathersday || (Fathersday = {}));
//# sourceMappingURL=Fathersday.js.map