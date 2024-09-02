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
                textEmail: " L'email presa dall'api di Boolean è: ",
                email:'',
                titleEmail: " Lista dei dieci indirizzi email:",
                listEmail: [''],
            };
        },
        created() {    
            for (let i = 0; i < 10; i++){
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (resp) => {
                        console.log('intero oggetto risposta',resp);
                        console.log('risposta API',resp.data);
                        console.log('dato email della risposta API',resp.data.response);

                        this.email = resp.data.response,
                        this.listEmail.push(resp.data.response)
                        console.log(this.listEmail)
                    });
            }
        }

    }).mount('#app');

