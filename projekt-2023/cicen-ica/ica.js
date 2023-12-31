document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbarList = document.querySelector('.navbar ul');
  const margina = document.getElementById('sektion');

  let isMenuOpen = false;

  hamburgerBtn.addEventListener('click', function () {
      navbarList.classList.toggle('show');
      
    if (isMenuOpen) {
          margina.style.margin = '0';
      } else {
          margina.style.margin = '150px 0 0 0';
      }

      isMenuOpen = !isMenuOpen;
  });
});
