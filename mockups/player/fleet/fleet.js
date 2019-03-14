Vue.component('fleet-graphic', {
    template: `
        <div id="btn-fleet">
            <div id="btn-toggle" class="display-btn">
                <toggle-view @show_regular_fleet="displayFleet"
                             @show_colonised_fleet="colonisedFleet">
                </toggle-view>
            </div>

            <hr>
            
            <div>
                <div class="fleetDisplay" v-show="display">
                    <p> Displat fleet here </p>
                </div>

                <div class="fleetColonised" v-show="colonised">
                    <p> Show colonised fleet here </p>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            display: true,
            colonised: false,
        }
    },
    // methods to navigate between 2 buttons (display normal fleet or colonised fleet)
    methods: {
        displayFleet() {
            this.display = true;
            this.colonised = false;
        },
        colonisedFleet() {
            this.display = false;
            this.colonised = true;
        }
    },
})