const slideshow = Vue.createApp({
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
      const response = await fetch("./ta.json");
      const data = await response.json();

      this.projects = data;
    } catch (error) {
      console.error("Lyckades inte ladda in projekt", error);
    }
  },
});
slideshow.mount(".slideshow");
