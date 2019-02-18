Vue.component('graphic-view', {
    props: {
        selectedGraphic: String
    },

    template:
        `
            <div>
                <div v-for="number in [currentNumber]" :key='number'>
                <img :src="currentImage" v-on:mouseover="stopRotation" v-on:mouseout="startRotation" width = "1200" height = "506" />   
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
            if(this.selectedGraphic == "overview") {
                if(this.currentNumber == 0)
                    {
                        this.currentNumber = 1;
                    }
                else {
                    this.currentNumber = 0;
                }
            }

            else if(this.selectedGraphic == "building") {
                if(this.currentNumber == 2)
                    {
                        this.currentNumber = 3;
                    }
                else {
                    this.currentNumber = 2;
                }
            }

            else if(this.selectedGraphic == "research") {
                if(this.currentNumber == 4)
                    {
                        this.currentNumber = 5;
                    }
                else {
                    this.currentNumber = 4;
                }
            }

            else if(this.selectedGraphic == "fleet") {
                if(this.currentNumber == 6)
                    {
                        this.currentNumber = 7;
                    }
                else {
                    this.currentNumber = 6;
                }
            }

            else if(this.selectedGraphic == "star") {
                if(this.currentNumber == 8)
                    {
                        this.currentNumber = 9;
                    }
                else {
                    this.currentNumber = 8;
                }
            };
        }
    },

    computed: {
        showOverview() {
            if(this.selectedGraphic == "overview"){
                return true;
            }
            else {
                return false;
            }
        },

        showBuilding() {
            if(this.selectedGraphic == "building") {
                return true;
            }
            else {
                return false;
            }
        },

        showResearch() {
            if(this.selectedGraphic == "research") {
                return true;
            }
            else {
                return false;
            }
        },

        showFleet() {
            if(this.selectedGraphic == "fleet") {
                return true;
            }
            else {
                return false;
            }
        },

        showStar() {
            if(this.selectedGraphic == "star") {
                return true;
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
