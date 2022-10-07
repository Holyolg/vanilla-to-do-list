let input = document.querySelector("#input");
let add = document.querySelector("#add");
let list = document.querySelector("#ul");

add.addEventListener("click", (e) => {
  if (input.value === "") {
    return;
  }
  // вызываем функцию с параметром input.value
  createDeleteElements(input.value);
  input.value = "";
});
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
}
/*add.addEventListener("click", function () {
  const li = document.createElement("li");
  li.className = "list__item";

	btn.className = "close";
  let txt = document.createTextNode("\u00D7");
  const value = input.value;
  let text = document.createTextNode(value);

  li.appendChild(text);
  li.appendChild(btn);
  btn.appendChild(txt);

  if (value === "") {
    alert("!");
  } else {
    document.getElementById("ul").appendChild(li);
  }
  document.getElementById("input").value = "";

  let liItem = document.querySelector(".list__item");
  btn.addEventListener("click", function () {
    this.();
    console.log("s");
  });
}); 
*/
