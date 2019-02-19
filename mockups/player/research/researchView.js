Vue.component('research-system', {
    props: {
        selectedQuest: String
    },
    template: `
        <div>
            <div id="showingQuest2" v-show="quest2">
                Bla bla bla
            </div>

            <div id="showingQuest4" v-show="quest4">
                Ble ble ble
            </div>
        </div>
    `,
    data() {
        return {
            nothing: false,
        }
    },
    computed: {
        quest2() {
            if(this.selectedQuest == questNumber2) {
                 return true
            }
            else {
                return false;
            }
        },
        quest4() {
            if(this.selectedQuest == questNumber4) {
                return true
            }
            else {
                return false;
            }
        }
    }


})