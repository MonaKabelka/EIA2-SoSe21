"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekte = ["Harry", "Hermine", "Ron", "Bellatrix", "Snape", "Dumbledore"];
    let prädikate = ["zaubert", "tötet", "liebt", "appariert", "verflucht", "sucht"];
    let objekte = ["Zaubertränke", "Werwölfe", "Dementoren", "Hagrid", "Wurmschwanz", "Drachen"];
    let a;
    console.log();
    for (a = 6; a > 0; a--) { //6 bis 1 werden ausgegeben? stimmt das?
        console.log(a);
        subjekte = [];
        prädikate = [];
        objekte = [];
        let x = getVerse(subjekte[0], prädikate[0], objekte[0]);
        console.log(x);
    }
    function getVerse(_subjekt, _prädikat, _objekt) {
        return "Alohomora";
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=A01_Zufallsgedicht.js.map