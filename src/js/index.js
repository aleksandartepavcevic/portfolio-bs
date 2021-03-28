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
