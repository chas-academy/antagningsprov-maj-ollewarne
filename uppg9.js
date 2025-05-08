

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    let numbers = [1,2,3,4,5,6,7,8,9]

    function oddOrEven(array){
        for (i of array){
            if (i % 2 == 0){
                console.log(i, "jämt")
            } else {
                console.log(i, "udda")
            }
        }
    }

    oddOrEven(numbers)

  
}

module.exports = { uppg9 };
