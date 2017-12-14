<template>
  <div class="wrapper">
    <form class="form-signin form" v-bind:class="{hideLogin: loginHidden}">
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <br><br>
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <br><br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
    <div class="login-toggle" v-bind:class="{hideToggle: loginHidden}" v-on:click="toggleMenu">
      <img class="toggle-icon" src="../../images/user.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LoginForm',
    data () {
      return {
        loginHidden: true,
        username: '',
        password: ''
      }
    },
    methods: {
      login() {

      },

      toggleMenu() {
        if (this.loginHidden) {
          this.loginHidden = false;
        } else {
          this.loginHidden = true;
        }
      }
    }
  }
</script>

<style scoped>

.login-toggle {
  position: fixed;
  right: 300px;
  top: 85px;
  height: 60px;
  width: 50px;
  border: 2px solid #4646e0;
  border-right: none;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-out;
  z-index: 100;
}

.form {
  position: fixed;
  right: 0;
  top: 50px;
  width: 300px;
  height: 200px;
  border: 2px solid #4646e0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 100;
  background-color: white;
  -webkit-transition: all 0.5s ease-out;
  z-index: 100;
}

.hideToggle {
  right: 0;
  -webkit-transition: all 0.5s ease-out;
}

.hideLogin {
  right: -305px;
  -webkit-transition: all 0.5s ease-out;
}

.toggle-icon {
   margin: 15px;
   height: 30px;
   width: 30px;
 }

</style>
