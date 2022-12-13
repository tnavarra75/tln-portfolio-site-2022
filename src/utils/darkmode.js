export function getTheme() {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window.__theme;
}

export function setPreferredTheme(theme) {
  console.log(theme)
  window.__setPreferredTheme(theme);
}