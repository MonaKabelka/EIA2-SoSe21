"use strict";
var BeesMeadow;
(function (BeesMeadow) {
    function drawBackground() {
        let gradient = BeesMeadow.crc2.createLinearGradient(0, 0, 0, BeesMeadow.crc2.canvas.height);
        gradient.addColorStop(0, "#9aadb5");
        gradient.addColorStop(BeesMeadow.goldenCut, "white");
        gradient.addColorStop(0.65, "#204f27");
        gradient.addColorStop(.8, "#4b9157");
        BeesMeadow.crc2.fillStyle = gradient;
        BeesMeadow.crc2.fillRect(0, 0, BeesMeadow.crc2.canvas.width, BeesMeadow.crc2.canvas.height);
    }
    BeesMeadow.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        BeesMeadow.crc2.save();
        BeesMeadow.crc2.translate(_position.x, _position.y);
        BeesMeadow.crc2.beginPath();
        BeesMeadow.crc2.moveTo(0, 0);
        BeesMeadow.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            BeesMeadow.crc2.lineTo(x, y);
        } while (x < BeesMeadow.crc2.canvas.width);
        BeesMeadow.crc2.lineTo(x, 0);
        BeesMeadow.crc2.closePath();
        let gradient = BeesMeadow.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        BeesMeadow.crc2.fillStyle = gradient;
        BeesMeadow.crc2.fill();
        BeesMeadow.crc2.restore();
    }
    BeesMeadow.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 70;
        let gradient = BeesMeadow.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
        BeesMeadow.crc2.save();
        BeesMeadow.crc2.translate(_position.x, _position.y);
        BeesMeadow.crc2.fillStyle = gradient;
        BeesMeadow.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        BeesMeadow.crc2.fill();
        BeesMeadow.crc2.restore();
    }
    BeesMeadow.drawSun = drawSun;
    function drawPine(_min, _max, _minSize, _maxSize) {
        let stepMin = 30;
        let stepMax = 70;
        let x = 0;
        let horizon = BeesMeadow.crc2.canvas.height * BeesMeadow.goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            BeesMeadow.crc2.save();
            BeesMeadow.crc2.translate(x, y + (horizon + 15));
            let yTree1 = -40;
            let yTree2 = -120;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            BeesMeadow.crc2.scale(treeSize, treeSize);
            BeesMeadow.crc2.fillStyle = "#544026";
            BeesMeadow.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                BeesMeadow.crc2.beginPath();
                BeesMeadow.crc2.moveTo(-50, yTree1);
                BeesMeadow.crc2.lineTo(72, yTree1);
                BeesMeadow.crc2.lineTo(11, yTree2);
                BeesMeadow.crc2.closePath();
                BeesMeadow.crc2.fillStyle = treeColor[z];
                BeesMeadow.crc2.fill();
                yTree1 += -40;
                yTree2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            BeesMeadow.crc2.restore();
        } while (x < BeesMeadow.crc2.canvas.width);
    }
    BeesMeadow.drawPine = drawPine;
})(BeesMeadow || (BeesMeadow = {}));
//# sourceMappingURL=L09.2_background.js.map