function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  var removeList = document.getElementById('delete')

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new list item
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // create ability to delete item
    let minusBtn = document.createElement('button')
    minusBtn.innerHTML = '<span>Delete</span';

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    newLi.appendChild(minusBtn);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    minusBtn.addEventListener('click', function() {
      newLi.parentNode.removeChild(newLi);
    });

  });
}

window.onload = function() {
  onReady();
};
