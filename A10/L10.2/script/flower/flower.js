"use strict";
var Polymorphie;
(function (Polymorphie) {
    class Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        draw() {
            //
        }
    }
    Polymorphie.Flower = Flower;
    class Lavender extends Flower {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.xPos, y);
            let flowerColor = ["#693087", "#793e9a", "#853daf"];
            let flowerSize = 1.5 + Math.random() * (2.5 - 1.5);
            Polymorphie.crc2.scale(flowerSize, flowerSize);
            Polymorphie.crc2.fillStyle = "#2f852a";
            Polymorphie.crc2.fillRect(0, 0, 0.8, -10);
            let yFLower1 = -10;
            let yFLower2 = -11;
            let yFLower3 = -13;
            let yFLower4 = -14;
            for (let z = 0; z < 3; z++) {
                Polymorphie.crc2.beginPath();
                Polymorphie.crc2.moveTo(0, yFLower1);
                Polymorphie.crc2.lineTo(-1, yFLower2);
                Polymorphie.crc2.lineTo(-2, yFLower3);
                Polymorphie.crc2.lineTo(-1, yFLower4);
                Polymorphie.crc2.lineTo(0, yFLower4);
                Polymorphie.crc2.lineTo(0.5, yFLower3);
                Polymorphie.crc2.lineTo(1, yFLower4);
                Polymorphie.crc2.lineTo(2, yFLower4);
                Polymorphie.crc2.lineTo(3, yFLower3);
                Polymorphie.crc2.lineTo(2, yFLower2);
                Polymorphie.crc2.lineTo(1, yFLower1);
                Polymorphie.crc2.closePath();
                Polymorphie.crc2.fillStyle = flowerColor[z];
                Polymorphie.crc2.fill();
                yFLower1 += -4;
                yFLower2 += -4;
                yFLower3 += -4;
                yFLower4 += -4;
            }
            Polymorphie.crc2.restore();
        }
    }
    Polymorphie.Lavender = Lavender;
    class Dandelion extends Flower {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.xPos, y);
            let r1 = 2;
            let r2 = 7;
            let gradient = Polymorphie.crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
            let flowerSize = .8 + Math.random() * (1.5 - .8);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
            Polymorphie.crc2.scale(flowerSize, flowerSize);
            Polymorphie.crc2.fillStyle = "#2f852a";
            Polymorphie.crc2.fillRect(0, 0, 1.5, -20);
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            Polymorphie.crc2.fillStyle = gradient;
            Polymorphie.crc2.fill();
            Polymorphie.crc2.restore();
        }
    }
    Polymorphie.Dandelion = Dandelion;
    class Starflower extends Flower {
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            Polymorphie.crc2.save();
            Polymorphie.crc2.translate(this.xPos, y);
            let flowerSize = .8 + Math.random() * (1 - .8);
            Polymorphie.crc2.scale(flowerSize, flowerSize);
            Polymorphie.crc2.fillStyle = "#2f852a";
            Polymorphie.crc2.fillRect(4.8, 12, 2, -15);
            Polymorphie.crc2.fillStyle = "#fdff92";
            Polymorphie.crc2.beginPath();
            Polymorphie.crc2.moveTo(5.4, 0);
            Polymorphie.crc2.lineTo(7.05, -3.5);
            Polymorphie.crc2.lineTo(10.9, -3.69);
            Polymorphie.crc2.lineTo(8.1, -6.55);
            Polymorphie.crc2.lineTo(8.75, -10.25);
            Polymorphie.crc2.lineTo(5.4, -8.5);
            Polymorphie.crc2.lineTo(2.06, -10.25);
            Polymorphie.crc2.lineTo(2.75, -6.55);
            Polymorphie.crc2.lineTo(.05, -3.9);
            Polymorphie.crc2.lineTo(3.75, -3.4);
            Polymorphie.crc2.lineTo(5.4, -0);
            Polymorphie.crc2.closePath();
            Polymorphie.crc2.fill();
            Polymorphie.crc2.restore();
        }
    }
    Polymorphie.Starflower = Starflower;
})(Polymorphie || (Polymorphie = {}));
//# sourceMappingURL=flower.js.map