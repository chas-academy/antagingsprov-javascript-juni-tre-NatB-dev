function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna

  
    const bigEven = []
    const smallOdd = []
    const other = []

    
 function sortingNumbers (){
    for (number of numbers){
      if (number >10 && number %2 == 0){
        bigEven.push(number);                         // Lägg till en sak i arrayen bigEven.
      } else if (number<10 && number %2 !== 0){
        smallOdd.push(number);                         // Lägg till en sak i arrayen smallOdd
      } else {
        other.push(number);
      }      
    }
    let samling = {bigEven, smallOdd, other};          // Att jag kopplade return till sortingNumbers klammer löste det. 
    return samling;                                    // Innan hade jag return inom for-of-loppen, det visade nästan tomma arrays
  }                                                    // eftersom return avbröt funktionen.

  console.log(sortingNumbers());

}

  uppg10();
  
  module.exports = { uppg10 };
  