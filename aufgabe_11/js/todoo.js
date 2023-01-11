let todopoint = [{
        Text: "test1",
        Checked: true
    },
    {
        Text: "test2",
        Checked: false
    }];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputfield");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    for (let index = 0; index < todopoint.length; index++) {
        let todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + todopoint[index].Checked + "'><i class='fas fa-check'></i></span>"
            + todopoint[index].Text +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            / übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.;
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
const offen = 0;
const notoff = 0;
function updateCounter() {
    counterDOMElement.innerHTML = "in total: " + todopoint.length + "<br>" + "to do: " + offen + "<br>" + "finished: " + notoff + "<br>";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        let newtask = {
            Text: inputDOMElement.value,
            Checked: false
        };
        todopoint.unshift(newtask);
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    todopoint[index].Checked = !todopoint[index].Checked;
    drawListToDOM();
}
function deleteTodo(index) {
    todopoint.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=todoo.js.map