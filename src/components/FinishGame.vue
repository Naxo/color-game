<template>
  <div class="color-game-page ">
     <h1>{{title}}</h1>
     {{ score}}
     <div class="group">
      <router-link to="/game" tag="button" class="button">Replay</router-link>
      <router-link to="/" tag="button" class="button">Menu</router-link>
    </div>
    <game-stats :width="400" :height="200"></game-stats>
  </div>
</template>

<script>
import GameStats from './Stats'

export default {
  name: 'FinishGame',
  data: () => {
    return { title: 'Finish!' }
  },
  methods: {
    score() {
      let auxArray = JSON.parse(localStorage.getItem('scoreHistory'))
      return auxArray ? auxArray[auxArray.length - 1] : 0
    }
  },
  components: { 'game-stats': GameStats }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
