const theme = document.querySelector('.theme');
const themeCheck = document.querySelector('.theme__check');
const themeLink = document.querySelector('.theme__link');
const lightTheme = './css/light.css';
const darkTheme = './css/dark.css';

const saveTheme = (theme) => {
    localStorage.setItem('selectedTheme', theme);
}

const loadTheme = () => {
    const selectedTheme = localStorage.getItem('selectedTheme');
    if(selectedTheme === darkTheme) {
        themeCheck.classList.add('theme__check_switch');
        themeLink.href = darkTheme;
    } else {
        themeCheck.classList.remove('theme__check_switch');
        themeLink.href = lightTheme;
    }
}

const switchTheme = () => {
    themeCheck.classList.toggle('theme__check_switch');
    if(themeCheck.classList.contains('theme__check_switch')) {
        themeLink.href = darkTheme;
        saveTheme(darkTheme);
    } else {
        themeLink.href = lightTheme;
        saveTheme(lightTheme);
    }
}

theme.addEventListener('click', switchTheme);
loadTheme();