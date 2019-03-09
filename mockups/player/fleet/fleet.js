Vue.component('fleet-graphic', {
    props: {
        selectedFleet: String,

    },
    template: `
        <div id="fleet">
            <div>
                <fleet-btn-toggle @show_regular_fleet="displayFleet"
                                  @show_colonised_fleet="colonisedFleet">
                </fleet-btn-toggle>
            </div>

            <div class="fleetDisplay" v-show="showRFleet">
                <p> Bla bla bla </p>
            </div>

            <div class="fleetColonised" v-show="showCFleet">
                <p> Ble ble ble </p>
            </div>
        </div>
    `,
    data() {
        return {
            test: false
        }
    },
    methods: {
        displayFleet() {
            this.selectedFleet = "regularFleet"
        },
        colonisedFleet() {
            this.selectedFleet = "colonisedFleet"
        }
    },
    computed: {
        showRFleet() {
            if(this.selectedFleet == "regularFleet") {
                return true
            }
            else return false
        },
        showCFleet() {
            if(this.selectedFleet == "colonisedFleet") {
                return true
            }
            else return false
        }
    }
})