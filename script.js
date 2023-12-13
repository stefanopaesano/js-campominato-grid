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