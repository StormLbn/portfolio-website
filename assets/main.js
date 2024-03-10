const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
const themeToggleElt = document.querySelector("div#theme");
const mailLinkElt = document.querySelector("a#mail-link");

// Functions for light/dark theme toggle
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

// Function to copy mail to clipboard
const copyMail = () => {
    const myMail = mailLinkElt.querySelector("#my-mail").innerHTML.trim();
    navigator.clipboard.writeText(myMail);

    document.querySelector("span#copy-icon").classList.remove("bi-clipboard");
    document.querySelector("span#copy-icon").classList.add("bi-clipboard-check");
}


//  Main

let currentTheme = getPreferedTheme(systemSettingLight);

themeToggleElt.addEventListener("click", themeHandler);

mailLinkElt.addEventListener("click", copyMail);