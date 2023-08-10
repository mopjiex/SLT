const theme = document.querySelector('.theme');
const themeCheck = document.querySelector('.theme__check');

const switchTheme = () => {
    themeCheck.classList.toggle('theme__check_switch');
}

theme.addEventListener('click', switchTheme);