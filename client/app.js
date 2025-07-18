function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', function () {
    li.classList.toggle('done');
    saveTasks();
  });

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
  saveTasks();
  const deleteBtn = document.createElement('button');
deleteBtn.textContent = '🗑';
deleteBtn.onclick = () => {
  li.remove();
  saveTasks();
};
li.appendChild(deleteBtn);
}
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    const text = li.childNodes[0].textContent;
    const done = li.classList.contains('done');
    tasks.push({ text, done });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

