// ===== Часть 1: Прокрутка страницы и изменение шапки =====

// Слушаем событие прокрутки страницы
window.addEventListener('scroll', () => {
    // Находим элемент шапки (<header>) 
    const header = document.querySelector('header');

    // Вычисляем пороговое значение (10% высоты видимой области окна)
    const delta = window.innerHeight * 0.1;

    // Проверяем, прокрутили ли страницу ниже порогового значения
    if (window.scrollY > delta) {
        // Добавляем класс 'scrolled' к шапке при прокрутке
        header.classList.add('scrolled');
    } else {
        // Убираем класс 'scrolled', когда страница вверху
        header.classList.remove('scrolled');
    }
});

// ===== Часть 2: Слайдер изображений =====

// Получаем все элементы слайдов
const slides = document.querySelectorAll('.slide');
// Находим кнопку "Назад"
const prevBtn = document.querySelector('.prev');
// Находим кнопку "Вперед"
const nextBtn = document.querySelector('.next');
// Текущий индекс активного слайда (начинаем с 0)
let currentIndex = 0;

// Функция отображения конкретного слайда по индексу
function showSlide(index) {
    // Перебираем все слайды
    slides.forEach((slide, i) => {
        // Добавляем класс 'active' текущему слайду, убираем у остальных
        // (второй параметр в toggle означает: добавить если true, удалить если false)
        slide.classList.toggle('active', i === index);
    });
}

// Функция переключения на следующий слайд
function nextSlide() {
    // Вычисляем новый индекс с зацикливанием (% slides.length)
    currentIndex = (currentIndex + 1) % slides.length;
    // Показываем слайд с новым индексом
    showSlide(currentIndex);
}

// Функция переключения на предыдущий слайд
function prevSlide() {
    // Вычисляем новый индекс с зацикливанием в обратную сторону
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    // Показываем слайд с новым индексом
    showSlide(currentIndex);
}

// Вешаем обработчики клика на кнопки:
// При клике на "Вперед" - nextSlide()
nextBtn.addEventListener('click', nextSlide);
// При клике на "Назад" - prevSlide()
prevBtn.addEventListener('click', prevSlide);

// Автоматическое перелистывание слайдов каждые 10 секунд
setInterval(nextSlide, 10000);