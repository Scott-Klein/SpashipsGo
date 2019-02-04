Vue.component('building', {
    props: {
        buildingType: String
    },
    template:`
    <div>
        <div class="buildingImage"><img :src=iconPath alt="Building Icon"></div>
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
            return buildingType;
        },
        iconPath(){
            return vueComponents/buildcomponents/icons/ + buildingType + ".svg";
        }
    }
}
)