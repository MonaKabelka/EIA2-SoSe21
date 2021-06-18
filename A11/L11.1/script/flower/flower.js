"use strict";
var Advanced;
(function (Advanced) {
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
    Advanced.Flower = Flower;
})(Advanced || (Advanced = {}));
//# sourceMappingURL=flower.js.map