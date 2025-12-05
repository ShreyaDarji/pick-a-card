function addItem(type) {

// Get the input element based on the type (e.g., cartoonInput, serialInput, movieInput)

const input = document.getElementById(`${type}Input`);

// Get the corresponding list element (e.g., cartoonList, serialList, movieList)

const list = document.getElementById(`${type}List`);

// Get the trimmed value from the input field (removes leading/trailing spaces)

const value = input.value.trim();
// If the input is empty, exit the function (do nothing)

if (value === '') return;

// Create a new list item (li) element

const li = document.createElement('li');

// Set the text content of the list item to the entered value

li.textContent = value;

// Create a "remove" button (❌) for deleting the list item

const removeBtn = document.createElement('button');

// Set the button text to a cross emoji

removeBtn.textContent = "❌";

// Add some spacing between the text and the button

removeBtn.style.marginLeft = "10px";

// Add a click event handler to remove the list item when the button is clicked

removeBtn.onclick = () => list.removeChild(li);

// Add the remove button to the list item

li.appendChild(removeBtn);

// Add the list item to the appropriate list

list.appendChild(li);

// Clear the input field after adding the item

input.value = '';

}



