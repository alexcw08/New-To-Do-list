const daily = document.getElementById("dailySec");
const weekly = document.getElementById("weeklySec");
const monthly = document.getElementById("monthlySec");
const submitBtn = document.getElementsByClassName("submit-button");
const taskText = document.getElementById("taskText");
const selectText = document.getElementById("selectText");
const timeFrame = document.getElementsByClassName("time-select");
// Test function
function testFunc() {
  console.log("Success!");
}
// Function that will add the task to the appropriate section
function addToList() {
  let task = taskText.value;
  taskText.value = "";
  let newTask = document.createElement("div");
  newTask.innerHTML = task;
  newTask.classList.add("alert");
  newTask.classList.add("alert-danger");

  let select = selectText.value;
  selectText.value = "Choose...";

  if (select == "Daily") {
    daily.append(newTask);
  } else if (select == "Weekly") {
    weekly.append(newTask);
  } else if (select == "Monthly") {
    monthly.append(newTask);
  }
}
// Event listener that fires above function when submit is clicked
submitBtn[0].addEventListener("click", addToList);
