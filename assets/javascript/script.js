// formating today's date per markups
var today = moment().format("dddd, MMMM Do YYYY");
console.log(today);
// display current date
var displayDate = function (today) {
  $("#currentDay").text(today);
};

// create time column with hours
var createHour = function () {
  var hourLi = $("<div>").addClass("input-group-prepend");
  var hourSpan = $("<span>")
    .addClass("input-group-text")
    .attr("id", "basic-addon1");
  // append span to hourli
  hourLi.append(hourSpan);
  return hourLi;
};
// create task container
var createTaskContainer = function () {
  var taskEl = $("<input>")
    .attr("type", "text")
    .addClass("form-control")
    .attr("aria-label", "task or blank space to add task")
    .attr("placeholder", "new task");
  return taskEl;
};
// create save icon button
var createSaveBtn = function () {
  var saveBtnContainer = $("<div>")
    .addClass("input-group-append")
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
var inputGroup = function () {
  var inputGroup = $("<div>").addClass("input-group");
  // append time column to inputGroup
  var dateTime = createHour();
  inputGroup.append(dateTime);
  // append task containter to inputGroup
  var task = createTaskContainer();
  inputGroup.append(task);
  // append save column with save icon tp inputGroup
  var saveBtn = createSaveBtn();
  inputGroup.append(saveBtn);

  $(".container").append(inputGroup);
};

{
  /* // created time blocks
var createTimeBlocks = function (workingHours) {
  var workingHours = 8;
  // for loop to create all time blocks
  for (var i = 0; i < workingHours; i++) {}
}; */
}

// call display current date function
displayDate(today);
inputGroup();
