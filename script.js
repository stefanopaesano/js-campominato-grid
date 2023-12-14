function generateGrid() {
    // Seleziona l'elemento div che conterrà la griglia
    const gameGrid = document.getElementById('game-grid');

    // Pulisce la griglia se è già stata generata in precedenza
    gameGrid.innerHTML = '';

    // Crea la griglia con numeri progressivi da 1 a 100
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;
        gameGrid.appendChild(cell);

        // Aggiungi un gestore di eventi 'click' a ciascuna cella
        cell.addEventListener('click', function() {
            // Cambia il colore della cella cliccata in azzurro
            cell.style.backgroundColor = 'blue';

            // Emetti un messaggio in console con il numero della cella cliccata
            console.log('Hai cliccato sulla cella numero:', i);
        });

        gameGrid.append(cell);
    
    }
   
}



// const userInput = prompt("inserisci il tuo numero");

// // Chiamare la funzione letterToNumber passando l'input utente come argomento
// numberToletter(userInput);

// function numberToletter(number) {
//     // Assicurati che la lettera sia minuscola
   
//         // Verifica se la lettera è 'a'
//     if (number == '1') {
//         console.log("a");
//     }else if (number == '2'){
//         // Se la lettera non è 'a', restituisci undefined o un valore di default
//         console.log("b");
//     }
//     else{
//         const outputElement = document.getElementById("output");
//         // Modifica il contenuto dell'elemento
//         outputElement.innerHTML.classlist()= "sei veramente un pipo";

        
//     }
    
    
    

    
// }



// // Esempio di utilizzo
// const letter = 'a';
// const number = letterToNumber(letter);

// console.log(`La lettera ${letter} è associata al numero ${number}`);