document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector('.toggle');
    const circle = document.querySelector('.circle');
    const eng = document.querySelector('.lang.eng');
    const ua = document.querySelector('.lang.ua');

    const currentLang = document.documentElement.lang;

    if (currentLang === "ua") {
        toggle.classList.add('active');
        eng.classList.add('inactive');
        ua.classList.add('active');
    } else {
        toggle.classList.remove('active');
        ua.classList.add('inactive');
        eng.classList.add('active');
    }
    // Натискання на кнопку
    toggle.addEventListener('click', () => {
        if (currentLang === "ua") {
            // Якщо користувач знаходиться на україномовній сторонці його перекидує на англомовну сторінку
            window.location.href = '../index.html';
        } else {
            // Якщо користувач знаходиться на англомовній сторонці його перекидує на україномовну сторінку
            window.location.href = '../ua/ua.html';
        }
    });
});
