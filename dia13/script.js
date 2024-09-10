document.getElementById('cartas').addEventListener('click', () => {
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(response => response.json())
        .then(data => {
            // const deckId = data.deck_id;
            // return fetch('https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5');
            console.log(data);
        })
        
});