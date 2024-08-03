$(document).ready(function(){
    $('.project').slick({
      dots: false,
      respondTo: 'slider',
      draggable: true,
      infinite: true,
      slidesToShow: 1,
      speed: 150,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 620,
          settings: {
          arrows: false,
          adaptiveHeight: true
          }
        },
        {
          breakpoint: 345,
          settings: {
          arrows: false,
          adaptiveHeight: true
          }
        }
        ]
    });
  });

  

  const worksButton = document.querySelector(".works");

  worksButton.addEventListener("click", worksToggle);

  var moreInfo = document.getElementById("more-info");
  var projects = document.getElementById("projects");

  function worksToggle() {
    var projects = document.getElementById("projects");

    if (projects.style.opacity == "0") {
      projects.style.opacity = "1";
      projects.style.pointerEvents = "unset";
      worksButton.style.color = "#DCDCDCDC";
      // worksButton.addEventListener("mouseenter", (x) => {
      //   worksButton.innerHTML = 'X';
      // });
      // worksButton.addEventListener("mouseleave", (Works) => {
      //   worksButton.innerHTML = 'Works';
      // });
    } else {
      projects.style.pointerEvents = "none";
      projects.style.opacity = "0";
      worksButton.style.color = "#EC825B";
    }

    var mobileView = window.matchMedia("(max-width: 640px)")

    function mobileProjectsToggle(mobileView) {
      if (mobileView.matches) { // If media query matches
        if (projects.style.display == "block") {
          moreInfo.style.display = "none";
        } else if (moreInfo.style.display == "none") {
          moreInfo.style.display = "block";
        }
      } 
    }
  
    mobileProjectsToggle(mobileView);
  };

  const infoButton = document.querySelector(".info");

  infoButton.addEventListener("click", infoToggle);

  function infoToggle() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.opacity == "1") {
      moreInfo.style.opacity = "0";
      moreInfo.style.pointerEvents = "none";
      infoButton.style.color = "#EC825B";
    } else {
      moreInfo.style.opacity = "1";
      moreInfo.style.pointerEvents = "unset";
      infoButton.style.color = "#DCDCDCDC";
    }

    var mobileView = window.matchMedia("(max-width: 640px)")

    function mobileInfoToggle(mobileView) {
      if (mobileView.matches) { // If media query matches
        if (moreInfo.style.display == "block") {
          projects.style.display = "none";
        } else if (moreInfo.style.display == "none") {
          projects.style.display = "block";
        }
      } 
    }
  
    mobileInfoToggle(mobileView);
  };

  