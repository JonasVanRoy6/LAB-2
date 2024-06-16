document.getElementById('edit-button').addEventListener('click', function() {
    document.getElementById('overlays').style.display = 'flex';
});

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('overlays').style.display = 'none';
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add your form submission logic here
    alert('Betaalmethode opgeslagen!');
    document.getElementById('overlays').style.display = 'none';
});


document.getElementById('showOverlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('deleteButton').addEventListener('click', function() {
    alert('Creditcard verwijderd');
    document.getElementById('overlay').style.display = 'none';
});

