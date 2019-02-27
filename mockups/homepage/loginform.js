Vue.component('login-form', {
    template: 
    `
    <div>
        <div>
            <!-- our sign in form -->
                
            <form class="box" @submit.prevent="onSubmit" method="post">
                <h1>Sign in</h1>
                <input type="text" name="" placeholder="User name">
                <input type="password" name="" placeholder="Password">
                <btn-style title="Sign in"></btn-style>
            </form>
        </div>
    </div>
    `,
    data() {
        return {
            LogInClicked: false
        }
    },
    methods: {
        logIn() {
            this.LogInClicked = true;
        },
    }
})
