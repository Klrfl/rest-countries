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
});

const themeSwitcher = document.querySelector(".theme-toggle");

themeSwitcher.addEventListener("click", () => {
  const theme = getTheme();
  theme === "dark" ? setTheme("light") : setTheme("dark");
});
