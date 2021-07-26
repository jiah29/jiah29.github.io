// Hamburger bar interaction

document.getElementById("hamburger").addEventListener("click", displayDrop);
document.getElementById("hamburger").addEventListener("keypress", displayDrop);

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

// Change image

function changeImage(obj){

  var image = document.getElementById("profile-photo");

  if (obj.id == "cs") {
      image.src = 'images/cs.gif';
  } else if (obj.id == "geo"){
      image.src = 'images/geo.gif';
  } else {
    image.src = 'images/stats.gif';
  }
}

function revertImage(obj){
  var image = document.getElementById("profile-photo");
  
  image.src = 'images/profile.jpeg';
}

// Get date and return notice message for resume.html
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML += "As of " + d + "/" + m + "/" + y + ", the information on this page is accurate up until July 2021.";

// Show social icons for resume.html mobile version

var toggleIcon;

function toggleIcons() {
  var icons = document.getElementById("icons");

  if (icons.style.display == "block") {
    document.getElementById("icons").style.display ="none";
    toggleIcon = "off";
  } else {
    document.getElementById("icons").style.display ="block";
    toggleIcon = "on";
  }
}

// Show social icons for resume.html mobile version are displayed consistently

function checkToggleIcon(){

  var y = window.matchMedia('(max-width: 700px)');

  if (y.matches) {
    if (toggleIcon == 'on') {
      document.getElementById("icons").style.display = "block";
    } else {
      document.getElementById("icons").style.display = "none";
    }
  }
}

setInterval(checkToggleIcon, 5);

// Make sure social icons are always shown on large view for resume.html

function checkIcons() {
  var x = window.matchMedia('(min-width: 700px)');

  if (x.matches){
    if (document.getElementById("icons").style.display == 'none'){
      document.getElementById("icons").style.display = "block";
    }
  }
}

setInterval(checkIcons, 50);