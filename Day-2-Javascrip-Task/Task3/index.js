addtask = () => {
  const taskinput = document.getElementsByClassName("task input");
  const tasklist = document.getElementsByClassName("task list");

  const taskitem = taskinput.value;

  const newtaskadd = document.createElement("li");
  newtaskadd.textContent = taskitem;

  tasklist.appendChild(newtaskadd);
};
