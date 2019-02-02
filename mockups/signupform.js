Vue.component('sign-up', {
    template: 
    `
    <div class="sign-up">
    <p></p>
    <button @click="signUp">Sign Up</button>
        <div v-show="signUpClicked">
            <!-- our signup form ===================== -->
            <form id="signup-form" @submit.prevent="onSubmit">
      
                <!-- user name -->
                    <div class="field">
                        <label class="label">User name:</label>
                        <input type="text" class="input" name="name">
                    </div>

                <!-- email -->
                    <div class="field">
                    <label class="label">Email:</label>
                    <input type="email" class="input" name="email">
                    </div>

                <!-- password -->
                    <div class="field">
                        <lable class="label">Password:</lable>
                        <input type="password" class="input" name="name">
                    </div>

                <!-- submit button -->
                    <div class="field has-text-right">
                    <button type="submit" class="button is-danger">Submit</button>
                    </div>
                </form>
        </div>
    `,
    data() {
        return {
            signUpClicked: false
        }
    },
    methods: {
        signUp() {
            this.signUpClicked = true;
        },
        onSubmit() {
            
        }

    }



})


