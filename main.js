console.log("Script attached");
/*----------- SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
document.getElementsByClassName("node2")[0].textContent = 'I used the getElementByClassName("node2") method to access this';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
document.getElementsByTagName("h3").forEach(element => {
    element.textContent = 'I used the getElementByTagName("h3") method to access all of these';
});

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paragraph = document.createElement('p');
paragraph.textContent = 'This node was created using the createElement() method';

// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.getElementById('parent');
parent.appendChild(paragraph);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const link = document.createElement('a');
link.textContent = 'I am a <a> tag';

// BONUS: Add a link href to the <a>
link.href = 'https://www.example.com';

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(link, paragraph);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const oldNode = document.getElementById('N1');
const newNode = document.createElement('p');
newNode.textContent = 'New Child Node';
oldNode.replaceWith(newNode);

// TODO: Remove the "New Child Node"
newNode.remove();

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
const ul = document.createElement('ul');

// TODO: Iterate over the array values, and create a list item element for each
list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li); //<---- appending the list items to the unordered list
});

// TODO: Append the new list items to the unordered list element
// Appended the unordered list items to the unordered list element in the previous step. 

// TODO: Append the unordered list to the `div#container` under exercise 4 
const container = document.getElementById('container');
container.appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
function show() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.textContent = 'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user';
    
    // BONUS: Add close button
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => modal.remove();
    modalContent.appendChild(closeButton);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

// Add click event to the button
document.getElementById('btn').onclick = show;
