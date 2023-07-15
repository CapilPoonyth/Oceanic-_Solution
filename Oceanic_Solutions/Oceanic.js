
/*const links = document.querySelectorAll('.nav-menu li a');

links.forEach((link) => {
  link.addEventListener('mousemove', (e) => {
    const rect = link.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    link.style.setProperty('--mouse-x', `${mouseX}px`);
  });
});*/

// Add event listener to the button
const navigationButton = document.getElementById('navigation-button');
navigationButton.addEventListener('click', toggleBackgroundColor);

// Toggle background color between #48CAE4 and white
function toggleBackgroundColor() {
  navigationButton.classList.toggle('white');
}

