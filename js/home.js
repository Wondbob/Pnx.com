
function dropdown() {

    document.getElementById('box').classList.toggle("show");
}

window.onclick = function (event) {
if (!event.target.matches('.dropdown-toggle')) {

    var dropdowns = document.getElementsByClassName("box");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


 function openNav() {
    document.getElementById('sideNav').style.height = "100%";
     document.getElementById('sideNavContent').style.display = "block";
     document.getElementById('closebtn').style.display = "block";
     
}

 function closeNav() {
    document.getElementById('sideNav').style.height = "0";
     document.getElementById('sideNavContent').style.display = "none";
     document.getElementById('closebtn').style.display = "none";
}


