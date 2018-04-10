<template>
  <div class="color-game-page">
    <h1>{{ title }}</h1>
    <div class="group">
      <router-link to="/game" tag="button" class="button">Play</router-link>
      <router-link to="/botgame" tag="button" class="button">Bot solution</router-link>
      <router-link to="/settings" tag="button" class="button">Settings</router-link>
      <button class="button" v-on:click="resetStorage">Reset stats</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Options',
  data: () => {
    return {
      title: 'Color Game'
    }
  },
  methods: {
    resetStorage: () => {
      localStorage.setItem('scoreHistory', JSON.stringify([]))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(yellow, darkorange);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
