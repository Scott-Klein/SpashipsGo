Vue.component('building-star', {
    template:
        `   
        <div>
            <div class="center">
                <h1>Universe</h1>
            </div> 
            <div class="box">
                <ul class="planetList">
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
                { number: '1' },
                { number: '2' },
                { number: '3' },
                { number: '4' },
                { number: '5' },
                { number: '6' },
            ]
        }
    }
})


Vue.component('planet', {
    props: {
        planetList: String
    },
    template: `
        <div>
            <img :src=planetIcon>
        </div>
    `,
    computed: {
        planetIcon() {
            return "vueComponents/starMap/planetImages/" + this.planetList + ".svg";
        }
    }
})