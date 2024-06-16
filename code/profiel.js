// script.js

document.getElementById('openOverlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('saveButton').addEventListener('click', function() {
    // Implement the save functionality here
    document.getElementById('overlay').style.display = 'none';
});


document.getElementById('openInfoOverlay').addEventListener('click', function() {
    document.getElementById('infoOverlay').style.display = 'flex';
});

document.getElementById('cancelInfoButton').addEventListener('click', function() {
    document.getElementById('infoOverlay').style.display = 'none';
});

document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement the save functionality here
    document.getElementById('infoOverlay').style.display = 'none';
});

document.getElementById('openAddressOverlay').addEventListener('click', function() {
    document.getElementById('addressOverlay').style.display = 'flex';
});

document.getElementById('cancelAddressButton').addEventListener('click', function() {
    document.getElementById('addressOverlay').style.display = 'none';
});

document.getElementById('addressForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement the save functionality here
    document.getElementById('addressOverlay').style.display = 'none';
});