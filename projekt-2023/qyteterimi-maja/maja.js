document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbarList = document.querySelector('.navbar ul');
  const margina = document.getElementById('sektion');

  let isMenuOpen = false;

  hamburgerBtn.addEventListener('click', function () {
      navbarList.classList.toggle('show');
      
      // Toggle margin based on the menu state
      if (isMenuOpen) {
          margina.style.margin = '0';
      } else {
          margina.style.margin = '29% 0 0 0';
      }

      // Update the menu state
      isMenuOpen = !isMenuOpen;
  });
});
