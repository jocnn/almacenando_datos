import { createTask } from "./addTask.js"

export const readTasks = () => {
	const tasksList = JSON.parse(sessionStorage.getItem("tasks")) || []

	const list = document.querySelector("[data-list]")

	tasksList.forEach((task) => {
		list.appendChild(createTask(task))
	})
}