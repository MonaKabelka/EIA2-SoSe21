"use strict";
//Zusammen gearbeitet mit: Huu Thien Phan Ngoc, Mariia Kolkutova, Christina Däschner und Timur Yildirim
var Advanced;
(function (Advanced) {
    Advanced.goldenCut = 0.62;
    let moveable = [];
    let flowers = [];
    let imageData;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        Advanced.crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight - 150;
        canvas.width = window.innerWidth - 10;
        createBackground();
        createFlowers();
        createBees(12);
        createCloud();
        imageData = Advanced.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function createBackground() {
        let horizon = Advanced.crc2.canvas.height * Advanced.goldenCut;
        let posMountains = { x: 0, y: horizon };
        Advanced.drawBackground();
        Advanced.drawSun({ x: Advanced.crc2.canvas.width * .15, y: Advanced.crc2.canvas.height * .2 });
        Advanced.drawMountains(posMountains, 75, 200, "black", "white");
        Advanced.drawMountains(posMountains, 50, 150, "grey", "white");
        Advanced.drawPine(-30, -50, .6, .9);
        Advanced.drawPine(-70, -90, .5, .7);
    }
    function createFlowers() {
        let xPos = 0;
        do {
            let flowerType = Math.floor(Math.random() * 3) + 1;
            if (flowerType == 1) {
                flowers.push(new Advanced.Lavender(xPos, 120 + (Advanced.crc2.canvas.height * Advanced.goldenCut), Advanced.crc2.canvas.height));
            }
            else if (flowerType == 2) {
                flowers.push(new Advanced.Dandelion(xPos, 120 + (Advanced.crc2.canvas.height * Advanced.goldenCut), Advanced.crc2.canvas.height));
            }
            else if (flowerType == 3) {
                flowers.push(new Advanced.Starflower(xPos, 120 + (Advanced.crc2.canvas.height * Advanced.goldenCut), Advanced.crc2.canvas.height));
            }
            xPos += 5 + Math.random() * (20 - 5);
        } while (xPos < Advanced.crc2.canvas.width);
    }
    function createBees(_nBee) {
        for (let index = 0; index < _nBee; index++) {
            let randomScaleY = 0.15 + Math.random() * (0.15 - 0.05);
            let randomScaleX = randomScaleY;
            randomScaleX *= Math.round(Math.random()) ? 1 : -1;
            let randomVelocityX = (Math.random() - 0.5) * 3;
            let randomVelocityY = (Math.random() - 0.5) * 3;
            moveable.push(new Advanced.Bee({ x: Advanced.crc2.canvas.width / 2, y: Advanced.crc2.canvas.height * 0.8 }, { x: randomVelocityX, y: randomVelocityY }, { x: randomScaleX, y: randomScaleY }));
        }
    }
    function createCloud() {
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .7, y: Advanced.crc2.canvas.height * 0.19 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .10, y: Advanced.crc2.canvas.height * 0.23 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .5, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
        moveable.push(new Advanced.Cloud({ x: Advanced.crc2.canvas.width * .2, y: Advanced.crc2.canvas.height * 0.2 }, { x: 0.17, y: 0.1 }));
    }
    function animate() {
        requestAnimationFrame(animate);
        Advanced.crc2.clearRect(0, 0, Advanced.crc2.canvas.width, Advanced.crc2.canvas.height);
        Advanced.crc2.putImageData(imageData, 0, 0);
        for (let index = 0; index < flowers.length; index++) {
            flowers[index].updateNectar();
        }
        for (let index = 0; index < moveable.length; index++) {
            moveable[index].update();
        }
    }
})(Advanced || (Advanced = {}));
//# sourceMappingURL=main.js.map