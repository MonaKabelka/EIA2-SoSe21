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
    function getVerse(_subject, _predicate, _object) {
        let versContainer = "";
        let randomNumberSubject = Math.floor(Math.random() * Math.floor(_subject.length));
        let randomNumberPredicate = Math.floor(Math.random() * Math.floor(_predicate.length));
        let randomNumberObject = Math.floor(Math.random() * Math.floor(_object.length));
        versContainer = _subject[randomNumberSubject] + _predicate[randomNumberPredicate] + _object[randomNumberObject];
        _subject.splice(randomNumberSubject, 1); //splice: 1.Parameter: Stelle ab der gelöscht wird, 2.Parameter: wie viel gelöscht wird 
        _predicate.splice(randomNumberPredicate, 1);
        _object.splice(randomNumberObject, 1);
        return versContainer;
    }
})(Zufallsgedicht || (Zufallsgedicht = {}));
//# sourceMappingURL=A01_RandomPoem.js.map