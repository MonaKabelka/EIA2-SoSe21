"use strict";
var Reloaded;
(function (Reloaded) {
    class Flower {
        constructor(_xPos, _yRandomMin, _yRandomMax) {
            this.nectarValue = Math.floor(Math.random() * 2000) + 1000;
            this.nectarCounter = 0;
            this.nectarLength = 2;
            this.xPos = _xPos;
            this.yRandomMax = _yRandomMax;
            this.yRandomMin = _yRandomMin;
            this.draw();
        }
        updateNectar() {
            //;
        }
        draw() {
            //
        }
    }
    Reloaded.Flower = Flower;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=flower.js.map