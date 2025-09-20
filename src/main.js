import { refs } from './js/refs';
import { tasks, addTask, deleteTask } from './js/tasks';
import { createMarkup } from './js/markup-tasks';
import { onClickTheme, applyTheme, KEY_THEME } from './js/theme-switcher';

renderTasks();

const savedTheme = localStorage.getItem(KEY_THEME) || 'light';
applyTheme(savedTheme);

refs.formEl.addEventListener('submit', onSubmit);
refs.taskListEl.addEventListener('click', onClick);
refs.themeBtn.addEventListener('click', onClickTheme);

function onSubmit(event) {
  event.preventDefault();
  const titleValue = refs.titleInputEl.value.trim();
  const descriptionValue = refs.descriptionInputEl.value.trim();
  if (!(titleValue && descriptionValue)) {
    alert('nonono');
    return;
  }
  addTask(titleValue, descriptionValue);

  renderTasks();
  event.target.reset();
}

function renderTasks() {
  refs.taskListEl.innerHTML = createMarkup(tasks);
}

function onClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const listItem = event.target.closest('LI');
  deleteTask(+listItem.dataset.id);
  renderTasks();
}
