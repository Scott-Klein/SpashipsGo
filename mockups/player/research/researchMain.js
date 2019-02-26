var main = new Vue({
    el: '#main',
    data() {
        return {
            viewQuest: ""
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