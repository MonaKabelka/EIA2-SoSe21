"use strict";
var Advanced;
(function (Advanced) {
    class Starflower extends Advanced.Flower {
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 7) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("Starflower nectar is full");
            }
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, this.yPos);
            Advanced.crc2.beginPath();
            Advanced.crc2.arc(5.5, -5.5, this.nectarLength, 0, 2 * Math.PI);
            Advanced.crc2.fillStyle = "violet";
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Advanced.crc2.save();
            Advanced.crc2.translate(this.xPos, y);
            Advanced.crc2.fillStyle = "#2f852a";
            Advanced.crc2.fillRect(4.8, 12, 2, -15);
            Advanced.crc2.fillStyle = "#fdff92";
            Advanced.crc2.beginPath();
            Advanced.crc2.moveTo(5.4, 0);
            Advanced.crc2.lineTo(7.05, -3.5);
            Advanced.crc2.lineTo(10.9, -3.69);
            Advanced.crc2.lineTo(8.1, -6.55);
            Advanced.crc2.lineTo(8.75, -10.25);
            Advanced.crc2.lineTo(5.4, -8.5);
            Advanced.crc2.lineTo(2.06, -10.25);
            Advanced.crc2.lineTo(2.75, -6.55);
            Advanced.crc2.lineTo(.05, -3.9);
            Advanced.crc2.lineTo(3.75, -3.4);
            Advanced.crc2.lineTo(5.4, -0);
            Advanced.crc2.closePath();
            Advanced.crc2.fill();
            Advanced.crc2.restore();
        }
    }
    Advanced.Starflower = Starflower;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=starflower.js.map