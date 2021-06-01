const burger = document.getElementById('burger');
const slider = document.getElementById('slider');

burger.addEventListener('click', () => {
  console.log('clicked');
  slider.classList.toggle('nav__links--open');
});
