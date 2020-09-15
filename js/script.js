const sectionResume = document.querySelector(".section-resume");
const sectionPortfolio = document.querySelector(".section-portfolio");
const sectionExpirience = document.querySelector(".section-expirience");

const menuPoints = document.querySelectorAll(".menu-point");

function getCoordsY(elem) {
  let box = elem.getBoundingClientRect();
  let boxCoordY = box.top + pageYOffset;
  return boxCoordY;
}

window.addEventListener('scroll', function() {
  let sectionResumeY = Math.floor( getCoordsY(sectionResume) );
  let sectionPortfolioCoordY = Math.floor( getCoordsY(sectionPortfolio) );
  let sectionExpirienceY = Math.floor( getCoordsY(sectionExpirience) );
  
  for (let i = 0; i < menuPoints.length; i++) {
    let linkInMenuPoint = menuPoints[i].querySelector(".menu-point-link");
    linkInMenuPoint.classList.remove("active");
  }
  
  if (pageYOffset < sectionPortfolioCoordY) {
    menuPoints[0].querySelector(".menu-point-link").classList.add("active");
  } else if (pageYOffset >= sectionPortfolioCoordY && pageYOffset < sectionExpirienceY) {
    menuPoints[1].querySelector(".menu-point-link").classList.add("active");
  } else if (pageYOffset >= sectionExpirienceY){
    menuPoints[2].querySelector(".menu-point-link").classList.add("active");
  }
});