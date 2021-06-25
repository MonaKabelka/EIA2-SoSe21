namespace Reloaded {
    export abstract class Flower {
        protected xPos: number;
        protected yRandomMin: number;
        protected yRandomMax: number;
        protected nectarValue: number = Math.floor(Math.random() * 2000) + 1000;
        protected nectarCounter: number = 0;
        protected yPos: number;
        protected nectarLength: number = 2;

        constructor(_xPos: number, _yRandomMin: number, _yRandomMax: number) {
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }

        public updateNectar(): void {
            //;
        }

        protected draw(): void {
            //
        }
    }

}