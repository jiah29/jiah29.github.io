// Hamburger bar interaction

document.getElementById("hamburger").addEventListener("click", displayDrop);

var currentView;

function displayDrop(){
  if (document.getElementById("navlinks").style.display == "block") {
      document.getElementById("navlinks").style.display = "none";
      currentView = 'none';
      console.log(currentView);
    } else {
      document.getElementById("navlinks").style.display = "block";
      currentView = 'block';
      console.log(currentView);
    }
}

// Make sure mobile view navbar is consistent

function checkView(){

  var y = window.matchMedia('(max-width: 700px)');

  if (y.matches) {
    if (currentView == 'block') {
      document.getElementById("navlinks").style.display = "block";
    } else {
      document.getElementById("navlinks").style.display = "none";
    }
  }
}

setInterval(checkView, 10);

// Make sure navbar is always shown on large view 

function checkNav() {
  var x = window.matchMedia('(min-width: 700px)');

  if (x.matches){
    if (document.getElementById("navlinks").style.display == 'none'){
      document.getElementById("navlinks").style.display = "block";
    }
  }
}

setInterval(checkNav, 50);