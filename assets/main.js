const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
const themeToggleElt = document.querySelector("div#theme");

const getPreferedTheme = (systemSettingLight) => {
    const theme = systemSettingLight.matches ? "light" : "dark";
    document.querySelector("html").setAttribute("data-theme", theme);
    return theme;
}

const themeHandler = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    themeToggleElt.querySelector("span#icon-" + currentTheme).style.display = "none";
    themeToggleElt.querySelector("span#icon-" + newTheme).style.display = "inline";
    
    document.querySelector("html").setAttribute("data-theme", newTheme);
    currentTheme = newTheme;
}

let currentTheme = getPreferedTheme(systemSettingLight);

themeToggleElt.addEventListener("click", themeHandler);