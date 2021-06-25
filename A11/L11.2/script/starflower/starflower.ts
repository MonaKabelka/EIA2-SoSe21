namespace Reloaded {
    export class Starflower extends Flower {

        public updateNectar(): void {
            this.nectarCounter++;
            if (this.nectarLength < 7) {
                if (this.nectarValue == this.nectarCounter) {
                    this.nectarLength += 1;
                    this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
                }
            } else {
                console.log("Starflower nectar is full");
            }
            crc2.save();
            crc2.translate(this.xPos, this.yPos);
            crc2.beginPath();
            crc2.arc(5.5, -5.5, this.nectarLength, 0, 2 * Math.PI);
            crc2.fillStyle = "violet";
            crc2.fill();
            crc2.restore();
        }

        protected draw(): void {
            let y: number = this.yRandomMin + Math.random() * (this.yRandomMax - this.yRandomMin);
            this.yPos = y;
            crc2.save();
            crc2.translate(this.xPos, y);

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

            crc2.restore();
        }
    }
}