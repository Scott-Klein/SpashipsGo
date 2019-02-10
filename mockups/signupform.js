Vue.component('sign-up', {
    template: 
    `
    <div>
        <div>
            <!-- our signup form ===================== -->
            <form class="box" @submit.prevent="onSubmit" method="post">
                <h1>Sign up</h1>
                <input type="text" name="" placeholder="User name">
                <input type="email" name="" placeholder="Email">
                <input type="password" name="" placeholder="Password">
                <input type="Submit" name="" value="Sign up">
            </form>
        </div>
    </div>
    `,
    methods: {
        onSubmit() {
        }
    }



})


