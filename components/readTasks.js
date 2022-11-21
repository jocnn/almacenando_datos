import { createTask } from "./addTask.js"
import dateElement from "./dateElement.js"

export const readTasks = () => {
	const tasksList = JSON.parse(sessionStorage.getItem("tasks")) || []

	const list = document.querySelector("[data-list]")

	tasksList.forEach((task) => {
		list.appendChild(dateElement(task.dateFormat))
		list.appendChild(createTask(task))
	})
}