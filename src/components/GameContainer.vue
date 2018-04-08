<template>
  <div class="color-game-page ">
    <transition name="fade">
      <game-step></game-step>
    </transition>
  </div>
</template>

<script>
import GameStep from './GameStep'

export default {
  name: 'GameContainer',
  components: { 'game-step': GameStep }
}
</script>
