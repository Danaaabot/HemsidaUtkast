const slideshow = Vue.createApp({
    data() {
      return {
        projects: [],
        projectIndex: 1,
      };
    },
    methods: {

      goBack () {
        history.back()
      },
      
      nextProject() {
        if (this.projectIndex >= this.projects.length) {
          this.projectIndex = 1;
          
        } else {

          this.projectIndex++;
        }
      },
  
      
      previousProject() {
        
        if (this.projectIndex > 1) {
          this.projectIndex = this.projectIndex - 1;
        } 
        else {
          this.projectIndex = this.projects.length;
        }
      },
    },
    async mounted() {
      try {
        
        const response = await fetch("data.json");
        const data = await response.json();
  
        this.projects = data;
      } catch (error) {
        console.error("Lyckades inte ladda in projekt", error);
      }
    },
  });
  slideshow.mount(".slideshow");

   const menuButton = document.querySelector(".menyknapp");
   const menu = document.querySelector(".huvudmeny");

   menuButton.addEventListener("click", () => {
   menu.classList.toggle("active");});