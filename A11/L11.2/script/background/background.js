"use strict";
var Reloaded;
(function (Reloaded) {
    function drawBackground() {
        let gradient = Reloaded.crc2.createLinearGradient(0, 0, 0, Reloaded.crc2.canvas.height);
        gradient.addColorStop(0, "#9aadb5");
        gradient.addColorStop(Reloaded.goldenCut, "white");
        gradient.addColorStop(0.65, "#204f27");
        gradient.addColorStop(.8, "#4b9157");
        Reloaded.crc2.fillStyle = gradient;
        Reloaded.crc2.fillRect(0, 0, Reloaded.crc2.canvas.width, Reloaded.crc2.canvas.height);
    }
    Reloaded.drawBackground = drawBackground;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        let stepMin = 50;
        let stepMax = 150;
        let x = 0;
        Reloaded.crc2.save();
        Reloaded.crc2.translate(_position.x, _position.y);
        Reloaded.crc2.beginPath();
        Reloaded.crc2.moveTo(0, 0);
        Reloaded.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            Reloaded.crc2.lineTo(x, y);
        } while (x < Reloaded.crc2.canvas.width);
        Reloaded.crc2.lineTo(x, 0);
        Reloaded.crc2.closePath();
        let gradient = Reloaded.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.7, _colorHigh);
        Reloaded.crc2.fillStyle = gradient;
        Reloaded.crc2.fill();
        Reloaded.crc2.restore();
    }
    Reloaded.drawMountains = drawMountains;
    function drawSun(_position) {
        let r1 = 20;
        let r2 = 70;
        let gradient = Reloaded.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "#fdffd1");
        gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
        Reloaded.crc2.save();
        Reloaded.crc2.translate(_position.x, _position.y);
        Reloaded.crc2.fillStyle = gradient;
        Reloaded.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Reloaded.crc2.fill();
        Reloaded.crc2.restore();
    }
    Reloaded.drawSun = drawSun;
    function drawPine(_min, _max, _minSize, _maxSize) {
        let stepMin = 30;
        let stepMax = 70;
        let x = 0;
        let horizon = Reloaded.crc2.canvas.height * Reloaded.goldenCut;
        do {
            let y = -_min - Math.random() * (_max - _min);
            Reloaded.crc2.save();
            Reloaded.crc2.translate(x, y + (horizon + 15));
            let yTree1 = -40;
            let yTree2 = -120;
            let treeColor = ["#154f31", "#1a5838", "#1e5d3c"];
            let treeSize = _minSize + Math.random() * (_maxSize - _minSize);
            Reloaded.crc2.scale(treeSize, treeSize);
            Reloaded.crc2.fillStyle = "#544026";
            Reloaded.crc2.fillRect(0, 0, 22, -40);
            for (let z = 0; z < 3; z++) {
                Reloaded.crc2.beginPath();
                Reloaded.crc2.moveTo(-50, yTree1);
                Reloaded.crc2.lineTo(72, yTree1);
                Reloaded.crc2.lineTo(11, yTree2);
                Reloaded.crc2.closePath();
                Reloaded.crc2.fillStyle = treeColor[z];
                Reloaded.crc2.fill();
                yTree1 += -40;
                yTree2 += -40;
            }
            x += stepMin + Math.random() * (stepMax - stepMin);
            Reloaded.crc2.restore();
        } while (x < Reloaded.crc2.canvas.width);
    }
    Reloaded.drawPine = drawPine;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=background.js.map