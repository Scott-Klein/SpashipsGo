var app = new Vue({
    el: '#playerHomepage',
    data: {
        isHidden:true,
        viewSelection: "research"
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
