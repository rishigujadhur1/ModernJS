const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

  let span = document.createElement("span");
  span.className = "btn p-2 btn-danger ms-5";
  span.innerHTML = "-";
  li.appendChild(span);

  inputBox.value = "";
}

listContainer.addEventListener(
  "click",
  function (e) {
    debugger;
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
