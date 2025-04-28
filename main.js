console.log("Script attached");
/*----------- SELECTING/MANIPULATING ELEMENTS -----------*/

// Demonstrates different DOM selection methods by updating text content of various elements
document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';

document.getElementsByClassName("node2")[0].textContent = 'I used the getElementByClassName("node2") method to access this';

document.getElementsByTagName("h3").forEach(element => {
    element.textContent = 'I used the getElementByTagName("h3") method to access all of these';
});

/*----------- CREATING/APPENDING/INSERTING ELEMENTS -----------*/

// Creates a paragraph and link element, appends them to a parent container, and positions them in a specific order
const paragraph = document.createElement('p');
paragraph.textContent = 'This node was created using the createElement() method';

const parent = document.getElementById('parent');
parent.appendChild(paragraph);

const link = document.createElement('a');
link.textContent = 'I am a <a> tag';
link.href = 'https://www.example.com';

parent.insertBefore(link, paragraph);

/*----------- REMOVING/REPLACING ELEMENTS -----------*/

// Replaces an existing paragraph with a new one and then removes it from the DOM
const oldNode = document.getElementById('N1');
const newNode = document.createElement('p');
newNode.textContent = 'New Child Node';
oldNode.replaceWith(newNode);

newNode.remove();

/*----------- LIST ITEMS ----------- */
// Creates an unordered list from an array of grocery items and appends it to the container

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

const ul = document.createElement('ul');

list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});

const container = document.getElementById('container');
container.appendChild(ul);

/*----------- DOM EVENTS --------------*/

// Creates and displays a modal with a message when the button is clicked, including a close button to dismiss it
function show() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.textContent = 'Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user';
    
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.onclick = () => modal.remove();
    modalContent.appendChild(closeButton);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}

document.getElementById('btn').onclick = show;
