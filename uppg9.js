

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument



function sort (listofNumbers){                  // funktion med arrayen listofNumbers som argument

    for (number of listofNumbers) {             // loopar genom arrayen, steg för steg
        if (number %2 == 0) {                   // om nummber delat på 2 har 0 som rest, då är talet jämnt.
            console.log(number, "jämt");
        } else {
            console.log(number, "udda");        // else skicka numret och udda.
        }
        
    }
}

const sequence = [1, 20, 3, 2, 7, 19]           // array.

sort(sequence);                                 // kallar på funktionen med sequence som argument.

}
uppg9();


module.exports = { uppg9 };