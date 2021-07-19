"use strict";
var Reloaded;
(function (Reloaded) {
    class Dandelion extends Reloaded.Flower {
        updateNectar() {
            this.nectarCounter++;
            if (this.nectarLength < 6) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            }
            else {
                console.log("Dandelion nectar is full");
            }
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.xPos, this.yPos);
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(0.5, -26, this.nectarLength, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = "grey";
            Reloaded.crc2.fill();
            Reloaded.crc2.restore();
        }
        draw() {
            let y = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            Reloaded.crc2.save();
            Reloaded.crc2.translate(this.xPos, y);
            let r1 = 2;
            let r2 = 7;
            let gradient = Reloaded.crc2.createRadialGradient(0, -26, r1, 0, -26, r2);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");
            Reloaded.crc2.fillStyle = "#2f852a";
            Reloaded.crc2.fillRect(0, 0, 1.5, -20);
            Reloaded.crc2.beginPath();
            Reloaded.crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            Reloaded.crc2.fillStyle = gradient;
            Reloaded.crc2.fill();
            Reloaded.crc2.restore();
        }
    }
    Reloaded.Dandelion = Dandelion;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=dandelion.js.map