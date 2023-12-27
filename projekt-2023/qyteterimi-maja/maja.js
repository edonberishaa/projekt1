document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarList = document.querySelector('.navbar ul');
  
    hamburgerBtn.addEventListener('click', function () {
        navbarList.classList.toggle('show');
    });
    hamburgerBtn.removeEventListener();

  });
  
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const margina = document.getElementById('sektion');
  hamburgerBtn.addEventListener('click',function () {
    margina.style.margin = '25% 0px 0px 0px';
  });
