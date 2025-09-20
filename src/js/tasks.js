const KEY_TASKS = 'tasks';
export let tasks = JSON.parse(localStorage.getItem(KEY_TASKS)) || [];

export function addTask(title, description) {
  const task = { id: Date.now(), title, description };
  tasks.push(task);
  localStorage.setItem(KEY_TASKS, JSON.stringify(tasks));
}

export function deleteTask(selectedId) {
  tasks = tasks.filter(item => item.id !== selectedId);
  localStorage.setItem(KEY_TASKS, JSON.stringify(tasks));
}
