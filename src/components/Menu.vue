<template>
  <div class="wrapper">
    <div class="form-signin form" v-bind:class="{hideMenu: menuHidden}">
      <div class="login-form" v-if="loggedIn === false">
        <h3 class="form-signin-heading">Please login</h3>
        <input type="text" class="form-control" name="username" v-model="username" placeholder="Username" required="" autofocus="" />
        <br><br>
        <input type="password" class="form-control password" name="password" v-model="password" placeholder="Password" required=""/>
        <br><br>
        <button class="btn btn-success login-btn" v-on:click="login">Login</button>
      </div>

      <div class="menu" v-if="loggedIn === true">
        <ul>
          <li><router-link class="navbar-brand" to="/">Calendar</router-link></li>
          <li><router-link class="navbar-brand" to="/book">Book a Pitch</router-link></li>
          <li><router-link class="navbar-brand" to="/account">My Account</router-link></li>
        </ul>
      </div>
    </div>
    <div class="login-toggle" v-bind:class="{hideToggle: menuHidden}" v-on:click="toggleMenu">
      <img class="toggle-icon" src="../../images/menu.png">
    </div>
  </div>
</template>

<script>
  import endpoints from '../Endpoints.js'

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

      // Attempt to log user in
      login() {
        var userDetails = {
          username: this.username,
          password: this.password
        }

        fetch(endpoints.usersApi + `/login`,{
           method: 'POST',
           headers: {
             'Content-Type': 'application/x-www-form-urlencoded'
           },
           body: JSON.stringify(userDetails)
         }).then((response) => {
           // If we get a status 200 - log user in to app
           if(response.status == '200'){
             this.loggedIn = true;
             localStorage.setItem("session", this.username);
           }
         });
      },

      // Toggle side menu
      toggleMenu() {
        if (this.menuHidden) {
          this.menuHidden = false;
        } else {
          this.menuHidden = true;
        }
      }
    },

    // This function runs when this component is executed and holds a listener
    created () {
      this.$bus.$on('loggedOut', () => {
        this.loggedIn = false;
      })
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
  border: 2px solid #3d7fe2;
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
  color: #3d7fe2;
  height: 200px;
  border: 2px solid #3d7fe2;
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
   color: #3d7fe2;
 }

 .btn {
   cursor: pointer;
 }

</style>
