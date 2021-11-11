const app = new Vue({

    el: '#app',

    data:{
        images:['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg'],
        
        // inizializzo il counter con cui attivo le foto
        counter: 0
    },

    mounted(){

        // azione per far partire automaticamente la funzione "nextSlide ogni 1,5 secondi" 
        setInterval(() => {
            this.nextSlide();
        }, 1500)
    },

    methods:{

        nextSlide(){
            this.counter++;
            if(this.counter > this.images.length -1){
                this.counter = 0;
            }
        },

        prevSlide(){
            this.counter--;
            if(this.counter < 0){
                this.counter = this.images.length -1;
            }
        }

    }

    



})