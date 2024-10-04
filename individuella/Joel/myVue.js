const app = Vue.createApp({
    data() {
        return {
            projects: [],
            currentProject: 1
        }
    },
    methods: {
        fetchData() {
            fetch("./myData.json")
                .then(async response =>
                    this.projects = await response.json()

                )
                .catch(error => {
                    console.log(error);
                    this.errorMessage = console.log(error);
                }

                );
        }, previosProject() {
            this.currentProject = this.currentProject === 1 ? this.projects.length : this.currentProject - 1;

        }, nextProject() {
            this.currentProject = this.currentProject === this.projects.length ? 1 : this.currentProject + 1;

        }
    },
    mounted() {
        this.fetchData();
    }
});
app.mount('#myProjects');