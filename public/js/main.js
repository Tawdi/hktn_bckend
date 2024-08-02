document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector(".burger");
  const phone = document.querySelector('.phone');

  burger.addEventListener('click', () => {
      phone.classList.toggle('hidden');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optionally stop observing the element once it becomes visible
      }
    });
  }, {
    threshold: 0.4
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
// function openNav(){
//   document.querySelector(".links").style.width="100%";
//   document.querySelector(".body").style.overflow="hidden"
// }

// function closeNav(){
//   document.querySelector(".links").style.width="0%";
//   document.querySelector(".body").style.overflow="unsert"
// }
