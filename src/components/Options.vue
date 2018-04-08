<template>
  <div class="color-game-page ">

    <h1>{{ msg }}</h1>
    <div class="group">
      <router-link to="/game" tag="button" class="button">Play</router-link>
      <router-link to="/botgame" tag="button" class="button">Bot solution</router-link>
      <router-link to="/settings" tag="button" class="button">Settings</router-link>
      <button class="button" v-on:click="resetStorage">Reset stats</button>
    </div>
  </div>
</template>

<script>
import router from 'vue-router'

export default {
  name: 'Options',
  data: () => {
    return {
      msg: 'Color Game'
    }
  },
  methods: {
    goToGame: () => {
      router.push('game')
    },
    resetStorage: () => {
      localStorage.clear()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
