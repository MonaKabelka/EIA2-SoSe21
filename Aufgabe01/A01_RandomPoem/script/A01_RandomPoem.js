"use strict";
var Zufallsgedicht;
(function (Zufallsgedicht) {
    let subjects = ["Naruto ", "Pain ", "Kakashi ", "Jiraiya ", "Itachi ", "Minato "];
    let predicates = ["fights ", "kills ", "loves ", "devours ", "dreams about ", "eats "];
    let objects = ["Sasuke", "Rock Lee", "Ramen", "Icha Icha", "Shadow Clones", "Gamabunta"];
    for (let a = 6; a > 0; a--) {
        let x = getVerse(subjects, predicates, objects);
        console.log(x);
    }
    function getVerse(_subjekt, _prädikat, _objekt) {
        let versContainer = "";
        let randomNrSubjekt = Math.floor(Math.random() * Math.floor(_subjekt.length));
        let randomNrPrädikat = Math.floor(Math.random() * Math.floor(_prädikat.length));
        let randomNrObject = Math.floor(Math.random() * Math.floor(_objekt.length));
        versContainer = _subjekt[randomNrSubjekt] + _prädikat[randomNrPrädikat] + _objekt[randomNrObject];
        _subjekt.splice(randomNrSubjekt, 1); //splice: 1.Parameter: Stelle ab der gelöscht wird, 2.Parameter: wie viel gelöscht wird 
        _prädikat.splice(randomNrPrädikat, 1);
        _objekt.splice(randomNrObject, 1);
        return versContainer;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=A01_RandomPoem.js.map