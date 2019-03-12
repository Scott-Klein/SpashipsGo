Vue.component('toggle-view', {
    template: `
            <div class="btn-container">
                <div class="more">
                    <button id="more-btn" class="more-btn" v-on:click="showMenu">
                        <span class="more-dot"></span>
                        <span class="more-dot"></span>
                        <span class="more-dot"></span>
                    </button>
                    <div class="more-menu">
                        <div class="more-menu-caret">
                            <div class="more-menu-caret-outer"></div>
                            <div class="more-menu-caret-inner"></div>
                        </div>
                        <ul class="more-menu-items" tabindex="-1" role="menu" aria-labelledby="more-btn" aria-hidden="true">
                            <li class="more-menu-item" role="presentation">
                                <input type="button" class="btn-fleet1" name="" v-on:click="showRegularFleet()" @click="hideMenu">
                            </li>
                            <li class="more-menu-item" role="presentation">
                            <input type="button" class="btn-fleet2" name="" v-on:click="showColonisedFleet()" @click="hideMenu">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    `,
    data() {
        return {
            visible: false,
        }
    },
    methods: {
        showMenu() {
            let el = document.querySelector('.more');
            let menu = el.querySelector('.more-menu');
            if (!this.visible) {
                this.visible = true;
                el.classList.add('show-more-menu');
                menu.setAttribute('aria-hidden', false);
            }
            else if(this.visible) {
                this.visible = false;
                el.classList.remove('show-more-menu');
                menu.setAttribute('aria-hidden', true);
            }
        },
        
        hideMenu() {
            let el = document.querySelector('.more');
            let menu = el.querySelector('.more-menu');
            if (this.visible) {
                this.visible = false;
                el.classList.remove('show-more-menu');
                menu.setAttribute('aria-hidden', true);
            }
        },

        showRegularFleet() {
            this.$emit('show_regular_fleet')
        },
        
        showColonisedFleet() {
            this.$emit('show_colonised_fleet')
        }
    }
})