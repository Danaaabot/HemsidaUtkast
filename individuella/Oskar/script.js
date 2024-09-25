const projectslideshow = Vue.createApp({
  data() {
    return {
      //Skapar en array för att ladda in projekten från json-fil
      projects: [],
      //Definierar ett basindex för att kunna byta mellan projekt
      projectIndex: 1,
    };
  },
  methods: {
    //Funktion för att gå till nästa projekt
    nextProject() {
      if (this.projectIndex >= this.projects.length) {
        this.projectIndex = 1;
      } else {
        this.projectIndex++;
      }
    },

    //Funktion för att gå till föregående projekt
    previousProject() {
      //Så länge index inte är på sitt "minstavärde" så minskas index med 1
      if (this.projectIndex > 1) {
        this.projectIndex = this.projectIndex - 1;
      } // Annars sätt index till sista projektet, för att "loopa" tillbaka
      else {
        this.projectIndex = this.projects.length;
      }
    },
  },
  async mounted() {
    try {
      // Fetchar data från json-fil
      const response = await fetch("./data.json");
      const data = await response.json();

      this.projects = data;
    } catch (error) {
      console.error("Lyckades inte ladda in projekt", error);
    }
  },
});
projectslideshow.mount("#projectslideshow");

function leftButtonEvent(slide = []) {
  slide.forEach((img) => {
    img.classList.toggle("active");
  });
}
function slideshow() {
  const leftButtonSlide = document.querySelector(".leftButtonSlide");
  const rightButtonSlide = document.querySelector(".rightButtonSlide");
  let index = 0;
  const slide = document.querySelectorAll(".slide img");
  const slideLength = slide.length;
  leftButtonSlide.addEventListener("click", () => {
    slide[index].classList.remove("active");
    index -= 1;
    if (index < 0) {
      index = 4;
    }
    slide[index].classList.add("active");
    console.log(index);
  });
  rightButtonSlide.addEventListener("click", () => {
    slide[index].classList.remove("active");
    index += 1;
    if (index >= slideLength) {
      index = 0;
    }
    slide[index].classList.add("active");
    console.log(index);
  });
}

slideshow();

const menuButton = document.querySelector(".menuOpen");
const menu = document.querySelector(".menuItems");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
