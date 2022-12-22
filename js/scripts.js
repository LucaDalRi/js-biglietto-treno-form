const nomeCognome = document.getElementById('nomeCognome');
const age = document.getElementById('age');
const buttonSubmit = document.getElementById('buttonSubmit');
const prezzoPerKm = 0.21;

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

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

            document.getElementById('carrozza').innerHTML = parseInt(getRandomNum(1, 9));

            document.getElementById('codice').innerHTML = parseInt(getRandomNum(1000, 9000));

        }
        
        else if (age.value == 'Over') {

            const scontoQuaranta = ((prezzoViaggio * 40) / 100);

            prezzoViaggio = (prezzoViaggio - scontoQuaranta);

            prezzoViaggio = prezzoViaggio.toFixed(2);
            
            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Senior';

            document.getElementById('carrozza').innerHTML = parseInt(getRandomNum(1, 9));

            document.getElementById('codice').innerHTML = parseInt(getRandomNum(1000, 9000));

        }

        else {

            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Standard';

            document.getElementById('carrozza').innerHTML = parseInt(getRandomNum(1, 9));

            document.getElementById('codice').innerHTML = parseInt(getRandomNum(1000, 9000));

        }

    }

);


