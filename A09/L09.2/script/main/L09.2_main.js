"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var BeesMeadow;
(function (BeesMeadow) {
    BeesMeadow.goldenCut = 0.62;
    let bee = [];
    let flowers = [];
    let clouds = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        BeesMeadow.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createFlowers();
        createBees(12);
        createCloud();
        imageData = BeesMeadow.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = BeesMeadow.crc2.canvas.height * BeesMeadow.goldenCut;
        let posMountains = { x: 0, y: horizon };
        BeesMeadow.drawBackground();
        BeesMeadow.drawSun({ x: BeesMeadow.crc2.canvas.width * .15, y: BeesMeadow.crc2.canvas.height * .2 });
        BeesMeadow.drawMountains(posMountains, 75, 200, "black", "white");
        BeesMeadow.drawMountains(posMountains, 50, 150, "grey", "white");
        BeesMeadow.drawPine(-30, -50, .6, .9);
        BeesMeadow.drawPine(-70, -90, .5, .7);
    }
    function createFlowers() {
        let xPos = 0;
        do {
            flowers.push(new BeesMeadow.Flower(Math.floor(Math.random() * 3) + 1, xPos, 120 + (BeesMeadow.crc2.canvas.height * BeesMeadow.goldenCut), BeesMeadow.crc2.canvas.height));
            xPos += 5 + Math.random() * (20 - 5);
        } while (xPos < BeesMeadow.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            bee.push(new BeesMeadow.Bee({ x: BeesMeadow.crc2.canvas.width / 2, y: BeesMeadow.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        clouds.push(new BeesMeadow.Cloud({ x: BeesMeadow.crc2.canvas.width * .7, y: BeesMeadow.crc2.canvas.height * 0.19 }));
        clouds.push(new BeesMeadow.Cloud({ x: BeesMeadow.crc2.canvas.width * .10, y: BeesMeadow.crc2.canvas.height * 0.23 }));
        clouds.push(new BeesMeadow.Cloud({ x: BeesMeadow.crc2.canvas.width * .5, y: BeesMeadow.crc2.canvas.height * 0.2 }));
        clouds.push(new BeesMeadow.Cloud({ x: BeesMeadow.crc2.canvas.width * .2, y: BeesMeadow.crc2.canvas.height * 0.2 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        BeesMeadow.crc2.clearRect(0, 0, BeesMeadow.crc2.canvas.width, BeesMeadow.crc2.canvas.height);
        BeesMeadow.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < bee.length; index++) {
            bee[index].update();
        }
        for (let index = 0; index < clouds.length; index++) {
            clouds[index].update();
        }
    }
})(BeesMeadow || (BeesMeadow = {}));
//# sourceMappingURL=L09.2_main.js.map