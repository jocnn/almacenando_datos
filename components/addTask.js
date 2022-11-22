import checkComplete from "./checkComplete.js"
import deleteCourse from "./deleteIcon.js"
import { readTasks } from "./readTasks.js"

export const addTask = (e) => {
	e.preventDefault()

	const complete = false
	const list = document.querySelector("[data-list]")
	const inputTask = document.querySelector("[data-form-input-task]")
	const calendar = document.querySelector("[data-form-date]")

	const taskList = JSON.parse(sessionStorage.getItem("tasks")) || []

	const inputDate = calendar.value
	const valueInput = inputTask.value
	const dateFormat = moment(inputDate).format("MMMM Do YYYY")

	if (valueInput === "" || inputDate === "") return

	inputTask.value = ""
	calendar.value = ""

	const taskObj = {
		id: uuid.v4(),
		complete,
		valueInput,
		dateFormat
	}

	list.innerHTML = ""

	taskList.push(taskObj)
	sessionStorage.setItem("tasks", JSON.stringify(taskList))

	readTasks()
}

export const createTask = ({ id, valueInput, dateFormat, complete }) => {
	const check = checkComplete(id)
	const task = document.createElement("li")
	task.classList.add("card")

	// se creó el div
	const taskContent = document.createElement("div")
	// se agrego el icon checklist al div
	taskContent.appendChild(check)

	if (complete) {
		check.classList.toggle("fas")
		check.classList.toggle("completeIcon")
		check.classList.toggle("far")
	}

	// se creó el span
	const titleTask = document.createElement("span")
	// se agrego la clase task al span
	titleTask.classList.add("task")
	// se agregó el contenido del input al span
	titleTask.innerText = valueInput

	// se agregó el span al div
	taskContent.appendChild(titleTask)

	// se creo el span
	const dateElement = document.createElement("span")
	// se agrego la fecha al span
	dateElement.innerHTML = dateFormat

	// se agregó la tarea al elemento li
	task.appendChild(taskContent)

	// se agrego la fecha al elemento li
	task.appendChild(dateElement)

	// se agregó el icono de basura al div
	task.appendChild(deleteCourse(id))

	return task
}
