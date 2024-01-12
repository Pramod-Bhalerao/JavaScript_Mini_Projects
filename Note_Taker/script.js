document.addEventListener('DOMContentLoaded', function () {
    const notesContainer = document.getElementById('notes');
    const noteInput = document.getElementById('note-input');
    const addButton = document.getElementById('add-button');

    addButton.addEventListener('click', function () {
        const noteText = noteInput.value.trim();

        if (noteText !== '') {
            const noteElement = document.createElement('div');
            noteElement.classList.add('note');
            noteElement.innerHTML = `
                <p>${noteText}</p>
                <button class="delete-button">Delete</button>
            `;
            notesContainer.appendChild(noteElement);

            // Clear the input field
            noteInput.value = '';

            // Add a delete event listener to the note
            noteElement.querySelector('.delete-button').addEventListener('click', function () {
                notesContainer.removeChild(noteElement);
            });
        }
    });
});
