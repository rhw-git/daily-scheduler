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
  var hourLi = $("<div>").addClass("input-group-prepend .col-2");
  var hourSpan = $("<span>")
    // add Class for bootstrap selector
    .addClass("input-group-text")
    // add another class to hourSpan to be selector
    .addClass("block-" + blockNum.toString())
    .attr("id", "basic-addon1");

  // append span to hourli
  hourLi.append(hourSpan);
  return hourLi;
};
// create task container
var createTaskContainer = function () {
  var taskEl = $("<input>")
    .attr("type", "text")
    .addClass("form-control .col-9")
    .attr("aria-label", "task or blank space to add task")
    .attr("placeholder", "new task");
  return taskEl;
};
// create save icon button
var createSaveBtn = function () {
  var saveBtnContainer = $("<div>")
    .addClass("input-group-append .col-1")
    .attr("id", "button-addon4");
  var saveBtn = $("<button>")
    .addClass("btn btn-outline-secondary")
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
  var timeBlock = $("<div>").addClass("input-group input-group-lg");
  // append time column to inputGroup
  var dateTime = createHour(blockNum);
  timeBlock.append(dateTime);
  // append task containter to inputGroup
  var task = createTaskContainer();
  timeBlock.append(task);
  // append save column with save icon tp inputGroup
  var saveBtn = createSaveBtn();
  timeBlock.append(saveBtn);
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
    $(".block-" + i.toString()).text(blockHourStr);
    // append to container
  }
};
// --------------------------------timeblock functions ends here----------------------------------------//
// ----------------------------------------function to run----------------------------------------------//
// call display current date function
displayDate(today);
// call display time block funcitons
dupTimeBlock();
