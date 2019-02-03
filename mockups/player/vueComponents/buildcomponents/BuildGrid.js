Vue.component('build-grid',{
    template: 
    `
        <div>
            <ul>
                <li v-for="building in buildings">
                    <building></building>
                </li>
            </ul>
        </div>
    `,
    Data() {
        return {

        }
    }
}
)