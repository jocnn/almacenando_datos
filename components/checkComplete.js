const checkComplete = (id) => {
	const i = document.createElement("i")
	i.classList.add("far", "fa-check-square", "icon")
	// se agregó el evento click a la etiqueta i
	i.addEventListener("click", (e) => completeTask(e, id))

	return i
}

const completeTask = (e, id) => {
	const element = e.target
	// se agregó iconos usando toggle para marcar y desmarcar la tarea
	element.classList.toggle("fas")
	element.classList.toggle("completeIcon")
	element.classList.toggle("far")

	const tasks = JSON.parse(sessionStorage.getItem("tasks"))
	const index = tasks.findIndex(item => item.id === id)
	
	tasks[index]["complete"] = !tasks[index]["complete"]
	//console.log(tasks)

	sessionStorage.setItem("tasks", JSON.stringify(tasks))
	
}

export default checkComplete