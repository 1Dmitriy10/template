export // Анимация появления при скролле
    function animateOnScroll() {
    const cards = document.querySelectorAll('.blog-prev__card');
    if(!cards.length) return;

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

// Проверка медиа-запроса
const mediaQuery = window.matchMedia('(min-width: 999px)');

function handleMediaChange(e) {
    if (e.matches) {
        animateOnScroll();
    }
}

// Слушаем изменения
document.addEventListener('DOMContentLoaded', () => {
    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);
});

    // Запуск после загрузки DOM
    // document.addEventListener('DOMContentLoaded', animateOnScroll);