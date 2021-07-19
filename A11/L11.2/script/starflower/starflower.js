"use strict";
var Reloaded;
(function (Reloaded) {
    class Starflower extends Reloaded.Flower {
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
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.xPos, this.yPos);
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(5.5, -5.5, this.nectarLength, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = "violet";
            Reloaded.crc2.fill();
            Reloaded.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.xPos, y);
            Reloaded.crc2.fillStyle = "#2f852a";
            Reloaded.crc2.fillRect(4.8, 12, 2, -15);
            Reloaded.crc2.fillStyle = "#fdff92";
            Reloaded.crc2.beginPath();
            Reloaded.crc2.moveTo(5.4, 0);
            Reloaded.crc2.lineTo(7.05, -3.5);
            Reloaded.crc2.lineTo(10.9, -3.69);
            Reloaded.crc2.lineTo(8.1, -6.55);
            Reloaded.crc2.lineTo(8.75, -10.25);
            Reloaded.crc2.lineTo(5.4, -8.5);
            Reloaded.crc2.lineTo(2.06, -10.25);
            Reloaded.crc2.lineTo(2.75, -6.55);
            Reloaded.crc2.lineTo(.05, -3.9);
            Reloaded.crc2.lineTo(3.75, -3.4);
            Reloaded.crc2.lineTo(5.4, -0);
            Reloaded.crc2.closePath();
            Reloaded.crc2.fill();
            Reloaded.crc2.restore();
        }
    }
    Reloaded.Starflower = Starflower;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=starflower.js.map