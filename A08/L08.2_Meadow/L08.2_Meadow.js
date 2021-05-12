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
        canvas.height = 700;
        canvas.width = 900;
        let horizon = crc2.canvas.height * goldenCut;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 100 }, { x: 250, y: 75 });
        drawCloud({ x: 315, y: 170 }, { x: 300, y: 80 });
        drawCloud({ x: 700, y: 200 }, { x: 400, y: 80 });
        drawMountains(posMountains, 75, 200, "black", "white");
        drawMountains(posMountains, 50, 150, "grey", "white");
        drawTree(-20, -60);
        drawLavender(-10, -150);
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(goldenCut, "white");
        gradient.addColorStop(1, "HSL(95, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
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
        console.log("Sun", _position);
        let r1 = 20;
        let r2 = 110;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(70, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 80%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawTree(_min, _max) {
        let stepMin = 30;
        let stepMax = 50;
        let x = 0;
        let horizon = crc2.canvas.height * goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            crc2.save();
            crc2.translate(x, y + (horizon + 15));
            let yTree1 = -70;
            let yTree2 = -150;
            let treeColor = ["#1d5d18", "#22691d", "#267121"];
            let treeSize = 0.6 + Math.random() * (0.8 - 0.6);
            crc2.scale(treeSize, treeSize);
            crc2.fillStyle = "#6d502b";
            crc2.fillRect(0, 0, 22, -70);
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
            crc2.translate(x, y + (horizon + 100));
            let flowerColor = ["#693087", "#793e9a", "#853daf"];
            let flowerSize = 1.5 + Math.random() * (2.5 - 1.5);
            crc2.scale(flowerSize, flowerSize);
            crc2.fillStyle = "rgb(35, 199, 21)";
            crc2.fillRect(0, 0, 2, -10);
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
})(FlowerMeadow || (FlowerMeadow = {}));
//# sourceMappingURL=L08.2_Meadow.js.map