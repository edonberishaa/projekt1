document.addEventListener('DOMContentLoaded', function () {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navbarList = document.querySelector('.navbar ul');

  hamburgerBtn.addEventListener('click', function () {
    navbarList.classList.toggle('show');
  });
});

function margjina() {
  let div = document.getElementById("text-area");
  if (div.style.margin === "0px 0px 0px 0px") {
    div.style.margin = "-20% 0px 0px 0px";
  } else {
    div.style.margin = "8% 0px 0px 0";
  }
}

let div = document.getElementById("hamburger-btn");
div.addEventListener('click', margjina);
