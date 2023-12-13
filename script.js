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
    }
}