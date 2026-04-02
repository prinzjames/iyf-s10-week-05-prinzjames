const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value;

    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    // delete button
    const btn = document.createElement("button");
    btn.textContent = "X";

    btn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
});