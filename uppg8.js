

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument
    let persons = [{name: "bob", age: 50}, {name: "benny", age: 25}, 
        {name: "bobby", age: 70}, {name: "hanna", age: 8}, {name: "bill", age: 29}]
    
    function checkAge(array){
        for (i of array){
            if (i.age > 30){
                console.log(i.name)
            }
        }
    }

    checkAge(persons)


}

module.exports = { uppg8 };
