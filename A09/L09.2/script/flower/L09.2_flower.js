"use strict";
var BeesMeadow;
(function (BeesMeadow) {
    class Flower {
        constructor(_flowerType, _xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.flowerType = _flowerType;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            BeesMeadow.crc2.save();
            BeesMeadow.crc2.translate(this.xPos, y);
            if (this.flowerType == 1) { //Lavender
                let flowerColor = ["#693087", "#793e9a", "#853daf"];
                let flowerSize = 1.5 + Math.random() * (2.5 - 1.5);
                BeesMeadow.crc2.scale(flowerSize, flowerSize);
                BeesMeadow.crc2.fillStyle = "#2f852a";
                BeesMeadow.crc2.fillRect(0, 0, 0.8, -10);
                let yFLower1 = -10;
                let yFLower2 = -11;
                let yFLower3 = -13;
                let yFLower4 = -14;
                for (let z = 0; z < 3; z++) {
                    BeesMeadow.crc2.beginPath();
                    BeesMeadow.crc2.moveTo(0, yFLower1);
                    BeesMeadow.crc2.lineTo(-1, yFLower2);
                    BeesMeadow.crc2.lineTo(-2, yFLower3);
                    BeesMeadow.crc2.lineTo(-1, yFLower4);
                    BeesMeadow.crc2.lineTo(0, yFLower4);
                    BeesMeadow.crc2.lineTo(0.5, yFLower3);
                    BeesMeadow.crc2.lineTo(1, yFLower4);
                    BeesMeadow.crc2.lineTo(2, yFLower4);
                    BeesMeadow.crc2.lineTo(3, yFLower3);
                    BeesMeadow.crc2.lineTo(2, yFLower2);
                    BeesMeadow.crc2.lineTo(1, yFLower1);
                    BeesMeadow.crc2.closePath();
                    BeesMeadow.crc2.fillStyle = flowerColor[z];
                    BeesMeadow.crc2.fill();
                    yFLower1 += -4;
                    yFLower2 += -4;
                    yFLower3 += -4;
                    yFLower4 += -4;
                }
                BeesMeadow.crc2.restore();
            }
            else if (this.flowerType == 2) { //Dandelion
                let r1 = 2;
                let r2 = 7;
                let gradient = BeesMeadow.crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
                let flowerSize = .8 + Math.random() * (1.5 - .8);
                gradient.addColorStop(0, "white");
                gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
                BeesMeadow.crc2.scale(flowerSize, flowerSize);
                BeesMeadow.crc2.fillStyle = "#2f852a";
                BeesMeadow.crc2.fillRect(0, 0, 1.5, -20);
                BeesMeadow.crc2.beginPath();
                BeesMeadow.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
                BeesMeadow.crc2.fillStyle = gradient;
                BeesMeadow.crc2.fill();
                BeesMeadow.crc2.restore();
            }
            else { //Starflower
                let flowerSize = .8 + Math.random() * (1 - .8);
                BeesMeadow.crc2.scale(flowerSize, flowerSize);
                BeesMeadow.crc2.fillStyle = "#2f852a";
                BeesMeadow.crc2.fillRect(4.8, 12, 2, -15);
                BeesMeadow.crc2.fillStyle = "#fdff92";
                BeesMeadow.crc2.beginPath();
                BeesMeadow.crc2.moveTo(5.4, 0);
                BeesMeadow.crc2.lineTo(7.05, -3.5);
                BeesMeadow.crc2.lineTo(10.9, -3.69);
                BeesMeadow.crc2.lineTo(8.1, -6.55);
                BeesMeadow.crc2.lineTo(8.75, -10.25);
                BeesMeadow.crc2.lineTo(5.4, -8.5);
                BeesMeadow.crc2.lineTo(2.06, -10.25);
                BeesMeadow.crc2.lineTo(2.75, -6.55);
                BeesMeadow.crc2.lineTo(.05, -3.9);
                BeesMeadow.crc2.lineTo(3.75, -3.4);
                BeesMeadow.crc2.lineTo(5.4, -0);
                BeesMeadow.crc2.closePath();
                BeesMeadow.crc2.fill();
                BeesMeadow.crc2.restore();
            }
        }
    }
    BeesMeadow.Flower = Flower;
})(BeesMeadow || (BeesMeadow = {}));
//# sourceMappingURL=L09.2_flower.js.map