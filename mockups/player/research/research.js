Vue.component('research-box', {
    props: [
        'title',
    ],
    data() {
        return {
            active: false
        }
    },
    template: `
        <div class="research_bar">
            <div class="tab__header">
                <a href="#" class="researchBox" @click.prevent="active = !active">
                    <strong>{{title}}</strong>
                    <span class="down-Arrow" v-show="!active">&#9660;</span>
                    <span class="up-Arrow" v-show="active">&#9650;</span>
                </a>
            </div>
            <div class="tab__content p-2" v-show="active"><slot /></div>
        </div>
    `
})