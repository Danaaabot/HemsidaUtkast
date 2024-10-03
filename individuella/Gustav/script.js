document.addEventListener("DOMContentLoaded", function () {
    const leftButtonSlide = document.querySelector(".leftButtonArt");
    const rightButtonSlide = document.querySelector(".rightButtonArt");
    let index = 0;
    const slide = document.querySelectorAll(".artImages img");
    const slideLength = slide.length;
  
    leftButtonSlide.addEventListener("click", () => {
      slide[index].classList.remove("active");
      index -= 1;
      if (index < 0) {
        index = slideLength - 1;
      }
      slide[index].classList.add("active");
      console.log(index);
    });
  
    rightButtonSlide.addEventListener("click", () => {
      slide[index].classList.remove("active");
      index += 1;
      if (index >= slideLength) {
        index = 1;
      }
      slide[index].classList.add("active");
      console.log(index);
    });
  
    const menuButton = document.querySelector(".menyknapp");
    const menu = document.querySelector(".huvudmeny");
  
    menuButton.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  });
  