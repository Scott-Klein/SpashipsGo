Vue.component('research-box', {
    template: `
        <div>
            <button class="btn btn-quest1" @click="questNo1">Quest 1</button>
            <button class="btn btn-quest2" @click="questNo2" v-show="quest2">Quest 2</button>
            <button class="btn btn-quest3" @click="questNo3">Quest 3</button>
            <button class="btn btn-quest4" @click="questNo4" v-show="quest4">Quest 4</button>
        </div>
    `




})