
const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const nav = document.querySelectorAll('.nav');

openBtn.addEventListener('click', () => {
    nav.forEach(navElem => navElem.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
    nav.forEach(navElem => navElem.classList.remove('visible'))
})

