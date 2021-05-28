namespace BeesMeadow {
    export class Bee {
        public posX: number;
        public posY: number;
        public velocityX: number;
        public velocityY: number;
        public randomScaleX: number;
        public randomScaleY: number;
        public randomNumber: number = (Math.floor(Math.random() * 800) + 100);
        public counter: number = 0;

        constructor( _position: Vector, _velocity: Vector, _randomScale: Vector) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.randomScaleX = _randomScale.x;
            this.randomScaleY = _randomScale.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }

        public draw(): void {
           
            crc2.save();
            crc2.translate(this.posX, this.posY);

            crc2.scale(this.randomScaleX, this.randomScaleY);
            crc2.beginPath();
            crc2.fillStyle = "#fff200";
            crc2.ellipse(0, 0, 40, 60, Math.PI / 2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.lineWidth = 8;
            crc2.moveTo(0, -40);
            crc2.lineTo(0, 40);
            crc2.moveTo(20, -37);
            crc2.lineTo(20, 37);
            crc2.moveTo(40, -30);
            crc2.lineTo(40, 30);
            crc2.strokeStyle = "black";
            crc2.stroke();
    
            crc2.beginPath();
            crc2.lineWidth = 1;
            crc2.fillStyle = "white";
            crc2.ellipse(20, -60, 10, 30, Math.PI / 4, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
    
            crc2.beginPath();
            crc2.fillStyle = "white";
            crc2.ellipse(-10, -60, 10, 30, Math.PI / 1.2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.stroke();
            
            crc2.beginPath();
            crc2.ellipse(-20, 0, 37, 40, Math.PI / 2, 0, Math.PI );
            crc2.fillStyle = "black";
            crc2.fill();
    
            crc2.beginPath();
            crc2.arc(-40, -10, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(-42, -9, 8, 0, 2 * Math.PI);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
    
            crc2.beginPath();
            crc2.arc(-39.5, -9, 2.5, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            crc2.restore();
        }

        public update(): void {
            if (this.posX > crc2.canvas.width || this.posX < 0) {
                this.velocityX = -this.velocityX;
            }

            if (this.posY > crc2.canvas.height || this.posY < crc2.canvas.height * 0.65) {
                this.velocityY = -this.velocityY;
            }

            if (this.counter == this.randomNumber) {
                this.velocityX = -this.velocityX;
                this.velocityY = -this.velocityY;
                this.counter = 0;
                this.randomNumber = (Math.floor(Math.random() * 800) + 100);
            }

            this.posX += this.velocityX;
            this.posY += this.velocityY;
            this.counter ++;
            this.draw();
        }
    }
}