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

generateButton.addEventListener('click', function() {
    // codice da svolgere al click 
    
    // nome utente 
    var userGenerator = document.getElementById("name");
    var userName = userGenerator.value;
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


})