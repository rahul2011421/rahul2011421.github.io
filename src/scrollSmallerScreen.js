window.addEventListener('scroll', hide);

function hide() {
  const hidden = document.querySelector('.App-header');
  const body = document.querySelector('.App-body');

  const winHeight = window.innerHeight;
  const revealTop = body.getBoundingClientRect().top;
  const revealPoint = 150;

  if (winHeight + revealTop < winHeight - revealPoint) {
    hidden.classList.add('active');
  } else {
    hidden.classList.remove('active');
  }
}

export default hide;
