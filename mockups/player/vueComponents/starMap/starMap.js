Vue.component('building-star', {
    template:
        `   
        <div>
            <div class="center">
                <h1>Universe</h1>
            </div> 
            
           <div class="box">
                <ul class="planetDisplay">
                    <li v-for="planet in planets">
                        <planet :planetList="planets.number"></planet>
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
                { number: 6 },
                { number: 7 },
            ],
        }
    },
    
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


Vue.component('building-system', {
    template: `
        <div id="planetSystem">
            <div v-for="system in systems" @addnewsystem="addNewSystem">
                <building-star></building-star>
            </div>
        </div>
    `,
    data() {
        return {
            systems: [
                { id: 1 }
            ],
            nextSystemId: 1
        }
    },
    prop: {
        system: Object;
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



