Vue.component('build-grid',{
    template: 
    `
        <div>
            <building></building>
            <ul>
                <li v-for="building in buildings">
                    <building buildingType="Factory"></building>
                </li>
            </ul>
        </div>
    `,
    Data() {
        return {
            buildings
        }
    }
}
)