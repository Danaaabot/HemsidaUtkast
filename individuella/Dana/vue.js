// component är metoden inom vue objektet som tillåter oss att att skapa en ny instanvs av objektet component
Vue.component('projektkomponent', {
    template: ` 
        <div v-for="projekt in danasprojekt" :key="projekt.id">
            <p>{{ projekt.titel }}</p>
            <p>{{ projekt.beskrivning }}</p>
            <p>{{ projekt.kund }}</p>
            <p>{{ projekt.ar }}</p>
        </div>
    `,
    // data är en inbyggd metod i komponent-objektet som alltid ska returnera minst ett värde
    data() {
        return {
            danasprojekt: [] 
        };
    },
    created() {
        
        fetch('projektdata.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Något gick fel!'); 
                }
                return response.json(); 
            })
            .then(data => {
                this.danasprojekt = data; 
            })
            .catch(error => {
                console.error('Fel:', error); 
            });
    }
});

// Skapar en Vue-instans så ovanstående component defintion funkar
new Vue({
    el: '#minaprojekt' 
});
