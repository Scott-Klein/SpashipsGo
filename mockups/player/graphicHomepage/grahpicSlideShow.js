Vue.component('graphic-view', {
    props: {
        selectedGraphic: String
    },

    template:
        `
            <div>
                <div v-for="number in [currentNumber]" :key='number'>
                <img :src="currentImage" v-on:mouseover="stopRotation" v-on:mouseout="startRotation" width = "1200" height = "506" />   
                </div>
                <div id="overviewGraphic" v-show="showOverview">
                </div>
                <div id="buildingGraphic" v-show="showBuilding">
                </div>
                <div id="researchGraphic" v-show="showResearch">
                </div>
                <div id="fleetGraphic" v-show="showFleet">
                </div>
                <div id="starGraphic" v-show="showStar">
                </div>
            </div>
        `,

    data() { return {
        images: [
            'https://i.imgur.com/950KYZv.jpg', 'https://i.imgur.com/ZMI6qRr.jpg',
            'https://i.imgur.com/zm483ue.jpg', 'https://i.imgur.com/pDvrHsF.jpg',
            'https://i.imgur.com/LFKA90bb.jpg', 'https://i.imgur.com/K0mzZdjb.jpg',
            'https://i.imgur.com/3aejBPkb.jpg', 'https://i.imgur.com/FfA5nfeb.jpg',
            'https://i.imgur.com/6goU73ub.jpg', 'https://i.imgur.com/CcHpSOW.jpg'
        ],
        currentNumber: 0,
        timer: null,
    }
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
        showOverview() {
            if(this.selectedGraphic == "overview"){
                this.currentNumber = 0;
                this.currentNumber < 2;
                if(this.currentNumber >= 2) {
                    this.currentNumber = 0
                };
                return this.currentNumber;
            }
            else {
                return false;
            }
        },

        showBuilding() {
            if(this.selectedGraphic == "building") {
                this.currentNumber = 2;
                this.currentNumber < 4;
                if(this.currentNumber >= 4) {
                    this.currentNumber = 2
                };
                return this.currentNumber;
            }
            else {
                return false;
            }
        },

        showResearch() {
            if(this.selectedGraphic == "research") {
                this.currentNumber = 4;
                this.currentNumber < 6;
                if(this.currentNumber >= 6) {
                    this.currentNumber = 4
                };
                return this.currentNumber;
            }
            else {
                return false;
            }
        },

        showFleet() {
            if(this.selectedGraphic == "fleet") {
                this.currentNumber = 6;
                this.currentNumber < 8;
                if(this.currentNumber >= 8) {
                    this.currentNumber = 6
                };
                return this.currentNumber;
            }
            else {
                return false;
            }
        },

        showStar() {
            if(this.selectedGraphic == "star") {
                this.currentNumber = 8;
                this.currentNumber < 10;
                if(this.currentNumber >= 10) {
                    this.currentNumber = 8
                };
                return this.currentNumber;
            }
            else {
                return false;
            }
        },

        currentImage: function() {
            return this.images[Math.abs(this.currentNumber) % this.images.length]
        }
    }
})
