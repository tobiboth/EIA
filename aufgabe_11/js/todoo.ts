/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */
interface Listpoint {
    Text: string;
    Checked: boolean;
}
let todopoint: Listpoint[] = [{
    Text: "test1",
    Checked: true
},
{
    Text: "test2",
    Checked: false
}]

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

window.addEventListener("load", function (): void {

    inputDOMElement = document.querySelector("#inputfield");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");


    addButtonDOMElement.addEventListener("click", addTodo);


    drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todopoint.length; index++) {


        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        todo.innerHTML = "<span class='check " + todopoint[index].Checked + "'><i class='fas fa-check'></i></span>"
            + todopoint[index].Text +
            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function (): void {
            / übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function (): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }
    updateCounter();
}
const offen: number = 0;
const notoff: number = 0;

function updateCounter(): void {
    counterDOMElement.innerHTML = "in total: " + todopoint.length + "<br>" + "to do: " + offen + "<br>" + "finished: " + notoff + "<br>";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {

        let newtask = {
            Text: inputDOMElement.value,
            Checked: false
        }
        todopoint.unshift(newtask);

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    todopoint[index].Checked = !todopoint[index].Checked;
    drawListToDOM();
}


function deleteTodo(index: number): void {

    todopoint.splice(index, 1);

    drawListToDOM();
}