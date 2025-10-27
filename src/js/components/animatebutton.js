export function animatebutton() {
    // Находим все кнопки с классом btn-anim
    const animatedButtons = document.querySelectorAll('.btn-anim');

    // Для каждой кнопки добавляем обработчики событий
    animatedButtons.forEach(button => {
        button.addEventListener('mouseenter', function (e) {
            createRipple(e, this);
        });

        // Можно также добавить эффект при клике
        button.addEventListener('click', function (e) {
            createRipple(e, this);
        });
    });

    function createRipple(event, element) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        element.appendChild(ripple);

        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Удаляем элемент после анимации
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }
};
animatebutton();