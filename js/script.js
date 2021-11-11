const app = new Vue({

    el: '#app',

    data:{
    
        images:[
            {
                url:'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit',
            },
            {
                url:'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum, dolor'
            },
            {
                url:'img/03.jpg',
                title: 'Gran Bretagna',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                url:'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum,'
            },
            {
                url:'img/05.jpg',
                title: 'Paradise',
                text: 'magnam dolores dolorum corporis.'
            },
    ],

        // thumbs:[],
        // inizializzo il counter con cui attivo le foto
        counter: 0,
        indice: 0,

        isActive: false
    },

    mounted(){

        // azione per far partire automaticamente la funzione "nextSlide ogni 1,5 secondi" 
        setInterval(() => {
            this.nextSlide();
        }, 15000)

    },

    methods:{

        nextSlide(){
            this.counter++;
            this.indice++;

            console.log(this.counter);
            console.log(this.indice);

            // this.isActive = true;

            if(this.counter > this.images.length -1){
                this.counter = 0;
            }

            if(this.indice > this.images.length -1){
                this.indice = 0;
            }
        },

        prevSlide(){
            this.counter--;
            this.indice--;

            console.log(this.counter);
            console.log(this.indice);

            // this.isActive = true;

            if(this.counter < 0){
                this.counter = this.images.length -1;
            }

            if(this.indice < 0){
                this.indice = this.images.length -1;
            }

        },

        checkActive(){
            if(this.indice == this.counter){
           

            }
            
        }
        
    }

})

// funzione per aggiungere bordo bianco alla foto

    
