var graphicHomepage = new Vue({
    el: 'graphic-slider',
    data: {
        images: [
            'https://i.imgur.com/950KYZv.jpg', 'https://i.imgur.com/ZMI6qRr.jpg',
            'https://i.imgur.com/zm483ue.jpg', 'https://i.imgur.com/pDvrHsF.jpg',
            'https://i.imgur.com/LFKA90bb.jpg', 'https://i.imgur.com/K0mzZdjb.jpg',
            'https://i.imgur.com/3aejBPkb.jpg', 'https://i.imgur.com/FfA5nfeb.jpg',
            'https://i.imgur.com/6goU73ub.jpg', 'https://i.imgur.com/CcHpSOW.jpg'
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
        }
    },

    computed: {
        currentImage: function() {
            return this.images[Math.abs(this.currentNumber) % this.images.length]
        }
    }
}
)