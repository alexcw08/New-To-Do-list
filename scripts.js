const taskList = document.getElementsByClassName("task-list");
const submitBtn = document.getElementsByClassName("submit-button");
const taskText = document.getElementById("taskText");
const selectText = document.getElementById("selectText");
const popUpDiv = document.getElementById("popupdiv");

// Function that will add the task to the appropriate section
function addToList() {
  // Create the elements necessary to add a task and give it a name
  let taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  let taskName = document.createElement("h2");
  taskName.classList.add("task-name");
  taskName.innerHTML = taskText.value;
  taskText.value = "";
  taskItem.append(taskName);

  /* Adds a button group container to the task and an edit/delete button included in the container.
   Buttons have event listeners for their corresponding actions. */

  let btnGroup = document.createElement("div");
  btnGroup.classList.add("btn-group-vertical");
  taskItem.append(btnGroup);

  let doneBtn = document.createElement("button");
  doneBtn.classList.add("btn", "btn-primary");
  doneBtn.innerHTML = "Done";
  btnGroup.append(doneBtn);
  doneBtn.addEventListener("click", doneFunc);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-primary");
  deleteBtn.innerHTML = "Delete";
  btnGroup.append(deleteBtn);
  deleteBtn.addEventListener("click", delFunc);

  // Captures user input for time frame and resets it to default value
  let select = selectText.value;
  selectText.value = "Choose...";

  // If statement that checks if task has a string and time frame chosen, if so, task is appended to appropriate task list
  if (select == "Daily" && taskName.innerHTML != "") {
    taskList[0].append(taskItem);
  } else if (select == "Weekly" && taskName.innerHTML != "") {
    taskList[1].append(taskItem);
  } else if (select == "Monthly" && taskName.innerHTML != "") {
    taskList[2].append(taskItem);
  } else {
    popUpDiv.style.display = "block";
    setTimeout(function () {
      popUpDiv.style.display = "none";
    }, 4000);
  }
}
// Event listener that fires above function when submit is clicked
submitBtn[0].addEventListener("click", addToList);
function delFunc() {
  this.parentElement.parentElement.remove();
}
function doneFunc() {
  /*
  this.parentElement.parentElement.classList.remove("task-item");
  this.parentElement.parentElement.classList.add("task-item-done");
  this.innerHTML = "Undo";
  */
  if (this.parentElement.parentElement.classList.contains("task-item")) {
    this.parentElement.parentElement.classList.remove("task-item");
    this.parentElement.parentElement.classList.add("task-item-done");
    this.innerHTML = "Undo";
  } else {
    this.parentElement.parentElement.classList.remove("task-item-done");
    this.parentElement.parentElement.classList.add("task-item");
    this.innerHTML = "Done";
  }
}
