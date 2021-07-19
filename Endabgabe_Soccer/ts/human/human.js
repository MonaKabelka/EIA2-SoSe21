"use strict";
var soccer;
(function (soccer) {
    class Human {
        constructor(_position, _jerseyColor) {
            this.position = _position;
            this.jerseyColor = _jerseyColor;
            this.draw();
        }
        get playerPosition() {
            return this.position;
        }
        draw() {
            //polymorphie
        }
        update() {
            //polymorphie
        }
        setJersey(_color) {
            this.jerseyColor = _color;
        }
    }
    soccer.Human = Human;
})(soccer || (soccer = {}));
//# sourceMappingURL=human.js.map