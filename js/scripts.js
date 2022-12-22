const nomeCognome = document.getElementById('nomeCognome');
const age = document.getElementById('age');
const buttonSubmit = document.getElementById('buttonSubmit');
const prezzoPerKm = 0.21;

console.log(kmDaPercorrere.value);

buttonSubmit.addEventListener('click',

    function() {

        const kmDaPercorrere = document.getElementById('kmDaPercorrere').value;
                                                                                    // da quando premo il tasto vado a prendere il VALORE DELL INPUT
        let prezzoViaggio = (prezzoPerKm * kmDaPercorrere);                         // .value prende il valore interno di quello che vado a puntare con document.getElementById per esempio 

        if (age.value == 'Minorenne') {

            const scontoVenti = ((prezzoViaggio * 20) / 100);

            prezzoViaggio = (prezzoViaggio - scontoVenti);

            prezzoViaggio = prezzoViaggio.toFixed(2);
            
            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Young';

            document.getElementById('carrozza').innerHTML = (Math.random(1,10).toFixed(1) * 10); // Accrocchio incredibile

            document.getElementById('codice').innerHTML = (Math.random(1000, 9999) * 10000).toFixed(0) // Non so neanche perchè funzioni

        }
        
        else if (age.value == 'Over') {

            const scontoQuaranta = ((prezzoViaggio * 40) / 100);

            prezzoViaggio = (prezzoViaggio - scontoQuaranta);

            prezzoViaggio = prezzoViaggio.toFixed(2);
            
            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Senior';

            document.getElementById('carrozza').innerHTML = (Math.random(1,10).toFixed(1) * 10);

            document.getElementById('codice').innerHTML = (Math.random(1000, 9999) * 10000).toFixed(0)

        }

        else {

            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Standard';

            document.getElementById('carrozza').innerHTML = (Math.random(1,10).toFixed(1) * 10);

            document.getElementById('codice').innerHTML = (Math.random(1000, 9999) * 10000).toFixed(0)

        }

    }

);


