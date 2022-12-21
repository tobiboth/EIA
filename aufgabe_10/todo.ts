let addtodoBtn = document.getElementById('addToDo');
let todoContainer = document.getElementById('todoContainer');
let inputfield = document.getElementById('inputfield');

addtodoBtn.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todoContainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function () {
        todoContainer.removeChild(paragraph);
    })
})
