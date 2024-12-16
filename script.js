let notesInput = document.querySelector(".notes-input");
let edBtn = document.querySelector(".ed-btn");
let delBtn = document.querySelector(".del-btn");
let saveBtn = document.querySelector(".save-btn");
let savedNotes = document.querySelector(".notes");

let notes = [];
  
function saveNote() {
    let note = notesInput.value;
    if (note !== " ") {
        let newNote = document.createElement("div");
        newNote.classList.add("note");
        newNote.innerHTML = note;
        savedNotes.appendChild(newNote);
        notesInput.value = "";
    }
}

saveBtn.addEventListener("click", saveNote);

function delNote () {
    let note = savedNotes.lastChild;
    if (note !== null) {
        savedNotes.removeChild(note);
        }
}
delBtn.addEventListener("click", delNote);

function editNote() {
    // let note = savedNotes.lastChild;
    // if (note !== null) {
    //     note.innerHTML = notesInput.value;
    //     }
    let note = prompt("Enter index");
    let newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = prompt("Edit your note");
    savedNotes.appendChild(newNote);
    notes.splice(notes, 1, newNote);

}
edBtn.addEventListener("click", editNote);
