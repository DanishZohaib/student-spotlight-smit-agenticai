document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Switcher ---
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Optional: Save theme preference to local storage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Load theme preference from local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

