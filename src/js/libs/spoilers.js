//   ===================================================Спойлеры=======================================================
{/* <details>
    <summary class="_spoiler-js">Заголовок 1</summary>
        <div class="spoiler-content">
            Контент 1
        </div>
</details> */}
// -----------------------------------------------------------------------------------------------

import { Spoilers } from "../vendor/spoilers.js";

export const faqPrevSpoilers = new Spoilers({
    item: 'faq-prev__spoiler-js', /*класс споилера*/
    timeAnimation: 300, /*время анимации*/
    accordion: true,    /*Режим аккордиона*/
    firstOpen: true,    /*Первый элемент всегда открыт*/
    allOpen: false    /*Все элементы открыты*/
})



