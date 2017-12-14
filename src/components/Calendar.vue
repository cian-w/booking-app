<template>
  <div class="calendar">
    <pitch-switcher></pitch-switcher>
    <br><br><br>
    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
  </div>
</template>

<script>
import PitchSwitcher from './PitchSwitcher.vue'

export default {
  name: 'Calendar',
  components: { PitchSwitcher },
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
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
