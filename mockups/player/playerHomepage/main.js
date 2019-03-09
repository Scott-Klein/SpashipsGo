var app = new Vue({
    el: '#playerHomepage',
    data() {
        return {
            viewSelection: "fleet",
            viewQuest: "",
        }
    },
    methods: {
        viewOverview(){
            this.viewSelection = "overview";
        },
        viewBuildings(){
            this.viewSelection = "building";
        },
        viewResearch(){
            this.viewSelection = "research";
        },
        viewFleet(){
            this.viewSelection = "fleet";
        },
        viewStars(){
            this.viewSelection = "star"
        },
        view_quest1_no1() {
            this.viewQuest = "quest1_no1"
        },
        view_quest1_no2() {
            this.viewQuest = "quest1_no2"
        },
        view_quest2_no1() {
            this.viewQuest = "quest2_no1"
        },
        view_quest3_no1() {
            this.viewQuest = "quest3_no1"
        }
    }
})
