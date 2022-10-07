let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector("#ul");
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
  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.className = "list__item";
  li.textContent = value;

  btn.className = "todo__delete";
  btn.textContent = "X";
  li.appendChild(btn);
  // удаление
  btn.addEventListener("click", (e) => {
    li.remove();
  });
  // создание
  list.appendChild(li);

  li.addEventListener("click", (e) => {
    li.classList.toggle("checked");
  });
}
