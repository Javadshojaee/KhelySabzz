async function TaskBar() {
  let Tasks = "";
  let data = await fetch("https://javadshojaee.github.io/KhelySabz/db.json");
  let res = await data.json();
  Tasks = res.TaskBar?.map((Tak) => {
    return `<div class="Task">${Tak.TaskText}</div>`;
  });
  document.querySelector("#TaskBar").insertAdjacentHTML("beforeend",Tasks.join(" "))
}

export default TaskBar