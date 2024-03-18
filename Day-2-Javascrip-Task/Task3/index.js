addTask = () => {
  const taskInput = document.querySelector(".task-input");
  const taskList = document.querySelector(".task-list");

  const taskItem = taskInput.value.trim();

  if (taskItem !== "") {
    const newTaskAdd = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        newTaskAdd.style.textDecoration = "line-through";
      } else {
        newTaskAdd.style.textDecoration = "none";
      }
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(newTaskAdd);
    });

    newTaskAdd.appendChild(checkbox);
    newTaskAdd.appendChild(document.createTextNode(taskItem));
    newTaskAdd.appendChild(removeButton);
    taskList.appendChild(newTaskAdd);
  }
  taskInput.value = "";
};
