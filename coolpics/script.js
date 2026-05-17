const gallery = document.querySelector('#gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close');
const menu = document.querySelector('.main-btn');
const nav = document.querySelector('nav');

gallery.addEventListener('click', openModal);
menu.addEventListener('click', toggleNav);

function openModal(e) {
    console.log(e.target);
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('coolpic1', 'coolpic1-full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
};

closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function toggleNav(e) {
    console.log(e.target)
    nav.classList.toggle('hidden');
};