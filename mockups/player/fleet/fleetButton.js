Vue.component('fleet-btn-toggle', {
    template: `
        <div id="btn-toggle">
            <input type="button" class="btn-fleet1" name="" @onClick="showRegularFleet()">
            <input type="button" class="btn-fleet2" name="" @onClick="showColonisedFleet()">
        </div>
    `,
    methods: {
        showRegularFleet() {
            this.$emit('show_regular_fleet')
        },
        showColonisedFleet() {
            this.$emit('show_colonised_fleet')
        }
    }

})