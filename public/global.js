window.onload = function() {
  // alert("TEST: JS is linked, yo!");
  
  var aboutMeLink = document.getElementById("about_link");
  aboutMeLink.addEventListener("click", showAbout);
  
  var resumeLink = document.getElementById("resume_link");
  resumeLink.addEventListener("click", showResume);
  
  var portfolioLink = document.getElementById("portfolio_link");
  portfolioLink.addEventListener("click", showPortfolio);
  
  var dreamzLink = document.getElementById("dreamz_link");
  dreamzLink.addEventListener("click", showDreamz);
  
  
  
  function showAbout() {
    // alert("TEST: document is acknowledging click event");
    var aboutInfo = document.getElementById("about");
    var allInfo = document.getElementsByClassName("section_info");
    
    // allInfo.forEach(setAttribute("style", "display: none"));
    aboutInfo.setAttribute("style", "display: block");
  } //end of showAbout function
  
  function showResume() {
    // alert("TEST: document is acknowledging click event");
    var resumeInfo = document.getElementById("resume");
    resumeInfo.setAttribute("style", "display: block");
  } //end of showResume function
  
  function showPortfolio() {
    // alert("TEST: document is acknowledging click event");
    var portfolioInfo = document.getElementById("portfolio");
    portfolioInfo.setAttribute("style", "display: block");
  } //end of showPortfolio function
  
  function showDreamz() {
    // alert("TEST: document is acknowledging click event");
    var dreamzInfo = document.getElementById("dreamz");
    dreamzInfo.setAttribute("style", "display: block");
  } //end of showDreamz portfolio
  
  
  
  
  
  
  
  
  
  
} //end onload