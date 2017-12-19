<template>
  <div class="account">
    <div class="account-msg">
      Welcome to your account,
    </div>
    <center>
      <div class="upload" v-if="isAdmin">
        <p class="username">Admin</p>
        <br>
        <button class="btn btn-danger logout" v-on:click="logout">Logout</button>

        <br><br>
        Here's some bookings you can manage.
        <br><br>
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Pitch</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders">
              <td>{{ order.date }}</td>
              <td>&euro;{{ order.price }}</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="upload" v-else>
        <p class="username">User</p>
        <br>
        <button class="btn btn-danger logout" v-on:click="logout">Logout</button>
        <br><br>
        Here's your booking history.
        <br><br>
        <table class="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Pitch</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders">
              <td>{{ order.date }}</td>
              <td>&euro;{{ order.price }}</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

    </center>
  </div>
</template>

<script>
export default {
  name: 'Account',
  data(){
    return {
      isAdmin: false,
      orders: [],
      title: '',
      artistName: '',
      url: '',
      artwork: {}
    }
  },
  methods: {
    // Check if user is customer or admin
    checkUserType() {
      if(localStorage.getItem("session") == 'admin'){
        this.isAdmin = true;
      } else {
      }
    },
    // Log user out and emit message to notify other components.
    logout() {
      this.$bus.$emit('loggedOut', 'User logged out');

      localStorage.clear();
      window.location.href = "http://localhost:8080/"
    }
  },
  // Call user type on load.
  mounted(){
    console.log('mounted');
    this.checkUserType();
  }
}
</script>

<style>
  .account-msg{
    position: relative;
    top: 100px;
    font-size: 24px;
  }
  .username {
    font-size: 24px;
  }
  .upload {
    position: relative;
    top: 120px;
    width: 300px;
  }
  .logout{
    position: relative;
    cursor: pointer;
  }
</style>
