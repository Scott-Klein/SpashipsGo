Vue.component('login-form', {
    template: `
    <div class="loginform">
        
        <!-- our sign in form -->
        <form id=""loginform>
            <!-- user name -->
                <div class="field">
                    <label class="lable">User name:</lable>
                    <input type="text" class="input" name="name">
                </div>
                
            <!-- password -->
                <div class="field">
                    <lable class="lable">Password:</lable>
                    <input type="password" class="input" name="name">
                </div>
        </form>
    </div>
    `
})
