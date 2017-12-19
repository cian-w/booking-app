<template>
  <div class="account">
    <div class="account-msg">
      Welcome to your account,
    </div>
    <center>
      <div class="wrapper" v-if="isAdmin">
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
            <tr v-for="booking in bookings">
              <td>{{ booking.Title }}</td>
              <td>{{ booking.DateAt }}</td>
              <td>{{ booking.TimeAt }}</td>
              <td>{{ booking.Pitch }}</td>
              <td><img class="delete-icon" src="../../images/x-button.png" v-on:click="deleteBooking(booking.ID)"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="wrapper" v-else>
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
            <tr v-for="booking in bookings">
              <td>{{ booking.Title }}</td>
              <td>{{ booking.DateAt }}</td>
              <td>{{ booking.TimeAt }}</td>
              <td>{{ booking.Pitch }}</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

    </center>
  </div>
</template>

<script>
import endpoints from '../Endpoints.js'

export default {
  name: 'Account',
  data(){
    return {
      isAdmin: false,
      orders: [],
      title: '',
      artistName: '',
      url: '',
      artwork: {},
      bookings: []
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
    // Get all bookings for a user
    getUserBookings() {
      fetch(endpoints.bookingsApi + `/bookings`,{
           method: 'GET'
         }).then((response) => {
           return response.json();
         }).then((data) => {
           this.bookings = data;
         });
    },
    // Get all bookings on the system
    getAllBookings() {
      fetch(endpoints.bookingsApi + `/allbookings`,{
           method: 'GET'
         }).then((response) => {
           return response.json();
         }).then((data) => {
           this.bookings = data;
         });
    },
    // Delete booking
    deleteBooking(id) {
      var booking = {
        id: id
      }

      fetch(endpoints.bookingsApi + `/delete`,{
         method: 'POST',
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: JSON.stringify(booking)
       }).then((response) => {
         // If we get a status 200 - alert booking successful
         if(response.status == '200'){
           alert("Booking Deleted");
           this.getAllBookings();
         }
       });
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
    this.checkUserType();
    if(this.isAdmin){
      this.getAllBookings();
    } else {
      this.getUserBookings();
    }
  }
}
</script>

<style scoped>
  .account-msg{
    position: relative;
    top: 100px;
    font-size: 24px;
  }
  .username {
    font-size: 24px;
  }
  .wrapper {
    position: relative;
    top: 120px;
    width: 300px;
  }
  .logout{
    position: relative;
    cursor: pointer;
  }

  .table {
    position: relative;
    left: -40px;
  }

  .delete-icon {
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
</style>
