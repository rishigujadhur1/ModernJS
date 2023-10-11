const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value.length > 0) {
    saveData();
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      let noteId = e.target.parentElement.getAttribute("NoteId");
      deleteData(noteId);
    }
  },
  false
);

function addHTMLElements(id, value) {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = value;
  listContainer.appendChild(li);
  li.setAttribute("NoteId", id);
  let span = document.createElement("span");
  span.className = "btn p-2 btn-danger ms-5";
  span.innerHTML = "-";
  li.appendChild(span);
}

async function saveData() {
  const response = await fetch("http://localhost:5002/api/Notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputBox.value),
  });
  let objNoteSaved = await response.json();
  addHTMLElements(objNoteSaved.id, inputBox.value);
  inputBox.value = "";
}

async function deleteData(noteId) {
  const response = await fetch("http://localhost:5002/api/Notes", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(noteId),
  });
}

async function showNotes() {
  const response = await fetch("http://localhost:5002/api/Notes");
  const notes = await response.json();
  console.log(notes);
  notes.map((value) => addHTMLElements(value.id, value.description));
}

inputBox.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    addTask();
  }
});

showNotes();
