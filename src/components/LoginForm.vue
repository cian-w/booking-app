<template>
  <div class="wrapper" v-bind:class="{hideLogin: loginHidden}">
    <form class="form-signin">
      <h2 class="form-signin-heading">Please login</h2>
      <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
      <br><br>
      <input type="password" class="form-control" name="password" placeholder="Password" required=""/>
      <br><br>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
    <div class="login-toggle" v-bind:class="{hideToggle: loginHidden}" v-on:click="toggleMenu">
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
  top: 70px;
  height: 60px;
  width: 60px;
  border: 1px solid grey;
  background-color: white;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-out;
  z-index: 100;
}

.btn {
  cursor: pointer;
}

.wrapper {
  position: fixed;
  right: 0;
  width: 300px;
  height: 200px;
  border: 1px solid grey;
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
  top: -400px;
  -webkit-transition: all 0.5s ease-out;
}

</style>
