// set global variables
var tasksListArr = [];
// -------------------------fomating current date functions starts here----------------------------------//
// formating today's date per markups
var today = moment().format("dddd, MMMM Do YYYY");
// display current date
var displayDate = function (today) {
  $("#currentDay").text(today);
};
// -------------------------fomating current date functions ends here-----------------------------------//
// --------------------------------timeblock functions starts here--------------------------------------//
// create time column with hours
var createHour = function (blockNum) {
  var hourLi = $("<div>").addClass("input-group-prepend");
  var hourSpan = $("<span>")
    // add Class for bootstrap selector
    .addClass("input-group-text hour")
    // add id to hourSpan to be selector
    .attr("id", "block" + blockNum.toString());

  // append span to hourli
  hourLi.append(hourSpan);
  return hourLi;
};
// create task container
var createTask = function (blockNum) {
  var taskEl = $("<input>")
    .attr("type", "text")
    .attr("id", "blockTask" + blockNum.toString())
    .addClass("form-control task")
    .attr("aria-label", "task or blank space to add task");
  return taskEl;
};
// create save icon button
var createSaveBtn = function () {
  var saveBtnContainer = $("<div>")
    .addClass("input-group-append")
    .attr("id", "button-addon4");
  var saveBtn = $("<button>")
    .addClass("btn btn-outline-secondary saveBtn")
    .attr("type", "button");
  var icon = $("<i>").addClass("fas fa-save");
  // append icon to button
  saveBtn.append(icon);
  //append button to container
  saveBtnContainer.append(saveBtn);
  return saveBtnContainer;
};
// create inputGroup
var createTimeBlock = function (blockNum) {
  var timeBlock = $("<div>").addClass("input-group input-group-lg time-block");
  // append time column to inputGroup
  var dateTime = createHour(blockNum);
  timeBlock.append(dateTime);
  // append task containter to inputGrouptime-block
  var task = createTask(blockNum);
  timeBlock.append(task);
  // append save column with save icon tp inputGroup
  var saveBtn = createSaveBtn();
  timeBlock.append(saveBtn);
  // append time block to container
  $(".container").append(timeBlock);
  return timeBlock;
};
// for loop to duplicate
var dupTimeBlock = function (workHours) {
  workHours = 8;
  var startHour = 9;
  for (var i = 0; i < workHours; i++) {
    // count for the display hours on this block
    var blockHour = startHour + i;
    var blockHourStr = moment(blockHour, "H").format("h:mm a");
    // call createTimeBlock function
    var currentBlock = createTimeBlock(i);
    $("#block" + i.toString()).text(blockHourStr);
    // append to container
  }
};
// --------------------------------timeblock functions ends here----------------------------------------//
// --------------------function to save and load from local storage starts here-------------------------//
//save new task
var saveTask = function (taskEl) {
  localStorage.setItem("dailySchedulerTasks", JSON.stringify(taskEl));
};
// load saved task from local storage
var loadTask = function () {
  var workHours = 8;
  tasksArr = JSON.parse(localStorage.getItem("dailySchedulerTasks"));
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasksArr) {
    tasksArr = tasksListArr;
  }
  // loop array properties
  for (var i = 0; i < workHours; i++) {
    // check see whether the array have value
    if (tasksArr[i] !== null && tasksArr[i] !== undefined) {
      // get current object's task property
      var taskEl = tasksArr[i].task;
      // select current task input
      var taskContainer = $("#blockTask" + i);
      // set the value of current task input to be the current object's task property
      taskContainer.val(taskEl);
    }
  }
};
// ---------------------function to save and load from local storage ends here--------------------------//
// ----------------------run functions to display time blocks starts here-------------------------------//
// call display current date function
displayDate(today);
// call display time block funcitons
dupTimeBlock();
// call display saved task in time block
loadTask();
// ----------------------run functions to display time blocks ends here---------------------------------//
// ----------------------run functions to display time blocks ends here---------------------------------//
// when input of task changed
$(".input-group").on("change", "input[type='text']", function () {
  // get changed task
  var taskContent = $(this).val().trim();
  // get resptive time;
  var taskTime = $(this).prev().children(".hour").text();
  // get resptive time's id
  var timeBlock = $(this)
    .prev()
    .children(".hour")
    .attr("id")
    .replace("block", "");
  console.log(timeBlock);
  //create obj to containt taskContent and task Time
  taskObj = {
    time: taskTime,
    task: taskContent,
  };
  // append or update them to taskObj
  tasksListArr[timeBlock] = taskObj;
  // save task object to local storage
  saveTask(tasksListArr);
});
// when save button clicked
$(".saveBtn").on("click", function () {
  // get current task in this row
  var taskContent = $(this).parent().prev().val().trim();
  // get resptive time in this row
  var taskTime = $(this)
    .parent()
    .siblings(".input-group-prepend")
    .children(".hour")
    .text();
  // get resptive time's id
  var timeBlock = $(this)
    .parent()
    .siblings(".input-group-prepend")
    .children(".hour")
    .attr("id")
    .replace("block", "");
  //create obj to containt taskContent and task Time
  taskObj = {
    time: taskTime,
    task: taskContent,
  };
  // append or update them to taskObj
  tasksListArr[timeBlock] = taskObj;
  // save task object to local storage
  saveTask(tasksListArr);
});
