import { addTask } from "./components/addTask.js"
import { readTasks } from "./components/readTasks.js"

const btnAdd = document.querySelector("[data-form-btn-add]")

readTasks()

btnAdd.addEventListener("click", addTask)