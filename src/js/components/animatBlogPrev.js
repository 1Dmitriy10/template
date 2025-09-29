export // Анимация появления при скролле
    function animateOnScroll() {
        const cards = document.querySelectorAll('.blog-prev__card');

        if(!cards) {return null}

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            observer.observe(card);
        });
    }

    // Запуск после загрузки DOM
    document.addEventListener('DOMContentLoaded', animateOnScroll);