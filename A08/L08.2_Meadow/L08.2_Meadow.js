"use strict";
var FlowerMeadow;
(function (FlowerMeadow) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let goldenCut = 0.62;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        let horizon = crc2.canvas.height * goldenCut;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: canvas.width * .15, y: canvas.height * .2 });
        drawCloud({ x: canvas.width * .3, y: canvas.height * .2 }, { x: 250, y: 75 });
        drawCloud({ x: canvas.width * .5, y: canvas.height * .25 }, { x: 300, y: 80 });
        drawCloud({ x: canvas.width * .7, y: canvas.height * .2 }, { x: 400, y: 80 });
        drawMountains(posMountains, 75, 200, "black", "white");
        drawMountains(posMountains, 50, 150, "grey", "white");
        drawPine(-30, -50, .6, .9);
        drawPine(-70, -90, .5, .7);
        drawLavender(-10, -canvas.height);
        drawDandelion(-10, -canvas.height);
        drawStarflower(-10, -canvas.height);
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#9aadb5");
        gradient.addColorStop(goldenCut, "white");
        gradient.addColorStop(0.65, "#204f27");
        gradient.addColorStop(.8, "#4b9157");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud(_position, _size) {
        let nParticles = 30;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 70;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawPine(_min, _max, _minSize, _maxSize) {
        let stepMin = 30;
        let stepMax = 70;
        let x = 0;
        let horizon = crc2.canvas.height * goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 15));
            let yTree1 = -40;
            let yTree2 = -120;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            crc2.scale(treeSize, treeSize);
            crc2.fillStyle = "#544026";
            crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                crc2.beginPath();
                crc2.moveTo(-50, yTree1);
                crc2.lineTo(72, yTree1);
                crc2.lineTo(11, yTree2);
                crc2.closePath();
                crc2.fillStyle = treeColor[z];
                crc2.fill();
                yTree1 += -40;
                yTree2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawLavender(_min, _max) {
        let stepMin = 10;
        let stepMax = 15;
        let x = 0;
        let horizon = crc2.canvas.height * goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 110));
            let flowerColor = ["#693087", "#793e9a", "#853daf"];
            let flowerSize = 1.5 + Math.random() * (2.5 - 1.5);
            crc2.scale(flowerSize, flowerSize);
            crc2.fillStyle = "#2f852a";
            crc2.fillRect(0, 0, 0.8, -10);
            let yFLower1 = -10;
            let yFLower2 = -11;
            let yFLower3 = -13;
            let yFLower4 = -14;
            for (let z = 0; z < 3; z++) {
                crc2.beginPath();
                crc2.moveTo(0, yFLower1);
                crc2.lineTo(-1, yFLower2);
                crc2.lineTo(-2, yFLower3);
                crc2.lineTo(-1, yFLower4);
                crc2.lineTo(0, yFLower4);
                crc2.lineTo(0.5, yFLower3);
                crc2.lineTo(1, yFLower4);
                crc2.lineTo(2, yFLower4);
                crc2.lineTo(3, yFLower3);
                crc2.lineTo(2, yFLower2);
                crc2.lineTo(1, yFLower1);
                crc2.closePath();
                crc2.fillStyle = flowerColor[z];
                crc2.fill();
                yFLower1 += -4;
                yFLower2 += -4;
                yFLower3 += -4;
                yFLower4 += -4;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawDandelion(_min, _max) {
        let stepMin = 10;
        let stepMax = 15;
        let x = 0;
        let horizon = crc2.canvas.height * goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 110));
            let r1 = 2;
            let r2 = 7;
            let gradient = crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
            gradient.addColorStop(0, "#fdffd1");
            gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
            crc2.fillStyle = "#2f852a";
            crc2.fillRect(0, 0, 1.5, -20);
            crc2.beginPath();
            crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
    function drawStarflower(_min, _max) {
        let stepMin = 10;
        let stepMax = 15;
        let x = 0;
        let horizon = crc2.canvas.height * goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 110));
            let flowerSize = .8 + Math.random() * (1 - .8);
            crc2.scale(flowerSize, flowerSize);
            crc2.fillStyle = "#2f852a";
            crc2.fillRect(4.8, 12, 2, -15);
            crc2.fillStyle = "#fdff92";
            crc2.beginPath();
            crc2.moveTo(5.4, 0);
            crc2.lineTo(7.05, -3.5);
            crc2.lineTo(10.9, -3.69);
            crc2.lineTo(8.1, -6.55);
            crc2.lineTo(8.75, -10.25);
            crc2.lineTo(5.4, -8.5);
            crc2.lineTo(2.06, -10.25);
            crc2.lineTo(2.75, -6.55);
            crc2.lineTo(.05, -3.9);
            crc2.lineTo(3.75, -3.4);
            crc2.lineTo(5.4, -0);
            crc2.closePath();
            crc2.fill();
            x += stepMin + Math.random() * (stepMax - stepMin);
            crc2.restore();
        } while (x < crc2.canvas.width);
    }
})(FlowerMeadow || (FlowerMeadow = {}));
//# sourceMappingURL=L08.2_Meadow.js.map