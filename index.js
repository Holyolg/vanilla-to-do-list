let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector("#ul");
let save = document.querySelector("#save");
let li = document.createElement("li");
let btn = document.createElement("button");
let tasks = [];

if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

tasks.forEach(function (task) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  list.appendChild(li);
  li.className = "list__item";
  li.id = task.id;
  li.textContent = task.text;
  li.dataset.active = "done";
  btn.dataset.active = "delete";
  btn.className = "todo__delete";
  btn.textContent = "x";
  li.appendChild(btn);
  if (task.done === true) {
    li.className = "list__item checked";
  }
});

// слушатель на инпут через enter
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    addNewItem();
  }
});
// слушатель на кнопку add через клик
add.addEventListener("click", addNewItem);

function addNewItem() {
  if (input.value === "") {
    return;
  }
  // вызываем функцию с параметром input.value
  createDeleteElements(input.value);
  input.value = "";
}
//функция создания и удаления элементов списка
function createDeleteElements(value) {
  let li = document.createElement("li");
  let btn = document.createElement("button");
  let tasksText = value;
  li.className = "list__item";

  const newTask = {
    id: Date.now(),
    text: tasksText,
    done: false,
  };

  tasks.push(newTask);
  //сохранение в LocalStorage
  saveToLocal();
  // класс для выполненных и невыполненных задач
  if (newTask.done === true) {
    li.className = "list__item checked";
  }
  li.textContent = newTask.text;
  li.id = newTask.id;
  li.dataset.active = "done";
  list.appendChild(li);
  btn.className = "todo__delete";
  btn.dataset.active = "delete";
  btn.textContent = "x";
  li.appendChild(btn);
  // создание
}
// удаление задачи
list.addEventListener("click", (e) => {
  if (e.target.dataset.active === "delete") {
    const parentNode = e.target.closest("li");
    const id = parentNode.id;
    console.log(id);
    // сравниваем айди в массиве, если есть - вырезаем с помощью splice
    const index = tasks.findIndex((tasks) => tasks.id == id);
    tasks.splice(index, 1);
    //сохранение в LocalStorage
    parentNode.remove();
    saveToLocal();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.dataset.active === "done") {
    const parentNode = e.target.closest("li");
    parentNode.classList.toggle("checked");
    const id = parentNode.id;
    const task = tasks.find((tasks) => tasks.id == id);
    task.done = !task.done;
    //сохранение в LocalStorage
    saveToLocal();
  }
});

function saveToLocal() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
