const formAddTodo = document.querySelector(".list-group");
const todoContainer = document.querySelector(".form-add-todo");

todoContainer.addEventListener("submit", event => {
  event.preventDefault();

  const contentLI = event.target.add.value.trim();
  const input = event.target.add;

  if (contentLI.length) {
    formAddTodo.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${contentLI}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  }

  event.target.reset();
});
