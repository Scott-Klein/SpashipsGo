Vue.component('userforms', {
    template: 
    `
    <div>
        <button @click="logIn">Sign in</button>
        <button @click="SignUp">Sign Up</button>

        <sign-up v-show="SignUpClicked"></sign-up>
        <login-form v-show="LoginClicked"></login-form>

    </div>
    `,
    data() {
        return {
            SignUpClicked: false,
            LoginClicked : false,
        }
    },
    methods: {
        logIn() {
            this.LoginClicked = true;
            this.SignUpClicked = false;
        },
        SignUp() {
            this.SignUpClicked = true;
            this.LoginClicked = false;
        }
    }
})
