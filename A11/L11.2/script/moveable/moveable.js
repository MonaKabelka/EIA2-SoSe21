"use strict";
var Reloaded;
(function (Reloaded) {
    class Moveable {
        constructor(_position, _velocity) {
            this.posX = _position.x;
            this.posY = _position.y;
            this.velocityX = _velocity.x;
            this.velocityY = _velocity.y;
        }
        update() {
            //
        }
        draw() {
            //
        }
    }
    Reloaded.Moveable = Moveable;
})(Reloaded || (Reloaded = {}));
//# sourceMappingURL=moveable.js.map