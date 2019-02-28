

Vue.component('hex-row',
    {
        props: ['rowData'],
        template:
            `
            <div>
                <ul class="hexList">
                    <li class="hexItem" v-for="hexTile in this.rowData">
                        <img :src="getHexDirectory(hexTile)" />
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
        methods: {
            styles(index) {
                console.log(index);
                var result = "position: relative;"
                if(index != 0)
                {
                    result += "bottom: " + (index *22) + "px; ";
                    if(index % 2 == 1) // if row is odd
                    {
                        result += "left: 31px;";
                    }
                }
                return result;
            }
        },
        template:
            `
        <div class="hexMapRoot">
            <ul class="hexList">
                <li class="hexRow" v-for="(row, index) in this.map">
                    <hex-row :id="['hexRow' + index]" :rowData=row :style="styles(index)" ></hex-row>
                </li>
            </ul>
        </div>
    `,
        data() {
            return {
                map: [ //dummy data to be provided by api later.
                    ["oreHex", "desertHex", "waterHex", "waterHex", "waterHex", "waterHex", "woodHex"],
                    ["oreHex", "desertHex", "clayHex", "sheepHex", "waterHex", "wheatHex", "woodHex"],
                    ["oreHex", "desertHex", "waterHex", "waterHex", "waterHex", "waterHex", "woodHex"],
                    ["oreHex", "desertHex", "clayHex", "sheepHex", "waterHex", "wheatHex", "woodHex"],
                    ["oreHex", "desertHex", "waterHex", "waterHex", "waterHex", "waterHex", "woodHex"],
                    ["oreHex", "desertHex", "clayHex", "sheepHex", "waterHex", "wheatHex", "woodHex"],
                    ["oreHex", "desertHex", "waterHex", "waterHex", "waterHex", "waterHex", "woodHex"],
                    ["oreHex", "desertHex", "clayHex", "sheepHex", "waterHex", "wheatHex", "woodHex"],
                ]
            }
        }
    }
)

Vue.component('graphic-view', {
    props: {
        selectedView: String
    },
    template:
        `
        <div>

            <div id="overviewGrahpic" class="grahpicPanel" v-show="showOverview">
                <p> Overview grahpics here</p>
            </div>

            <div id="buidlingGrahpic" class="grahpicPanel" v-show="showBuilding">
                <hex-map></hex-map>
            </div>

            <div id="researchGrahpic" class="grahpicPanel" v-show="showResearch">
            <p> Research grahpics here</p>
            </div>

            <div id="fleetGrahpic" class="grahpicPanel" v-show="showFleet">
            <p> Fleet grahpics here</p>
            </div>

            <div id="StarGrahpic" class="grahpicPanel" v-show="showStar">
            <p> Star grahpics here</p>
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

