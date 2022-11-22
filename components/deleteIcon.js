import { readTasks } from "./readTasks.js"

const deleteCourse = (id) => {
	const i = document.createElement("i")
	i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon")
	i.addEventListener("click", () => deleteTask(id))

	return i
}

const deleteTask = (id) => {
	const li = document.querySelector("[data-list]")
	li.innerHTML = ""
	const tasks = JSON.parse(sessionStorage.getItem("tasks"))
	const index = tasks.findIndex(item => item.id === id)
	tasks.splice(index, 1)

	sessionStorage.setItem("tasks", JSON.stringify(tasks))

	readTasks()
}

export default deleteCourse