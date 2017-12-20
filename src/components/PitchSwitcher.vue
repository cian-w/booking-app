<template>
  <div class="pitch-switcher">
    <button class="btn-astro" v-bind:class="{ active: astroActive }" v-on:click="switchToAstro">Astro</button>
    <button class="btn-grass" v-bind:class="{ active: grassActive }" v-on:click="switchToGrass">Grass</button>
  </div>
</template>

<script>
export default {
  name: 'PitchSwitcher',
  data () {
    return {
      astroActive: false,
      grassActive: false
    }
  },

  methods: {
    switchToAstro () {
      this.astroActive = true;
      this.grassActive = false;
      this.$bus.$emit('viewing-astro', 'User chose astro');

    },

    switchToGrass () {
      this.grassActive = true;
      this.astroActive = false;
      this.$bus.$emit('viewing-grass', 'User chose grass');
    }
  }
}
</script>

<style>

  .btn-astro, .btn-grass {
    cursor: pointer;
    font-weight: bold;
    height: 35px;
    width: 90px;
    border: 4px solid #3d7fe2;
    background-color: white;
    font-size: 20px;
    color: #3d7fe2;
  }

  .btn-astro {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .btn-grass {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .active {
    color: white;
    background-color: #3d7fe2;
  }

  button:focus {outline:0;}

</style>
