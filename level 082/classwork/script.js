const themeToggleButton = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggleButton.textContent = "Switch to Light Mode";
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggleButton.textContent = "Switch to Dark Mode";
    }
});