"use strict";
var generativeArt;
(function (generativeArt) {
    window.addEventListener("load", draw);
    let crc2;
    let shapeNum = Math.floor(Math.random() * 10); // Random Anzahl an Formen zwischen 1 und 10
    let characters = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // Characters für den Hexadezimal-Generator
    function draw() {
        let canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.clearRect(0, 0, canvas.width, canvas.height); // Nach jedem Klick auf den Button, wird das canvas erstmal geleehrt
        for (let i = 0; i < shapeNum; i++) { // Generiert die Anzahl an Formen, angepasst an shapeNum 
            let sides = Math.floor(Math.random() * 10); // Random number für die Seiten zwischen 1 und 10 (weniger Seiten für interessantere Formen)
            let penStartX = Math.floor(Math.random() * 800); // Für gesamte Breite (innerhalb)
            let penStartY = Math.floor(Math.random() * 800); // Für gesamte Höhe (innerhalb)
            // Der "Stift" startet an einem zufälligen Punkt innerhalb des Canvas - und das für jede Form generiert! 
            crc2.globalAlpha = Math.random(); // Generiert einen zufälligen Alpha-Wert für jede neue Form --> Opacity 
            crc2.beginPath();
            crc2.moveTo(penStartX, penStartY);
            let chance = Math.round(Math.random()); // Linie oder Kurve
            if (chance == 0) {
                for (let j = 0; j < sides; j++) {
                    crc2.quadraticCurveTo(Math.random() * 800, Math.random() * 800, Math.random() * 800, Math.random() * 800);
                }
                crc2.quadraticCurveTo(Math.random() * 800, Math.random() * 800, penStartX, penStartY);
            }
            else {
                for (let j = 0; j < sides; j++) {
                    crc2.lineTo(Math.random() * 800, Math.random() * 800);
                }
                crc2.lineTo(penStartX, penStartY); // Linie/Kurve wird zur generierten Stelle gemalt.
            }
            // Hexadezimal-Generator für zufällige Farben
            let randColor = "#"; // Variable für die Farbe
            for (let k = 0; k < 6; k++) { // Schleife wird so lange durchlaufen, bis eine Hexadezimalzahl generiert wurde! --> 6 Werte
                randColor += characters[Math.floor(Math.random() * characters.length)]; // Aus meinem Array werden zufällige Werte rausgenommen!
            }
            crc2.closePath(); // Formen werden vollendet
            crc2.fillStyle = randColor; // Die jeweilige Farbe wird zugewiesen
            crc2.fill(); // Formen werden mit der Farbe (Hexadezimal-Code) ausgefüllt
        }
        // Generation-Button
        let generationButton = document.querySelector(".button"); // Mit dem ! sage ich, dass selbst wenn es null ist, soll es trotzdem als Button behandlet werden!
        generationButton.addEventListener("click", draw);
    }
})(generativeArt || (generativeArt = {}));
//# sourceMappingURL=CanvasTest.js.map