namespace Zufallsgedicht {
    let subjects: string[] = ["Naruto ", "Pain ", "Kakashi ", "Jiraiya ", "Itachi ", "Minato "];
    let predicates: string[] = ["fights ", "kills ", "loves ", "devours ", "dreams about ", "eats "];
    let objects: string[] = ["Sasuke", "Rock Lee", "Ramen", "Icha Icha", "Shadow Clones", "Gamabunta"];

    for (let a: number = 6; a > 0; a--) {
        let x: string = getVerse(subjects, predicates, objects);
        console.log(x);
    }

    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
        let versContainer: string = "";

        let randomNumberSubject: number = Math.floor(Math.random() * Math.floor(_subject.length));
        let randomNumberPredicate: number = Math.floor(Math.random() * Math.floor(_predicate.length));
        let randomNumberObject: number = Math.floor(Math.random() * Math.floor(_object.length));

        versContainer = _subject[randomNumberSubject] + _predicate[randomNumberPredicate] + _object[randomNumberObject];

        _subject.splice(randomNumberSubject, 1); //splice: 1.Parameter: Stelle ab der gelöscht wird, 2.Parameter: wie viel gelöscht wird 
        _predicate.splice(randomNumberPredicate, 1);
        _object.splice(randomNumberObject, 1);

        return versContainer;
    }
}