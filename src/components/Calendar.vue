<template>
  <div class="calendar">
    <pitch-switcher></pitch-switcher>
    <br><br><br>
    <vue-event-calendar :events="bookings" @day-changed="handleDayChanged"></vue-event-calendar>
  </div>
</template>

<script>
import PitchSwitcher from './PitchSwitcher.vue'
import endpoints from '../Endpoints.js'

export default {
  name: 'Calendar',
  components: { PitchSwitcher },
  data () {
    return {
      bookings: []
    }
  },

  methods: {
    // Change day on calendar
    handleDayChanged(data) {
      this.$EventCalendar.toDate(data.date);
      this.getAstroBookings();
    },

    // Retrieve bookings for the astro pitch
    getAstroBookings() {
      fetch(endpoints.bookingsApi + `/astro`,{
           method: 'GET'
         }).then((response) => {
           return response.json();
         }).then((data) => {
           this.bookings = data;
         });
    },

    // Retrieve bookings for the grass pitch
    getGrassBookings() {
      fetch(endpoints.bookingsApi + `/grass`,{
           method: 'GET'
         }).then((response) => {
           return response.json();
         }).then((data) => {
           this.bookings = data;
         });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
