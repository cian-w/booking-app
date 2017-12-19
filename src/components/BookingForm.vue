<template>
  <div class="booking-form">
    <center>
      <br><br>
      <h2>Book a Pitch</h2>
      <div class="form">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" class="form-control" v-model="title" placeholder="U15 Training">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input type="text" class="form-control" v-model="description" placeholder="Training session">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Select Pitch</label>
          <select class="form-control" v-model="pitch">
            <option>Astro</option>
            <option>Grass</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input type="text" class="form-control" v-model="date" placeholder="yyyy/mm/dd">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Time</label>
          <input type="text" class="form-control" v-model="time" placeholder="14:00">
        </div>
        <button class="btn btn-primary" v-on:click="book">Book Now</button>
      </div>
    </center>
  </div>
</template>

<script>
  import endpoints from '../Endpoints.js'

  export default {
    name: 'BookingForm',
    data () {
      return {
        title: '',
        description: '',
        pitch: 'Astro',
        date: '',
        time: '',
        userId: 1
      }
    },

    methods: {
      // Insert booking
      book(){
        if(localStorage.getItem("session") == 'admin'){
          this.userId = 1;
        } else {
          this.userId = 2;
        }

        var bookingData = {
          title: this.title,
          description: this.description,
          pitch: this.pitch,
          date: this.date,
          time: this.time,
          userid: this.userId
        }

        if(this.title != ''){
          fetch(endpoints.bookingsApi + `/book`,{
             method: 'POST',
             headers: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             body: JSON.stringify(bookingData)
           }).then((response) => {
             console.log();
             // If we get a status 200 - alert booking successful
             if(response.status == '200'){
               alert("Booking Successful");
             }
           });
         }

      }
    }
  }
</script>

<style scoped>

  .form {
    position: relative;
    top: 100px;
    width: 30%;
  }

  label {
    font-weight: bold;
  }

  .btn {
    cursor: pointer;
  }
</style>
