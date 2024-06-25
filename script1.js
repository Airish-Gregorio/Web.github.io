document.addEventListener('DOMContentLoaded', function() {

    // Toggle menu and navbar classes on menu click
    document.getElementById('menu').addEventListener('click', function() {
        this.classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('nav-toggle');
    });

    // Handle scroll and load events
    function onScrollOrLoad() {
        document.getElementById('menu').classList.remove('fa-times');
        document.querySelector('.navbar').classList.remove('nav-toggle');

        if (window.scrollY > 0) {
            document.querySelector('.scroll-top').style.display = 'block';
        } else {
            document.querySelector('.scroll-top').style.display = 'none';
        }

        // Scroll spy functionality
        document.querySelectorAll('section').forEach(function(section) {
            let height = section.offsetHeight;
            let offset = section.offsetTop - 200;
            let id = section.id;
            let top = window.scrollY;

            if (top > offset && top < offset + height) {
                document.querySelectorAll('.navbar ul li a').forEach(function(anchor) {
                    anchor.classList.remove('active');
                });
                document.querySelector('.navbar').querySelector(`[href="#${id}"]`).classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScrollOrLoad);
    window.addEventListener('load', onScrollOrLoad);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href*="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            let target = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        });
    });

});
