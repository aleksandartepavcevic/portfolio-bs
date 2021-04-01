// function isScrolledIntoView(elem) {
//   let docViewTop = $(window).scrollTop();
//   let docViewBottom = docViewTop + $(window).height();

//   let elemTop = $(elem).offset().top;
//   let elemBottom = elemTop + $(elem).height();

//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }

// $(window).scroll(function () {
//   $('.do-animation').each(function () {
//     if (isScrolledIntoView(this) === true) {
//       $(this).removeClass('do-animation');
//       $(this).addClass('animate');
//     }
//   });
// });

const form = document.getElementById('contact-form');

const formEvent = form.addEventListener('submit', (event) => {
  event.preventDefault();

  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch('https://aleksandartepavcevic.github.io/send', {
    method: 'post',
    body: 'mail',
  }).then((response) => {
    return response.json();
  });
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

let autoExpand = (field) => {
  field.style.height = 'auto';
  field.style.height = field.scrollHeight + 2 + 'px';

  if (field.style.height.replace('px', '') >= 150) {
    field.style.overflowY = 'scroll';
  } else field.style.overflowY = 'hidden';
};

document.addEventListener(
  'input',
  (event) => {
    if (event.target.tagName.toLowerCase() !== 'textarea') return;
    autoExpand(event.target);
  },
  false
);

const hamburgerMenu = document.getElementById('hamburger-menu');
const menuExit = document.getElementById('menu-exit');
const menu = document.querySelector('.menu');
const aboutMe = document.getElementById('about-me-link');
const workflow = document.getElementById('workflow-link');
const projects = document.getElementById('projects-link');

hamburgerMenu.addEventListener('click', () => {
  menu.classList.toggle('opened');
});

menuExit.addEventListener('click', () => {
  menu.classList.toggle('opened');
});

aboutMe.addEventListener('click', () => {
  menu.classList.toggle('opened');
});

workflow.addEventListener('click', () => {
  menu.classList.toggle('opened');
});

projects.addEventListener('click', () => {
  menu.classList.toggle('opened');
});
