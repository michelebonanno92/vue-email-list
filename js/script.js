

const { createApp } = Vue ; 
// Destructuring

    createApp({
        data() {
            return {
                message: "Hello Vue!",
                imgSrc: 'https://picsum.photos/200/300'
            };
        }
    }).mount('#app');

