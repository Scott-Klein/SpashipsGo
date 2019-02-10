Vue.component('login-form', {
    template: 
    `
    <div>
        <div>
            <!-- our sign in form -->
                
            <form class="box" @submit.prevent="onSubmit" method="post">
                <h1>Login</h1>
                <input type="text" name="" placeholder="User name">
                <input type="password" name="" placeholder="Password">
                <input type="submit" name="" value="Login">
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

        }
    }
})
