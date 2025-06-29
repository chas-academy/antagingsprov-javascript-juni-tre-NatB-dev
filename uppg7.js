

function uppg7() {
   
    // skapa en funktion som tar in två tal som argument
    // funktionen ska returnera summan av talen
    // kalla på funktionen i en return statement och ge den parametrarna 5 och 10

 function returTal (tal1, tal2) {
    let sum = tal1 + tal2;
    return sum;
}

console.log(returTal(5, 10));
}

uppg7();


module.exports = { uppg7 };