"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var Polymorphie;
(function (Polymorphie) {
    Polymorphie.goldenCut = 0.62;
    let moveable = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Polymorphie.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createFlowers();
        createBees(12);
        createCloud();
        imageData = Polymorphie.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Polymorphie.crc2.canvas.height * Polymorphie.goldenCut;
        let posMountains = { x: 0, y: horizon };
        Polymorphie.drawBackground();
        Polymorphie.drawSun({ x: Polymorphie.crc2.canvas.width * .15, y: Polymorphie.crc2.canvas.height * .2 });
        Polymorphie.drawMountains(posMountains, 75, 200, "black", "white");
        Polymorphie.drawMountains(posMountains, 50, 150, "grey", "white");
        Polymorphie.drawPine(-30, -50, .6, .9);
        Polymorphie.drawPine(-70, -90, .5, .7);
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 3) + 1;
            if (flowerType == 1) {
                flowers.push(new Polymorphie.Lavender(xPos, 120 + (Polymorphie.crc2.canvas.height * Polymorphie.goldenCut), Polymorphie.crc2.canvas.height));
            }
            else if (flowerType == 2) {
                flowers.push(new Polymorphie.Dandelion(xPos, 120 + (Polymorphie.crc2.canvas.height * Polymorphie.goldenCut), Polymorphie.crc2.canvas.height));
            }
            else if (flowerType == 3) {
                flowers.push(new Polymorphie.Starflower(xPos, 120 + (Polymorphie.crc2.canvas.height * Polymorphie.goldenCut), Polymorphie.crc2.canvas.height));
            }
            xPos += 5 + Math.random() * (20 - 5);
        } while (xPos < Polymorphie.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Polymorphie.Bee({ x: Polymorphie.crc2.canvas.width / 2, y: Polymorphie.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .7, y: Polymorphie.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .10, y: Polymorphie.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .5, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Polymorphie.Cloud({ x: Polymorphie.crc2.canvas.width * .2, y: Polymorphie.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Polymorphie.crc2.clearRect(0, 0, Polymorphie.crc2.canvas.width, Polymorphie.crc2.canvas.height);
        Polymorphie.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
            moveable[index].draw();
        }
    }
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=main.js.map