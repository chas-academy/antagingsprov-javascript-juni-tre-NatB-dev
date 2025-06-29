

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument



//-------------------------------------------------------------------

// Steg 2) Få fram de över 30 år.
// steg 3) Få in en funktion i mixen.


function folk(listan){

    for (person of listan) {
    if (person.age >= 30) {
        console.log(person.name, person.age);
    }
}
}


// Steg 1) Göra lista med objekt.

const listofPeople = [
     {name: "Thomas", age: 20},
     {name: "Julia", age: 33},
     {name: "Magdalena", age: 63},
     {name: "Tommy", age: 87},
     {name: "Leonard", age: 52}    
]


// Steg 4) Anropa funktionen.

folk(listofPeople);



}







//---------------------------------------------------------------------------------------------------------
// Det jag egentligen behöver är A och B. 
//
// A: Kolla på person[0].age   
// B: IF: Om person[0].age är >30 kör -------- console.log(person[0])
// C: Öka [0] med +1 
// Stoppa efter 4. (let x = 0, x < 4, ++). Något sånt här har jag för mig man kunde göra.

// for-of-loop är samma som:
// for (let i = 0; i<listan.length; i++) {}





uppg8();

module.exports = { uppg8 };