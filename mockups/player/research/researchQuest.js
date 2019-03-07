Vue.component('research-script', {
    template: `
    <div id="researchQuest" class="quest">  
        <research-box title="Quest 1">
            <input type="button" value="Finding fuel" class="container" @click="quest1_no1()">     
            </input>
            <input type="button" value="Finding fire" class="container" @click="quest1_no2()">     
            </input>
        </research-box>

        <research-box title="Quest 2">
            <input type="button" value="Finding water" class="container" @click="quest2_no1()">     
            </input>
        </research-box>

        <research-box title="Quest 3">
            <input type="button" value="Finding oil" class="container" @click="quest3_no1()">     
            </input>
        </research-box>
    </div>
    `,
    data() {
        return {
            test: false
        }
    },
    //pass data to detail vue
    methods: {
        quest1_no1() {
            this.$emit('viewQuest1No1')
        },
        quest1_no2() {
            this.$emit('viewQuest1No2')
        },
        quest2_no1() {
            this.$emit('viewQuest2No1')
        },
        quest3_no1() {
            this.$emit('viewQuest3No1')
        }
    }
})

