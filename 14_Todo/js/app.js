const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery_form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit_btn");
const container = document.querySelector(".grocery_container");
const list = document.querySelector(".grocery_list");
const clearBtn = document.querySelector(".clear_btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// *** event listeners ***

// submit form
form.addEventListener("submit", addItem);
// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);

// *** functions ***

// add item

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value !== "" && !editFlag) {
    // console.log("add items to the list");

    const element = document.createElement("article");
    // add id
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    // add class
    element.classList.add("grocery_item");
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn_container">
      <!-- edit btn -->
      <button type="button" class="edit_btn">
        <i class="fas fa-edit"></i>
      </button>
      <!-- delete btn -->
      <button type="button" class="delete_btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  `;

    // add event listeners to both buttons;
    const deleteBtn = element.querySelector(".delete_btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit_btn");
    editBtn.addEventListener("click", editItem);

    // append child
    list.appendChild(element);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show_container");
    // set local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag) {
    // console.log("editing");
    editElement.innerHTML = value;
    displayAlert("value changed", "success");

    // edit  local storage
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert_${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.add(`alert_${action}`);
  }, 1000);
}

// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery_item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show_container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
}

// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if (list.children.length === 0) {
    container.classList.remove("show_container");
  }
  displayAlert("item removed", "danger");

  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}

// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  //
  submitBtn.textContent = "edit";
}

// set back to defaults
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// *** LOCAL STORAGE ***
// add to local storage
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
// *** SETUP ITEMS ***
function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
}

function createListItem(id, value) {
  const element = document.createElement("article");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn_container">
              <!-- edit btn -->
              <button type="button" class="edit_btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete_btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
  // add event listeners to both buttons;
  const deleteBtn = element.querySelector(".delete_btn");
  deleteBtn.addEventListener("click", deleteItem);
  const editBtn = element.querySelector(".edit_btn");
  editBtn.addEventListener("click", editItem);

  // append child
  list.appendChild(element);
}
