var graphicHomepage = new Vue({
    el: 'graphic-slider',
    data: {
        images: [

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