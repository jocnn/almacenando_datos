;(() => {
	const btnAdd = document.querySelector("[data-form-btn-add]")

	const taskList = []

	const addTask = (e) => {
		const list = document.querySelector("[data-list]")
		const task = createTask(e)
		// se agregó el elemento li a la lista (ul) data-list
		list.appendChild(task)
	}

	const createTask = (e) => {
		e.preventDefault()
		const inputTask = document.querySelector("[data-form-input-task]")
		const calendar = document.querySelector("[data-form-date]")
		const date = calendar.value
		const dateformat = moment(date).format("MMMM Do YYYY, HH:mm:ss")
		console.log(dateformat)
		const valueInput = inputTask.value
		inputTask.value = ""
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

		taskObj = {
			valueInput,
			dateformat
		}
		taskList.push(taskObj)
		sessionStorage.setItem("tasks", JSON.stringify(taskList))

		return task
	}

	btnAdd.addEventListener("click", addTask)

	const checkComplete = () => {
		const i = document.createElement("i")
		i.classList.add("far", "fa-check-square", "icon")
		// se agregó el evento click a la etiqueta i
		i.addEventListener("click", completeTask)

		return i
	}

	const completeTask = (e) => {
		const element = e.target
		// se agregó iconos usando toggle para marcar y desmarcar la tarea
		element.classList.toggle("fas")
		element.classList.toggle("completeIcon")
		element.classList.toggle("far")
	}

	const deleteCourse = () => {
		const i = document.createElement("i")
		i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
		i.addEventListener("click", deleteTask)

		return i
	}

	const deleteTask = (e) => {
		const parent = e.target.parentElement
		parent.remove()
	}
})()
