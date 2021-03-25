"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjekte = ["Naruto ", "Pain ", "Kakashi ", "Jiraiya ", "Itachi ", "Minato "];
    let prädikate = ["bekämpft ", "tötet ", "liebt ", "trainiert mit ", "versiegelt ", "isst "];
    let objekte = ["Sasuke", "Rock Lee", "Ramen", "Flirtparadies", "Schattendoppelgänger", "Gamabunta"];
    for (let a = 6; a > 0; a--) {
        let x = getVerse(subjekte, prädikate, objekte);
        console.log(x);
    }
    function getVerse(_subjekt, _prädikat, _objekt) {
        let versContainer = "";
        let randomNrSubjekt = Math.floor(Math.random() * Math.floor(_subjekt.length));
        let randomNrPrädikat = Math.floor(Math.random() * Math.floor(_prädikat.length));
        let randomNrObject = Math.floor(Math.random() * Math.floor(_objekt.length));
        versContainer = _subjekt[randomNrSubjekt] + _prädikat[randomNrPrädikat] + _objekt[randomNrObject];
        _subjekt.splice(randomNrSubjekt, 1); //Wieso , 1?
        _prädikat.splice(randomNrPrädikat, 1);
        _objekt.splice(randomNrObject, 1);
        return versContainer;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=A01_Zufallsgedicht.js.map