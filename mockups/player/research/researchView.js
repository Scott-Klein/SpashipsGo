Vue.component('research-graphic', {
    props: {
        selectedQuest: String,
    },
    template: `
        <div>
            <div id="showing_quest1_no1" class="" v-show="show_quest1_no1">
                Script quest 1 no1
            </div>
            <div id="showing_quest1_no2" class="" v-show="show_quest1_no2">
                Script quest1 no2
            </div>
            <div id="showing_quest2_no1" class="" v-show="show_quest2_no1">
                Script quest2 no1
            </div>
            <div id="showing_quest3_no1" class="" v-show="show_quest3_no1">
                Script quest3 no1
            </div>
        </div>
    `,
    data() {
        return {
            test: false,
        }
    },
    computed: {
        show_quest1_no1() {
            if(this.selectedQuest == "quest1_no1") {
                return true
            }
            else return false
        },
        show_quest1_no2() {
            if(this.selectedQuest == "quest1_no2") {
                return true
            }
            else return false
        },
        show_quest2_no1() {
            if(this.selectedQuest == "quest2_no1") {
                return true
            }
            else return false
        },
        show_quest3_no1() {
            if(this.selectedQuest == "quest3_no1") {
                return true
            }
            else return false
        }
    }
})