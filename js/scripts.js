
// const etaPasseggiero = prompt('Inserisci la tua età');
// const kmDaPercorrere = prompt('Quanti kilomentri devi percorrere?');
// const prezzoPerKm = 0.21;
// let prezzoViaggio = (prezzoPerKm * kmDaPercorrere);

// let scontoQuaranta = ((prezzoViaggio * 40) / 100)
// let scontoVenti = ((prezzoViaggio * 20) / 100)

// if (etaPasseggiero > 65) {
//     prezzoViaggio = (prezzoViaggio - scontoQuaranta);
//     prezzoViaggio = prezzoViaggio.toFixed(2);
//     document.getElementById('prova').innerHTML = 'Il totale è di => ' + prezzoViaggio + ' €';
// }

// else if (etaPasseggiero < 18) {
//     prezzoViaggio = (prezzoViaggio - scontoVenti);
//     prezzoViaggio = prezzoViaggio.toFixed(2);
//     document.getElementById('prova').innerHTML = 'Il totale è di => ' + prezzoViaggio + ' €';
// }

// else {
//     prezzoViaggio = prezzoViaggio.toFixed(2);
//     document.getElementById('prova').innerHTML = 'Il totale è di => ' + prezzoViaggio + ' €';
// }


const nomeCognome = document.getElementById('nomeCognome');
const kmDaPercorrere = document.getElementById('kmDaPercorrere');
const age = document.getElementById('age');
const buttonSubmit = document.getElementById('buttonSubmit');
const prezzoPerKm = 0.21;
let prezzoViaggio = (prezzoPerKm * kmDaPercorrere);
const scontoQuaranta = ((prezzoViaggio * 40) / 100);
const scontoVenti = ((prezzoViaggio * 20) / 100);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  


buttonSubmit.addEventListener('click',

    function() {

        if (age.value == '17') {

            prezzoViaggio = (prezzoViaggio - scontoVenti);

            prezzoViaggio = prezzoViaggio.toFixed(2);
            
            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Young';

        }
        
        else if (age.value == '65') {

            prezzoViaggio = (prezzoViaggio - scontoQuaranta);

            prezzoViaggio = prezzoViaggio.toFixed(2);
            
            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Senior';

        }

        else {

            document.getElementById('prezzo').innerHTML = prezzoViaggio + ' €';

            document.getElementById('nome').innerHTML = nomeCognome.value;

            document.getElementById('biglietto').innerHTML = 'Biglietto Standard';

        }

    }

);


buttonSubmit.addEventListener('click',

    function() {

        document.getElementsById('hide-card').style.display = 'block';
    
    }

);

