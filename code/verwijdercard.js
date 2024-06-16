document.getElementById('showOverlay').addEventListener('click', function() {
    document.getElementById('overlay2').classList.remove('hidden');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    document.getElementById('overlay2').classList.add('hidden');
});

document.getElementById('deleteButton').addEventListener('click', function() {
    alert('Creditcard verwijderd');
    document.getElementById('overlay2').classList.add('hidden');
});
