var app = new Vue({
    el: '#researchQuest',
    data() {
        return {
            viewQuest: "questNumber2"
        }
    },
    methods: {
        questNo2() {
            this.viewQuest = "questNumber2"
        },
        questNo4() {
            this.viewQuest = "questNumber4"
        }
    }
})
