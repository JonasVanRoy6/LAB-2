document.getElementById('upload-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('upload-link').addEventListener('click', function(e) {
    e.preventDefault();
    // Simulate file selection for demonstration purposes
    simulateFileUpload();
});

function simulateFileUpload() {
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ''; // Clear any previous files

    // Example files (you should replace this with actual file input handling)
    const files = [
        { name: 'kentekenbewijs.pdf', size: '2.5MB', status: 'uploading' },
        { name: 'kentekenbewijs.pdf', size: '2.5MB', status: 'success' },
        { name: 'kentekenbewijs.pdf', size: '2.5MB', status: 'failed' }
    ];

    files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';

        const fileName = document.createElement('p');
        fileName.className = 'file-name';
        fileName.textContent = file.name;

        const fileSize = document.createElement('p');
        fileSize.className = 'file-size';
        fileSize.textContent = file.size;

        const fileActions = document.createElement('div');
        fileActions.className = 'file-actions';

        if (file.status === 'uploading') {
            const progress = document.createElement('progress');
            progress.value = 50;
            progress.max = 100;
            fileActions.appendChild(progress);
        } else if (file.status === 'success') {
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '✖';
            deleteBtn.addEventListener('click', () => {
                fileItem.remove();
            });
            fileActions.appendChild(deleteBtn);
        } else if (file.status === 'failed') {
            const retryBtn = document.createElement('button');
            retryBtn.textContent = '↻';
            retryBtn.addEventListener('click', () => {
                simulateFileUpload(); // Retry logic (should be replaced with actual retry handling)
            });
            fileActions.appendChild(retryBtn);

            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'Upload Mislukt';
            errorMsg.style.color = 'red';
            fileActions.appendChild(errorMsg);
        }

        fileItem.appendChild(fileName);
        fileItem.appendChild(fileSize);
        fileItem.appendChild(fileActions);

        fileList.appendChild(fileItem);
    });

    document.getElementById('add-button').disabled = false;
}
