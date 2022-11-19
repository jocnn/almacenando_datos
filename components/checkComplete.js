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

export default checkComplete