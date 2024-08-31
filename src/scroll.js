window.addEventListener('scroll', reveal);

function reveal() {
  const appear = document.querySelectorAll('.reveal');

  for (let i = 0; i < appear.length; i++) {
    const winHeight = window.innerHeight;
    const revealTop = appear[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if(revealTop < winHeight - revealPoint) {
      appear[i].classList.add('active');
    } else {
      appear[i].classList.remove('active');
    }
  }
}

export default reveal;
