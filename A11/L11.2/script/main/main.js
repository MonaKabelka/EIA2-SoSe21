"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var Reloaded;
(function (Reloaded) {
    Reloaded.goldenCut = 0.62;
    let moveable = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Reloaded.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createFlowers();
        createBees(12);
        createCloud();
        imageData = Reloaded.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Reloaded.crc2.canvas.height * Reloaded.goldenCut;
        let posMountains = { x: 0, y: horizon };
        Reloaded.drawBackground();
        Reloaded.drawSun({ x: Reloaded.crc2.canvas.width * .15, y: Reloaded.crc2.canvas.height * .2 });
        Reloaded.drawMountains(posMountains, 75, 200, "black", "white");
        Reloaded.drawMountains(posMountains, 50, 150, "grey", "white");
        Reloaded.drawPine(-30, -50, .6, .9);
        Reloaded.drawPine(-70, -90, .5, .7);
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 3) + 1;
            if (flowerType == 1) {
                flowers.push(new Reloaded.Lavender(xPos, 120 + (Reloaded.crc2.canvas.height * Reloaded.goldenCut), Reloaded.crc2.canvas.height));
            }
            else if (flowerType == 2) {
                flowers.push(new Reloaded.Dandelion(xPos, 120 + (Reloaded.crc2.canvas.height * Reloaded.goldenCut), Reloaded.crc2.canvas.height));
            }
            else if (flowerType == 3) {
                flowers.push(new Reloaded.Starflower(xPos, 120 + (Reloaded.crc2.canvas.height * Reloaded.goldenCut), Reloaded.crc2.canvas.height));
            }
            xPos += 5 + Math.random() * (20 - 5);
        } while (xPos < Reloaded.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Reloaded.Bee({ x: Reloaded.crc2.canvas.width / 2, y: Reloaded.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Reloaded.Cloud({ x: Reloaded.crc2.canvas.width * .7, y: Reloaded.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Reloaded.Cloud({ x: Reloaded.crc2.canvas.width * .10, y: Reloaded.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Reloaded.Cloud({ x: Reloaded.crc2.canvas.width * .5, y: Reloaded.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Reloaded.Cloud({ x: Reloaded.crc2.canvas.width * .2, y: Reloaded.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Reloaded.crc2.clearRect(0, 0, Reloaded.crc2.canvas.width, Reloaded.crc2.canvas.height);
        Reloaded.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < flowers.length; index++) {
            flowers[index].updateNectar();
        }
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
        }
    }
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=main.js.map