Vue.component('detail-view', {
    props: {
        selectedView: String
    },
    template:
        `
        <div>

            <div id="overviewDetail" class="detailPanel" v-show="showOverview">
                <h1>overview</h1>
                <ul>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                    <li>overview dummy information.</li>
                </ul>
            </div>

            <div id="buidlingDetail" class="detailPanel" v-show="showBuilding">
                <h1>building</h1>
                <build-queue></build-queue>
                <h2>Construct</h2>
                <build-grid></build-grid>
                <h2>Upgrades</h2>
                <upgrade-grid></upgrade-grid>
                <p>Building level also needs to be displayed with each Icon</p>
            </div>

            <div id="researchDetail" class="detailPanel" v-show="showResearch">
                <div>
                    <h1>research</h1>
                    <research-script @viewQuest1No1="showQuest1No1" 
                                     @viewQuest1No2="showQuest1No2" 
                                     @viewQuest2No1="showQuest2No1"
                                     @viewQuest3No1="showQuest3No1">
                    </research-script>
                </div>
            </div>

            <div id="fleetDetail" class="detailPanel" v-show="showFleet">
                <h1>fleet</h1>
                <p> somewhere to summon and control fleets </p>
                <p> spaceships can be built here </p>
            </div>

            <div id="StarDetail" class="detailPanel" v-show="showStar">
                <h1>star</h1>
                <p> this will be a grid of planets and celestial bodies in grahpical form </p>
                <p> selecting player owned planets will result in that planet becoming focused.</p>
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
    },
    //pass data to root element
    methods: {
        showQuest1No1() {
            this.$emit('quest1_no1')
        },
        showQuest1No2() {
            this.$emit('quest1_no2')
        },
        showQuest2No1() {
            this.$emit('quest2_no1')
        },
        showQuest3No1() {
            this.$emit('quest3_no1')
        }
    }
})