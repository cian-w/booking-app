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
    },

    // Retrieve all bookings
    getAllBookings() {
      this.bookings = [];

      fetch(endpoints.bookingsApi + `/allbookings`,{
         method: 'GET'
       }).then((response) => {
         return response.json();
       }).then((data) => {
         for (var i=0; i<data.length; i++){
           var bookingObj = {
             date: data[i].DateAt,
             title: data[i].Title + ' - ' + data[i].TimeAt,
             desc: data[i].Description
           }
           this.bookings.push(bookingObj);
         }
       });
    },

    // Retrieve bookings for the astro pitch
    getAstroBookings() {
      this.bookings = [];

      fetch(endpoints.bookingsApi + `/astro`,{
         method: 'GET'
       }).then((response) => {
         return response.json();
       }).then((data) => {
         for (var i=0; i<data.length; i++){
           var bookingObj = {
             date: data[i].DateAt,
             title: data[i].Title + ' - ' + data[i].TimeAt,
             desc: data[i].Description
           }
           this.bookings.push(bookingObj);
         }
       });
    },

    // Retrieve bookings for the grass pitch
    getGrassBookings() {
      this.bookings = [];

      fetch(endpoints.bookingsApi + `/grass`,{
         method: 'GET'
       }).then((response) => {
         return response.json();
       }).then((data) => {
         for (var i=0; i<data.length; i++){
           var bookingObj = {
             date: data[i].DateAt,
             title: data[i].Title + ' - ' + data[i].TimeAt,
             desc: data[i].Description
           }
           this.bookings.push(bookingObj);
         }
       });
    }

  },

  // This function runs when this component is executed and holds a listener
  created () {
    this.getAllBookings();

    this.$bus.$on('viewing-grass', () => {
      this.getGrassBookings();
    })

    this.$bus.$on('viewing-astro', () => {
      this.getAstroBookings();
    })
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
