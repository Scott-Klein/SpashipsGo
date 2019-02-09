Vue.component('graphic-view', {
    props: {
        selectedView: String
    },
    template:
        `
        <div>

            <div id="overviewGrahpic" class="grahpicPanel" v-show="showOverview">
                <graphic-slide-show> </graphic-slide-show>
            </div>

            <div id="buidlingGrahpic" class="grahpicPanel" v-show="showBuilding">
                <graphic-slide-show> </graphic-slide-show>
                <hex-map></hex-map>
            </div>

            <div id="researchGrahpic" class="grahpicPanel" v-show="showResearch">
                <graphic-slide-show> </graphic-slide-show>
            </div>

            <div id="fleetGrahpic" class="grahpicPanel" v-show="showFleet">
                <graphic-slide-show> </graphic-slide-show>
            </div>

            <div id="StarGrahpic" class="grahpicPanel" v-show="showStar">
                <graphic-slide-show> </graphic-slide-show>
            </div>
        </div>
        `,
    data() {
        return {
            testVariable: false
        }
    },
    computed: {
        showOverview() {
            if (this.selectedView == "overview") {
                return true;
            }
            else {
                return false;
            }
        },
        showBuilding() {
            if (this.selectedView == "building") {
                return true;
            }
            else {
                return false;
            }
        },
        showResearch() {
            if (this.selectedView == "research") {
                return true;
            }
            else {
                return false;
            }
        },
        showFleet() {
            if (this.selectedView == "fleet") {
                return true;
            }
            else {
                return false;
            }
        },
        showStar() {
            if (this.selectedView == "star") {
                return true;
            }
            else {
                return false;
            }
        }
    }
})


Vue.component('hex-row', 
{
    props: {
        rowData
    },
    template: 
    `
        <div>
            <ul class="hexList">
                <li class="hexItem"><img src="vueComponents/map/oreHex.png"/></li>
                <li class="hexItem"><img src="vueComponents/map/oreHex.png"/></li>
                <li class="hexItem" v-for="hexTile in rowData">
                    <img :src=getHexDirectory(hextTile)/>
                </li>
            </ul>
        </div>
    `,
    methods: {
        getHexDirectory(hexTileName) {
            return "vueComponents/map/" + hexTileName + ".png";
        }
    }
})

Vue.component('hex-map',
{
    template: 
    `
        <div class="hexMapRoot">
            <p>Hello Hex Map</p>

            <hex-row id="hexOneRow" :rowData="mapRow1" ></hex-row>
            <hex-row id="hexTwoRow" :rowData="mapRow2" ></hex-row>
        </div>
    `,
    data() {
        return {
            mapRow1: [
                "oreHex",
                "desertHex",
                "clayHex",
                "sheepHex",
                "waterHex",
                "wheatHex",
                "woodHex"
            ],
            mapRow2: [
                "oreHex",
                "desertHex",
                "clayHex",
                "sheepHex",
                "waterHex",
                "wheatHex",
                "woodHex" 
            ]
        }
    }
}
)

