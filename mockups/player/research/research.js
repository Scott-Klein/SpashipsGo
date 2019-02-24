Vue.component('research-box', {
    props: {
        researchName: {
            type: String,
            required: true
        },
        fieldId: {
            type: String,
            required: true
        },
        viewQuest: String
    },
    template: `
        <div>
            <button class="research-box" v-bind:for="fieldId"> {{researchName}} </button>
        </div>
    
    `,
})

Vue.component('researching', {
    template: `
        <div>
            <research-box @click.native="questNo1" research-name="Quest 1" field-id="quest no1" v-show="quest1"> </research-box>
            <research-box @click.native="questNo2" research-name="Quest 2" field-id="quest no2" v-show="quest2"> </research-box>
            <research-box @click.native="questNo3" research-name="Quest 3" field-id="quest no3" v-show="quest3"> </research-box>
            <research-box @click.native="questNo4" research-name="Quest 4" field-id="quest no4" v-show="quest4"> </research-box>
            <research-box @click.native="questNo5" research-name="Quest 5" field-id="quest no5" v-show="quest5"> </research-box>
            <research-box @click.native="questNo6" research-name="Quest 6" field-id="quest no6" v-show="quest6"> </research-box>
        </div>
    `,
    data() {
        return {
            quest1: true,
            quest2: false,
            quest3: true,
            quest4: false,
            quest5: true,
            quest6: false,
        }
    },
    methods: {
        questNo1() {
            this.quest2= true;
        },
        questNo3() {
            this.quest4= true;
        },
        questNo5() {
            this.quest6= true;
        },
        questNo2() {
            this.viewQuest = "questNumber2"
        },
        questNo4() {
            this.viewQuest = "questNumber4"
        },
        questNo6() {

        }
    }
})