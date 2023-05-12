//navigation bar - active//
  var currentUrl = window.location.href;
  if (currentUrl.includes("index.html")) {
  document.getElementById("home").classList.add("active");
  }
  if (currentUrl.includes("about.html")) {
    document.getElementById("about").classList.add("active");
  }
  if (currentUrl.includes("contact.html")) {
      document.getElementById("contact").classList.add("active");
  }
  if (currentUrl.includes("projects.html")) {
      document.getElementById("portfolio").classList.add("active");
  }
//navigation bar - responsive//
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("navMenu");

  toggle.addEventListener("click", () => {
    const menuState = menu.getAttribute("data-open");
    if (menuState === "false") {
      menu.setAttribute("data-open", "true");
    } 
    else {
      menu.setAttribute("data-open", "false");
    }
  });

//parallex scrolling//
window.addEventListener('load', () => {
  let bl = document.getElementById('b-l')
  let br = document.getElementById('b-r')
  let fl = document.getElementById('f-l')
  let fr = document.getElementById('f-r')

  window.addEventListener('scroll', () => {
     let value = window.scrollY

 bl.style.left = value * -0.6 + 'px';
 br.style.left = value * 0.6 + 'px';
 fl.style.left = value * -0.4 + 'px';
 fr.style.left = value * 0.2 + 'px';
})
});

//projects-scroller//

const projectArray = document.querySelector(".project-array");
const projectContainer = document.querySelector(".projects");
const projectcard = document.querySelector(".project");

let currentPosition = 0;
let scrollAmount = projectcard.offsetWidth + 16;

  function projectScroll(val) {
  currentPosition += (val * scrollAmount);

    if(currentPosition > 0) {
      currentPosition = 0
    }
    let maxScroll = - projectArray.offsetWidth + projectContainer.offsetWidth;
    if(currentPosition < maxScroll) {
      currentPosition = maxScroll
    }
    projectArray.style.left = currentPosition + 'px';
    }


   


