import { addTask } from "./components/addTask.js"

const btnAdd = document.querySelector("[data-form-btn-add]")

btnAdd.addEventListener("click", addTask)