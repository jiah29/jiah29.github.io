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

// Make sure mobile view drop down list is not shown on scroll

function offList() {

  var z = window.matchMedia('(max-width: 700px)');

  if (z.matches) {
    document.getElementById("dropdown").style.display = "none";
    currentView = 'none';
  }
}

// Typing effect

var i = 0;
var txt = 'Brief Introduction:'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titletxt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}