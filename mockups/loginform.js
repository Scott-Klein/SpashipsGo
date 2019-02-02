Vue.component('login-form', {
    template: 
    `
    <div class="login-form">g
        <div>
            <!-- our sign in form -->
            <form id="loginform">
                
                <!-- user name -->
                    <div class="field">
                        <label class="lable">User name:</label>
                        <input type="text" class="input" name="name">
                    </div>
                
                <!-- password -->
                    <div class="field">
                        <label class="lable">Password:</label>
                        <input type="password" class="input" name="name">
                    </div>
                    <button type="submit" class="button is-danger">Login</button>
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
