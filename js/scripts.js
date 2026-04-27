// Анимация появления блоков при прокрутке
function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('visible');
        }
    });
}

// Инициализация анимации при загрузке и прокрутке
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Инициализация карт Яндекс
function initMaps() {
    // Карта регистрации
    ymaps.ready(function () {
        try {
            const mapRegistration = new ymaps.Map('map-registration', {
                center: [55.751574, 37.617734], // Пример координат — заменить на реальные
                zoom: 16
            });
            
            const placemarkRegistration = new ymaps.Placemark([55.751574, 37.617734], {
                hintContent: 'Место регистрации',
                balloonContent: 'Архитектурный комплекс "Белый Зал"'
            });
            
            mapRegistration.geoObjects.add(placemarkRegistration);
        } catch (e) {
            console.error('Failed to initialize registration map:', e);
        }
    });
    
    // Карта банкета
    ymaps.ready(function () {
        try {
            const mapBanquet = new ymaps.Map('map-banquet', {
                center: [55.755819, 37.617633], // Пример координат — заменить на реальные
                zoom: 16
            });
            
            const placemarkBanquet = new ymaps.Placemark([55.755819, 37.617633], {
                hintContent: 'Место банкета',
                balloonContent: 'Ресторан "Сады Эдема"'
            });
            
            mapBanquet.geoObjects.add(placemarkBanquet);
        } catch (e) {
            console.error('Failed to initialize banquet map:', e);
        }
    });
}

// Запуск инициализации карт при загрузке
// Функция обратного отсчёта
function updateCountdown() {
    const weddingDate = new Date('May 15, 2026 14:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Обновление таймера каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown(); // Первый запуск

window.addEventListener('load', initMaps);