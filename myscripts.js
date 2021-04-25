var studente = {
    name: "Kaori",
    surname: "Zhou",
    age: 17,
};

//print every studente property 
for (var key in studente) {
    console.log(key + ": " + studente[key]);
}

var StudentList = [];

StudentList.push(studente);
console.log(StudentList);
console.log(getValue(studente, "name"));

check = true;
while (check === true) {
    var StudInput = {};
    StudInput.name = prompt("Nome studente: ");
    StudInput.surname = prompt("Cognome studente: ");
    StudInput.age = prompt("Età studente: ");

    StudentList.push(StudInput);
    console.log("pushed:" + StudentList);
    var risp = prompt("Vuoi inserire un altro studente? si/no");
    if (risp === 'no') {
        check = false;
    }

}

for (var i = 0; i < StudentList.length; i++) {
    var see = StudentList[i];
    console.log("Studente " + (i + 1) + "\n Nome: " + see.name + "; Cognome: " + see.surname + "; Età: " + see.age + ".");
}


function PrintObj(ToPrintObject) {
    var livelliInterni = 1;
    for (var key in ToPrintObject) {
        var currentElement = ToPrintObject[key];
        console.log(key, currentElement);

        if (currentElement.constructor.name === "Object") {
            livelliInterni += PrintObj(currentElement);
        }
    }

    return livelliInterni;
}

function getValue(object, key) {
    return object[key];
}
function setValue(object, key, value) {
    object[key] = value;
}


// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.