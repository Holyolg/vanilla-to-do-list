const todo = {
  action(e) {},
	add() {
		const elemText = document.querySelector('.todo__text')
		if (elemText.disabled ||)
	},
  create() {
    return `<li class="todo__item" data-todo-state="active">
    <span class="todo__task">${text}</span>
    <span class="todo__action todo__action_restore" data-todo-action="active"></span>
    <span class="todo__action todo__action_complete" data-todo-action="completed"></span>
    <span class="todo__action todo__action_delete" data-todo-action="deleted"></span></li>`;
  },
  init() {
    const fromStorage = localStorage.getItem("todo");
    if (fromStorage) {
      document.querySelector(".todo__items").innerHTML = fromStorage;
    }
    document
      .querySelector(".todo__options")
      .addEventListener("change", this.update);
    document.addEventListener("click", this.action.bind(this));
  },
  update() {
    const option = document.querySelector(".todo__options").value;
    document.querySelector(".todo__items").dataset.todoOption = option;
    document.querySelector(".todo__text").disabled = option !== "active";
  },
  save() {
    localStorage.setItem(
      "todo",
      document.querySelector(".todo__items").innerHTML
    );
  },
};
