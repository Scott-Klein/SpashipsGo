

Vue.component('build-grid',{
    template: 
    `
        <div>
            <ul class="buildGrid">
                <li v-for="building in buildings">
                    <building :buildingType="building.type" button="Build"></building>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            buildings: [
                { type: 'Factory' },
                { type: 'Steel Mine' },
                { type: 'Fuel Processor' },
                { type: 'Nanite Factory' },
                { type: 'Crystal Mine' },
                { type: 'Fuel Extractor' },
                { type: 'Energy Array' },
                { type: 'Fusion Reactor' },
                { type: 'Shipyard' },
                { type: 'Research Centre' },
                { type: 'Command Centre' },
                { type: 'Fuel Tank' },
            ]
        }
    }
}
)

Vue.component('upgrade-grid',{
    template: 
    `
        <div>
            <ul class="buildGrid">
                <li v-for="building in buildings">
                    <building :buildingType="building.type" button="Upgrade"></building>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            buildings: [
                { type: 'Factory' },
                { type: 'Steel Mine' },
                { type: 'Fuel Processor' },
                { type: 'Nanite Factory' },
                { type: 'Crystal Mine' },
                { type: 'Fuel Extractor' },
                { type: 'Energy Array' },
                { type: 'Fusion Reactor' },
                { type: 'Shipyard' },
                { type: 'Research Centre' },
                { type: 'Command Centre' },
                { type: 'Fuel Tank' },
            ]
        }
    }
}
)

Vue.component('building', {
    props: {
        buildingType: String,
        button: String
    },
    template:`
    <div class="building">
        <div>
            <img class="buildingImage" :src=iconPath alt="Building Icon">
        </div>
        <div class="buildingName">
            <h4>{{name}}</h4>
        </div>
        <div>
            <p>Description:
                500 Metal
                200 Crystal
                50 Uranium
            </p>
        </div>
        <div class="build-button" @click="beginBuild">
            <p>{{button}}</p>
        </div>

    </div>
    `
    ,
    computed: {
        name(){
            return this.buildingType;
        },
        iconPath(){
            return "vueComponents/buildcomponents/icons/"+ this.buildingType +".svg";
        }
    },
    methods:{
        beginBuild() {
            this.$emit('build-Begin')
        }
    }
}
)

Vue.component('build-queue',
    {
        template: 
        `
            <div class="queue"> 
                <h3>Construction Queue:</h3>
                <div class="queueBox">
                    <ul>
                        <li>Building a mine (20 minutes remaining)</li>
                        <li>Building a factory (not started)</li>
                    </ul>
                </div>
            </div>
        `
    }
)