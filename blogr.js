var dropMenus = ["product_drop_down", "company_drop_down", "connect_drop_down"];

var removeMenus = [
  "product_drop_down",
  "company_drop_down",
  "connect_drop_down",
];

function mobileMenu() {
  document.getElementById("navbar").style.display = "block";
  document.getElementById("menu-bar").style.display = "none";
  document.getElementById("cancel-menu-bar").style.display = "block";
}

function cancelMenu() {
  document.getElementById("navbar").style.display = "none";
  document.getElementById("cancel-menu-bar").style.display = "none";
  document.getElementById("menu-bar").style.display = "block";
  document.getElementById("product_drop_down").style.display = "none";
  document.getElementById("company_drop_down").style.display = "none";
  document.getElementById("connect_drop_down").style.display = "none";
  document.getElementById("dropone").style.rotate = "360deg";
  document.getElementById("droptwo").style.rotate = "360deg";
  document.getElementById("dropthree").style.rotate = "360deg";
}

// THE THREE INDIVIDUAL DROPDOWN-MENUS

function productDrop() {
  document.getElementById("product_drop_down").style.display = "block";
  document.getElementById("dropone").style.rotate = "180deg";
  document.getElementById("dropdown_white1").style.rotate = "180deg";
}
function companyDrop() {
  document.getElementById("company_drop_down").style.display = "block";
  document.getElementById("droptwo").style.rotate = "180deg";
  document.getElementById("dropdown_white2").style.rotate = "180deg";
}

function connectDrop() {
  document.getElementById("connect_drop_down").style.display = "block";
  document.getElementById("dropthree").style.rotate = "180deg";
  document.getElementById("dropdown_white3").style.rotate = "180deg";
}

// Closing Dropdown Menu Section

window.addEventListener("mouseup", function (event) {
  for (var i = 0; i < dropMenus.length; i++) {
    var firstDrop = document.getElementById("product_drop_down");
    if (event.target != firstDrop && event.target.parentNode != firstDrop) {
      firstDrop.style.display = "none";
      document.getElementById("dropone").style.rotate = "360deg";
      document.getElementById("dropdown_white1").style.rotate = "360deg";
    }
  }
  var secondDrop = document.getElementById("company_drop_down");
  if (event.target != secondDrop && event.target.parentNode != secondDrop) {
    secondDrop.style.display = "none";
    document.getElementById("droptwo").style.rotate = "360deg";
    document.getElementById("dropdown_white2").style.rotate = "360deg";
  }

  var thirdDrop = document.getElementById("connect_drop_down");
  if (event.target != thirdDrop && event.target.parentNode != thirdDrop) {
    thirdDrop.style.display = "none";
    document.getElementById("dropthree").style.rotate = "360deg";
    document.getElementById("dropdown_white3").style.rotate = "360deg";
  }
});
