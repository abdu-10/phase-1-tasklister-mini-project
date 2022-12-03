document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let form = document.getElementById("create-task-form");
let list = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newTask = document.getElementById("new-task-description");
  createListItem(newTask.value);
  form.reset();
})

function createListItem(listItem) {
  let newListItem = document.createElement("li");
  newListItem.textContent = `${listItem} `;

  let newButton = document.createElement("button");
  newButton.addEventListener("click", handleDelete)
  newButton.textContent = "X";
  newListItem.appendChild(newButton);

  list.append(newListItem);
}

function handleDelete(e) {
  e.target.parentNode.remove();
};