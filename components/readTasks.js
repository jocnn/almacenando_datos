import { createTask } from "./addTask.js"
import dateElement from "./dateElement.js"
import { uniqueDates } from "../services/date.js"

export const readTasks = () => {
	const tasksList = JSON.parse(sessionStorage.getItem("tasks")) || []

	const list = document.querySelector("[data-list]")
	const dates = uniqueDates(tasksList)

	dates.forEach(date => {
		const dateMoment = moment(date, "MMMM Do YYYY")
		list.appendChild(dateElement(date))
		tasksList.forEach((task) => {
			const taskDate = moment(task.dateFormat, "MMMM Do YYYY")
			const diff = dateMoment.diff(taskDate)

			if (diff === 0) list.appendChild(createTask(task))
		})
	})
	
}