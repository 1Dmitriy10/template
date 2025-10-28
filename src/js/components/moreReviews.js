const maxHeight = 157;  //Максимальная высота

export function moreReviews() {
    const reviewTexts = document.querySelectorAll('.reviews-prev__slide-text');
    
    
    reviewTexts.forEach(textBlock => {
        const parentSlide = textBlock.closest('.reviews-prev__slide');
        const showMoreBtn = parentSlide?.querySelector('.reviews-prev__show-more-text');
        
        if (!showMoreBtn || !parentSlide) return;
        
        // Проверяем, нужно ли показывать кнопку "развернуть"
        if (textBlock.scrollHeight > maxHeight) { // 120px - примерная высота 5 строк
            showMoreBtn.style.display = 'flex';
            parentSlide.classList.add('long-review'); // Добавляем класс для синей полоски
        } else {
            showMoreBtn.style.display = 'none';
        }
        
        // Обработчик клика на кнопку развернуть/свернуть
        showMoreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const icon = this.querySelector('.show-more-text__icon');
            
            if (textBlock.classList.contains('expanded')) {
                // Сворачиваем
                textBlock.classList.remove('expanded');
                icon.classList.remove('rotated');
            } else {
                // Раскрываем
                textBlock.classList.add('expanded');
                icon.classList.add('rotated');
            }
        });
        
        // Опционально: клик на всю карточку для раскрытия/сворачивания
        parentSlide.addEventListener('click', function(e) {
            if (!showMoreBtn.contains(e.target) && textBlock.scrollHeight > maxHeight) {
                if (textBlock.classList.contains('expanded')) {
                    textBlock.classList.remove('expanded');
                    showMoreBtn.querySelector('.show-more-text__icon').classList.remove('rotated');
                } else {
                    textBlock.classList.add('expanded');
                    showMoreBtn.querySelector('.show-more-text__icon').classList.add('rotated');
                }
            }
        });
    });
}

// Добавьте этот CSS в ваш файл стилей
const moreReviewsStyles = `

.reviews-prev__slide-text {
    max-height: ${maxHeight}px;
    overflow: hidden;
    transition: max-height 0.4s ease;
    position: relative;
}

`;

// Функция для добавления стилей в документ
function addMoreReviewsStyles() {
    if (document.getElementById('more-reviews-styles')) return;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'more-reviews-styles';
    styleSheet.textContent = moreReviewsStyles;
    document.head.appendChild(styleSheet);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    addMoreReviewsStyles();
    moreReviews();
});

// Если нужно инициализировать после динамической загрузки отзывов
export function initMoreReviews() {
    addMoreReviewsStyles();
    moreReviews();
}
