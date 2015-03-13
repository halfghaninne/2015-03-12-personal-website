window.onload = function() {
  
  alert("JS is linked, yo!");
  
  var aboutMeLink = document.getElementById("about_link");
  var resumeLink = document.getElementById("resume_link");
  
  aboutMeLink.addEventListener("click", showAbout);
  
  
  
  function showAbout() {
    alert("document is acknowledging click event");
    var aboutInfo = document.getElementById("about");
    aboutInfo.setAttribute("style", "display: block");
  } //end of showAbout function
  
  
  
  
  
  
  
  
  
  
  
} //end onload