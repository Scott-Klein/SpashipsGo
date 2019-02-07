var app = new Vue({
    el: '#app',
    data: {
        isHidden:true,
        viewSelection: "building"
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
        }
    }
    
})
