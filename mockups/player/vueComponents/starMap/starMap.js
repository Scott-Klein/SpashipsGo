Vue.component('building-star', {
    template:
        `   
        <div>
            <div class="center">
                <h1>Universe</h1>
            </div> 
            
            <div id="planetSystem">
                <div class="box">
                    <template
                            is="building-planet"
                            v-for="system in systems"
                            v-bind:key="system.id"
                    >
                        <ul>
                            <li v-for="planet in planets">
                                <planet :planetList="planets.number"></planet>
                            </li>
                        </ul>
                    </template>
                </div>
            </div>
        </div>
              
        `,
    data() {
        return {
            planets: [
                { number: 1 },
                { number: 2 },
                { number: 3 },
                { number: 4 },
                { number: 5 },
                { number: 6 },
            ],
            systems: [
                { id: 1 }
            ],
            nextSystemId: 1,
        }
    },
    methods: {
        add_new_system: function() {
            if(planets.length > 6) {
                this.systems.push({
                    id = this.nextSystemId++
                });
                // planet.length = planet.length % 6;
            }
        }
    }
})


Vue.component('planet', {
    props: {
        planetList: String
    },
    template: `
        <div>
            <div>
                   <img class="buildingImage" :src=planetIcon>
            </div>
        </div>
    `,
    computed: {
        planetIcon() {
            return "vueComponents/starMap/planetImages/" + this.planetList + ".svg";
        }
    }
})


/* Vue.component(building-planet, {
    template: `\
        <li>\ 
            {{ number }}\
        </li>/
    `,
    props: ['number']
})



new Vue ({
    el: '#planetSystem',
    data: {
        systems: [
            { id: 1},
        ],
        nextSystemId = 2
    },
    methods: {
        add_new_system: function() {
            if(planet.length > 6) {
                this.systems.push({
                    id = this.nextSystemId++
                });
                planet.length = planet.length % 6;
            }
        }
    }


}) */



