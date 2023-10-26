
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    //document.querySelector('header').classList.add('show');
    document.querySelector('.navbar').classList.add('show');
  } else {
    // user has scrolled down
    //document.querySelector('header').classList.remove('show');
    document.querySelector('.navbar').classList.remove('show');
  }

  if (prevScrollPos <= 0 || currentScrollPos <= 0 || prevScrollPos-currentScrollPos<=0)
  {
    document.querySelector('.navbar').classList.remove('show');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});


if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({ behavior: "smooth" })
    document.querySelector('.navbar').classList.remove('show');
  })
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

