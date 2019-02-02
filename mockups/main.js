
/*This component is used to login.
It returns nothing and fires no events
*/
Vue.component('login-form', {
    template: `
    <div class="loginform">
          <p>Username</p>
          <p>Password</p>              
    </div>
    `
})


var app = new Vue({
    el: '#app'
})