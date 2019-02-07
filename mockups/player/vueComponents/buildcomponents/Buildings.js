

Vue.component('build-grid',{
    template: 
    `
        <div>
            <ul>
                <li v-for="building in buildings">
                    <building :buildingType="building.type"></building>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            buildings: [
                { id: 1, type: 'Factory' },
                { id: 2, type: 'Steel Mine' },
                { id: 3, type: 'Fuel processor' }
            ]
        }
    }
}
)

Vue.component('building', {
    props: {
        buildingType: String
    },
    template:`
    <div>
        <div class="buildingImage"><img :src=iconPath alt="Building Icon"></div>
        <p> {{iconPath}}</p>
        <div class="buildingName">
            <h4>{{name}}</h4>
        </div>
    </div>
    `,
    data() {
        return {}
    }
    ,
    computed: {
        name() {
            if(buidingType != undefined) {
                return buildingType;
            }
            else {
                return "undefined building."
            }

        },
        iconPath(){
            return "vueComponents/buildcomponents/icons/" + buildingType + ".svg";
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