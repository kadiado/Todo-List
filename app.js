const formAddTodo = document.querySelector(".form-add-todo");
const todosContainer = document.querySelector(".todos-container");
const inputSearchTodo = document.querySelector(".form-search input");

formAddTodo.addEventListener("submit", event => {
  event.preventDefault();

  const contentLI = event.target.add.value.trim();

  if (contentLI.length) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${contentLI}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  }

  event.target.reset();
});

todosContainer.addEventListener("click", event => {
  const clickedElement = event.target;
  const classListOfTrash = Array.from(clickedElement.classList).includes("delete");

  if (classListOfTrash) {
    console.log(clickedElement.parentElement.remove());
  }
});

inputSearchTodo.addEventListener("input", event => {
  const inputValue = event.target.value.trim().toLowerCase();

  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove("d-flex");
      todo.classList.add("hidden");
    });

  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove("hidden");
      todo.classList.add("d-flex");
    });
});
