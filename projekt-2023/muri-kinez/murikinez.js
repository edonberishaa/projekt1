document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarList = document.querySelector('.navbar ul');
  
    hamburgerBtn.addEventListener('click', function () {
        navbarList.classList.toggle('show');
    });
    hamburgerBtn.removeEventListener();

  });
  
