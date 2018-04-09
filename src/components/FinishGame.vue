<template>
  <div class="color-game-page ">
     <h1>{{title}}</h1>
     {{score}}
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
  computed: {
    score: function() {
      let auxArray = JSON.parse(localStorage.getItem('scoreHistory'))
      let value = auxArray ? auxArray[auxArray.length - 1] : 0
      return value
    }
  },
  components: { 'game-stats': GameStats }
}
</script>
