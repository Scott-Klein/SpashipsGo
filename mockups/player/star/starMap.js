Vue.component('building-star', {
    template:
        `   
        <div>
           <div class="box">
                <ul class="planetDisplay">
                    <li v-for="planet in planets">
                        <planet :planetList="planet.number"></planet>
                    </li>
                </ul>                
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
                { number: 6 }
            ],
        }
    },
    
})


 Vue.component('planet', {
    props: {
        planetList: Number
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
            return "star/planetImages/" + this.planetList + ".svg";
        }
    }
})


Vue.component('building-system', {
    template: `
        <div>
        <div class="center">
                <h1>Universe</h1>
        </div> 
        <div id="planetSystem">
            <div v-for="system in systems" @addnewsystem="addNewSystem">
                <building-star></building-star>
            </div>
        </div>
        </div>
    `,
    data() {
        return {
            systems: [
                { id: 1, planets: [   { number: 1 },
                                      { number: 2 },
                                      { number: 3 },
                                      { number: 4 },
                                      { number: 5 },
                                      { number: 6 }, ]
                },
                { id: 2, planets: [    { number: 7 },
                                       { number: 8 },
                                       { number: 9 },
                                       { number: 10 },
                                       { number: 11 },
]
                }  
            ],
        }
    },
    prop: {
        system: Object,
        nextSystemId: Number,
        planetList: Number
    },
    methods: {
        addNewSystem: function() {
            if(planets.length > 6) {
                this.systems.push({
                    id: this.nextSystemId++
                })
            }
        }
    }
})



