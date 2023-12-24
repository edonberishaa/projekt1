function toggle() {
    let boxes = document.querySelectorAll("#box");
  
    boxes.forEach(function(box) {
      if (box.style.filter === "blur(3px)") {
        box.style.filter = "blur(0px)";
      } else {
        box.style.filter = "blur(3px)";
      }
    });
  }
  let btnToggle = document.getElementById("btnToggle");
  btnToggle.addEventListener('click', toggle);
  
  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarList = document.querySelector('.navbar ul');

    hamburgerBtn.addEventListener('click', function () {
        navbarList.classList.toggle('show');
    });
});
