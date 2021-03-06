const titleEditEl = document.getElementById("title-edit-place")
const descriptionEditEl = document.getElementById("description-edit-place");
const deleteButton = document.getElementById("delete-btn");
const doneButton = document.getElementById("done-btn");
const editButton = document.getElementById("edit-btn")
const editTaskID = location.hash.substring(1) //get page id
const todoListTP = getSaveList() 
const doneTodoListTP = getSaveDoneList()
const lists = todoListTP.concat(doneTodoListTP)
const taskFinded = lists.find((item) => {
    return item.id == editTaskID //find task to edit
})

const editTaskExist = taskFinded.existIn //find active list or done list

titleEditEl.value = taskFinded.text
descriptionEditEl.value = taskFinded.description

if (editTaskExist === "done") {
    doneButton.disabled = true
    doneButton.style.background = "gray"
    doneButton.style.boxShadow = "none"
}

editButton.addEventListener("click", () => { //back to home button
    location.assign("./app.html")
})


renderEditTask(editTaskExist) //run edit inputs
renderDoneTask(taskFinded);
renderDeleteButton(editTaskExist) //active advance delete button