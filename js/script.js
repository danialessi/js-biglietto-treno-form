// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato (Il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.)
// Categoria selezionata dall'utente
// Se clicchiamo su Genera, la sezione col biglietto apparirà e sarà popolata coi dati del biglietto
// Se clicchiamo su annulla dobbiamo ripulire il form e nascondere la sezione col biglietto.

// Definisco funzionalità del bottone 
var generateButton = document.getElementById("generate-button");

var ticket = document.getElementById("ticket");

generateButton.addEventListener('click', function() {
    // codice da svolgere al click 

    // displayonclick 
    ticket.classList.add("displayonlick");
    
    // nome utente 
    var userGenerator = document.getElementById("name");
    var userName = userGenerator.value;
    document.getElementById("username").innerHTML = userName;
    console.log(userName);

    // km da percorrere 
    var kmGenerator = document.getElementById("km");
    var kmUser = parseInt(kmGenerator.value);
    console.log(kmUser);

    // verifico età utente 
    var ageGenerator = document.getElementById("age");
    var userAge = ageGenerator.value;
    console.log(userAge);

    // genero il biglietto sapendo che il prezzo al km è 0.21 € e va applicato uno sconto del 20% per minorenni e 40% over65

    // prezzo di default (quindi maggiorenne) 
    var defaultPrice = kmUser * 0.21;
    defaultPrice = defaultPrice.toFixed(2);
    // console.log("prezzo intero", defaultPrice);

    // prezzo scontato al 20%
    var percent20 = (defaultPrice / 100) * 20;
    percent20 = percent20.toFixed(2);
    // console.log("sconto 20", percent20);

    // prezzo scontato al 40%
    var percent40 = (defaultPrice / 100) * 40;
    percent40 = percent40.toFixed(2);
    // console.log("sconto 40", percent40);

    // condizioni per generare il prezzo finale e popolare i risultati 

    var finalPrice = defaultPrice;
    console.log("prezzo intero", finalPrice);

    if (userAge === "minorenne") {
        finalPrice = defaultPrice - percent20;
        console.log("prezzo dopo sconto 20", finalPrice);

        // popolo html 
        document.getElementById("offer").innerHTML = "sconto 20%";
        document.getElementById("total").innerHTML = finalPrice;

    } else if (userAge === "over65") {
        finalPrice = defaultPrice - percent40;

        // popolo html 
        document.getElementById("offer").innerHTML = "sconto 40%";
        document.getElementById("total").innerHTML = finalPrice;

    } else {
        document.getElementById("offer").innerHTML = "";
        document.getElementById("total").innerHTML = finalPrice;
    }

    // genero numeri casuali per carrozza
    var casualNumber = Math.floor(Math.random() * (15-1) + 1);
    document.getElementById("carrozza").innerHTML = casualNumber;

    // genero numeri casuali per codice CP
    var casualNumberCP = Math.floor(Math.random() * (100000-90000) + 90000);
    document.getElementById("cpcode").innerHTML = casualNumberCP;
})

// genero azione al tasto annulla 

var cancelButton = document.getElementById("cancel-button");
// console.log(cancelButton);

cancelButton.addEventListener('click', function() {
    
    ticket.classList.add("displaynone");
    
    document.getElementById("name").value = "";
    document.getElementById("km").value = "";

})