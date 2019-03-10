Vue.component('fleet-btn-toggle', {
    template: `
        <div class="navigate-btn">
            <input type="button" class="btn-fleet1" name="" v-on:click="showRegularFleet()">
            <input type="button" class="btn-fleet2" name="" v-on:click="showColonisedFleet()">
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