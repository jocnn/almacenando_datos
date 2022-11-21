import checkComplete from "./checkComplete.js"
import deleteCourse from "./deleteIcon.js"

export const addTask = (e) => {
	e.preventDefault()

	const list = document.querySelector("[data-list]")
	const inputTask = document.querySelector("[data-form-input-task]")
	const calendar = document.querySelector("[data-form-date]")

	const taskList = JSON.parse(sessionStorage.getItem("tasks")) || []

	const inputDate = calendar.value
	const valueInput = inputTask.value
	const dateformat = moment(inputDate).format("MMMM Do YYYY, HH:mm:ss")

	if (valueInput === "" || inputDate === "") return

	inputTask.value = ""
	calendar.value = ""

	const taskObj = {
		valueInput,
		dateformat,
	}

	taskList.push({ valueInput, dateformat })
	sessionStorage.setItem("tasks", JSON.stringify(taskList))

	const task = createTask(taskObj)

	// se agregó el elemento li a la lista (ul) data-list
	list.appendChild(task)
}

export const createTask = ({ valueInput, dateformat }) => {
	const task = document.createElement("li")
	task.classList.add("card")

	// se creó el div
	const taskContent = document.createElement("div")
	// se agrego el icon checklist al div
	taskContent.appendChild(checkComplete())

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
	dateElement.innerHTML = dateformat

	// se agregó la tarea al elemento li
	task.appendChild(taskContent)

	// se agrego la fecha al elemento li
	task.appendChild(dateElement)

	// se agregó el icono de basura al div
	task.appendChild(deleteCourse())

	return task
}
