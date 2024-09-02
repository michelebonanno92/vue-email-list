/* 
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
 */
const { createApp } = Vue ; 


    createApp({
        data() {
            return {
                email:'',
                
            };
        },
        created() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (resp) => {
                this.email = resp.data.response })
        }

    }).mount('#app');

