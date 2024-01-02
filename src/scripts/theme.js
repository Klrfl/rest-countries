const themeIdentifier = "klrfl-country-theme";
const bodyAttribute = "data-klrfl-country-theme";

function getTheme() {
  const themePreference = localStorage.getItem(themeIdentifier);
  const prefersDark = window.matchMedia("(prefers-color-scheme: darl)");

  if (themePreference !== "dark" && themePreference !== "light") {
    if (prefersDark.matches) localStorage.setItem(themeIdentifier, "dark");
    else localStorage.setItem(themeIdentifier, "light");
  }

  return localStorage.getItem(themeIdentifier);
}

function setTheme(targetTheme) {
  document.body.setAttribute(bodyAttribute, targetTheme);
  localStorage.setItem(themeIdentifier, targetTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const preferredTheme = getTheme();
  setTheme(preferredTheme);

  const themeSwitcher = document.querySelector(".theme-toggle");

  themeSwitcher.addEventListener("click", () => {
    const theme = getTheme();
    let themeSwitcherIcon = themeSwitcher.children[0];
    let themeSwitcherText = themeSwitcher.children[1];

    if (theme === "dark") {
      setTheme("light");
      themeSwitcherText.innerText = "light mode";
      themeSwitcherIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      setTheme("dark");
      themeSwitcherText.innerText = "dark mode";
      themeSwitcherIcon.classList.replace("fa-sun", "fa-moon");
    }
  });
});
