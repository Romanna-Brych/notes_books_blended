export const KEY_THEME = 'theme';

export function applyTheme(savedTheme) {
  const bodyEl = document.body;
  if (savedTheme === 'dark') {
    bodyEl.classList.add('theme-dark');
    bodyEl.classList.remove('theme-light');
  } else {
    bodyEl.classList.add('theme-light');
    bodyEl.classList.remove('theme-dark');
  }
}

export function onClickTheme() {
  const bodyEl = document.body;
  if (bodyEl.classList.contains('theme-dark')) {
    bodyEl.classList.remove('theme-dark');
    bodyEl.classList.add('theme-light');
    localStorage.setItem(KEY_THEME, 'light');
  } else {
    bodyEl.classList.remove('theme-light');
    bodyEl.classList.add('theme-dark');
    localStorage.setItem(KEY_THEME, 'dark');
  }
}
