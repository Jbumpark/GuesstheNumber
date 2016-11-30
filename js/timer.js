var sec = 0;   // set the seconds
var min = 0;   // set the minutes

function countDown() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min = min + 1;
  } else {
   min = min;
  }
if (sec<=9) { sec = "0" + sec; }
  time = (min<=9 ? "0" + min : min) + " min " + sec + " sec ";
if (document.getElementById) { theTime.innerHTML = time; }
  SD=window.setTimeout("countDown();", 1000);
if (min == '00' && sec == '00') { sec = "00"; window.clearTimeout(SD); }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

addLoadEvent(function() {
  countDown();
});