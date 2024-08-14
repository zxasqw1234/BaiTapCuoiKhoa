document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('dropdownButton');
    const menu = document.getElementById('dropdownMenu');

    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);
        menu.style.display = expanded ? 'none' : 'block';
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            button.setAttribute('aria-expanded', 'false');
            menu.style.display = 'none';
        }
    });

    // Keyboard interaction
    button.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            button.setAttribute('aria-expanded', 'false');
            menu.style.display = 'none';
        }
    });

    menu.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            button.setAttribute('aria-expanded', 'false');
            menu.style.display = 'none';
        }
    });
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      watchState: true,
    },
  });
  let mybutton = document.getElementById("myBtn");

  window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.style.display = "block";
      } else {
          mybutton.style.display = "none";
      }
  };

  function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  function toggleView(e){
    console.log(e.target)
    if(e.target.classList.contains('list-layout')){
        document.querySelector('.Toggle-button').children[0].classList.add('active');
        document.querySelector('.Toggle-button').children[1].classList.remove('active');

        document.querySelector('#container').classList.add('list-layout');
        document.querySelector('#container').classList.remove('grid-layout');

    }else if(e.target.classList.contains('grid-layout')){
        document.querySelector('.Toggle-button').children[0].classList.remove('active');
        document.querySelector('.Toggle-button').children[1].classList.add('active');

        document.querySelector('#container').classList.add('list-layout');
        document.querySelector('#container').classList.remove('grid-layout');
    }
  }