var graphicHomepage = new Vue({
    el: 'graphic-slider',
    data: {
        images: [
            'https://i.imgur.com/950KYZv.jpg', 'https://i.imgur.com/ZMI6qRr.jpg',
            'https://i.imgur.com/zm483ue.jpg', 'https://i.imgur.com/pDvrHsF.jpg'
        ],
        currentNumber: 0,
        timer: null,
    },

    mounted: function(){
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
        },
        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        }, 
        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -=1
        }
    },

    computed: {
        currentImage: function() {
            return this.images[Math.abs(this.currentNumber) % this.images.length]
        }
    }
}
)