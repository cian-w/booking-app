<template>
  <div class="wrapper">
    <div class="form-signin form" v-bind:class="{hideMenu: menuHidden}">
      <div class="login-form" v-if="loggedIn === false">
        <h3 class="form-signin-heading">Please login</h3>
        <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus="" />
        <br><br>
        <input type="password" class="form-control password" name="password" placeholder="Password" required=""/>
        <br><br>
        <button class="btn btn-success login-btn">Login</button>
      </div>

      <div class="menu" v-if="loggedIn === true">
        <ul>
          <li>Book a Pitch</li>
          <li>My Account</li>
        </ul>
      </div>
    </div>
    <div class="login-toggle" v-bind:class="{hideToggle: menuHidden}" v-on:click="toggleMenu">
      <img class="toggle-icon" src="../../images/menu.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        menuHidden: true,
        username: '',
        password: '',
        loggedIn: false
      }
    },
    methods: {
      login() {

      },

      toggleMenu() {
        if (this.menuHidden) {
          this.menuHidden = false;
        } else {
          this.menuHidden = true;
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
  color: #4646e0;
  height: 200px;
  border: 2px solid #4646e0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 100;
  background-color: white;
  -webkit-transition: all 0.5s ease-out;
  z-index: 100;
}

.form-control {
  position: relative;
  left: 20px;
  width: 250px;
}

.password {
  position: relative;
  top: -30px;
}

.hideToggle {
  right: 0;
  -webkit-transition: all 0.5s ease-out;
}

.hideMenu {
  right: -305px;
  -webkit-transition: all 0.5s ease-out;
}

.login-btn {
  position: relative;
  top: -65px;
}

.toggle-icon {
   margin: 15px;
   height: 30px;
   width: 30px;
 }

 ul {
   list-style-type: none;
   font-size: 20px;
   font-weight: bold;
 }

 .menu {
   position: relative;
   top: 30px;
   left: -20px;
   color: #4646e0;
 }

 .btn {
   cursor: pointer;
 }

</style>
