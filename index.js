// select header
let selectHeader = document.querySelector('#header');

// sticky menu
window.onscroll = () => {
  // Add class
  if (this.scrollY > 100) {
    selectHeader.classList.add('sticky');
    // Remove class
  } else {
    selectHeader.classList.remove('sticky');
  }
};
