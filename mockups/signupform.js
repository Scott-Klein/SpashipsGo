Vue.component('sign-up', {
    template: 
    `
    <div class="sign-up">
    <p></p>
        <div>
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
                        <label class="label">Password:</label>
                        <input type="password" class="input" name="name">
                    </div>

                <!-- submit button -->
                    <div class="field has-text-right">
                        <button type="submit" class="button is-danger">Register</button>
                    </div>
                </form>
        </div>
    </div>
    `,
    methods: {
        onSubmit() {
        }
    }



})


