namespace Reloaded {
    export class Dandelion extends Flower {

        public updateNectar(): void {
            this.nectarCounter++;
            if (this.nectarLength < 6) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            } else {
                console.log("Dandelion nectar is full");
            }
            crc2.save();
            crc2.translate(this.xPos, this.yPos);
            crc2.beginPath();
            crc2.arc(0.5, -26, this.nectarLength, 0, 2 * Math.PI);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.restore();
        } 

        protected draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            crc2.save();
            crc2.translate(this.xPos, y);
            let r1: number = 2;
            let r2: number = 7;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, -26, r1, 0, -26, r2);

            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, "HSLA(60, 40%, 80%, 0)");

            crc2.fillStyle = "#2f852a";
            crc2.fillRect(0, 0, 1.5, -20);

            crc2.beginPath();
            crc2.arc(0, -26, r2, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.fill();

            crc2.restore();
        }
    }
}