Vue.component('research-script', {
    template: `
    <div id="researchQuest" class="quest">  
        <research-box title="Quest 1">
            <input type="button" value="Finding fuel" class="container" onClick="quest1_no1()">     
            </input>
            <input type="button" value="Finding fire" class="container" onClick="quest1_no2()" >     
            </input>
        </research-box>

        <research-box title="Quest 2">
            <input type="button" value="Finding water" class="container" onClick="quest2_no1()">     
            </input>
        </research-box>

        <research-box title="Quest 3">
            <input type="button" value="Finding oil" class="container" onClick="quest3_no1()">     
            </input>
        </research-box>
    </div>
    `,
    data() {
        return {
            viewQuest: "quest1_no1"
        }
    },
    methods: {
        quest1_no1() {
            this.viewQuest = "quest1_no1"
        },
        quest1_no2() {
            this.viewQuest = "quest1_no2"
        },
        quest2_no1() {
            this.viewQuest = "quest2_no1"
        },
        quest3_no1() {
            this.viewQuest = "quest3_no1"
        }
    }
})

