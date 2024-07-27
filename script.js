$(document).ready(function(){
    $('.project').slick({
      dots: false,
      respondTo: 'slider',
      draggable: true,
      infinite: true,
      slidesToShow: 1,
      speed: 100,
      fade: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 620,
          settings: {
          arrows: false
          }
        },
        {
          breakpoint: 345,
          settings: {
          arrows: false
          }
        }
        ]
    });
  });

  

  const worksButton = document.querySelector(".works");

  worksButton.addEventListener("click", worksToggle);

  function worksToggle() {
    var projects = document.getElementById("projects");

    if (projects.style.display == "block") {
      projects.style.display = "none";
      projects.style.zIndex = "100";
      worksButton.style.color = "#EC825B";
    } else {
      projects.style.display = "block";
      worksButton.style.color = "#DCDCDCDC";
    }
  };

  const infoButton = document.querySelector(".info");

  infoButton.addEventListener("click", infoToggle);

  function infoToggle() {
    var moreInfo = document.getElementById("more-info");
    if (moreInfo.style.display == "block") {
      moreInfo.style.display = "none";
      infoButton.style.color = "#EC825B";
    } else {
      moreInfo.style.display = "block";
      infoButton.style.color = "#DCDCDCDC";
    }
  };

//   function hoverColor {
//     if (worksButton.style.color = "#EC825B") {

//     }
//   }