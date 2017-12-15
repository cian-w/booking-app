<template>
  <div class="booking-form">
    <center>
      <br><br>
      <h2>Book a Pitch</h2>
      <form class="form">
        <div class="form-group">
          <label for="exampleInputEmail1">Title</label>
          <input type="text" class="form-control" placeholder="U15 Training">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <input type="text" class="form-control" placeholder="Training session">
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Select Pitch</label>
          <select class="form-control" >
            <option>Astro</option>
            <option>Grass</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Date</label>
          <input type="text" class="form-control" placeholder="dd/mm/yyyy">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Time</label>
          <input type="text" class="form-control" placeholder="14:00">
        </div>
        <button type="submit" class="btn btn-primary">Book Now</button>
      </form>
    </center>
  </div>
</template>

<script>
  export default {
    name: 'BookingForm',
    data () {
      return {
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
</style>
