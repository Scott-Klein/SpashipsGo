Vue.component('btn-style', {
    props: [
        'title'
    ],
    template: `
        <div>
            <a href="#" class="btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div>{{title}}</div>
            </a>
        </div>
    `,
    data() {
        return {
            testing: false
        }
    }

})