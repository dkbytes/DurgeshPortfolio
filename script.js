document.addEventListener('DOMContentLoaded', function() {
    // Welcome alert
    alert('Welcome to Durgesh Maurya\'s Portfolio!');

    // Example of adding interactive behavior (e.g., changing background color on click)
    document.body.addEventListener('click', function() {
        document.body.style.backgroundColor = '#e0f7fa'; // Light turquoise background color
    });

    // Example: Implementing a simple scroll indicator
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const top = section.offsetTop - 50;
            const bottom = top + section.offsetHeight;
            const scrollY = window.scrollY;
            if (scrollY >= top && scrollY < bottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
