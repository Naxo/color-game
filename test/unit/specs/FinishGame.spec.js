import Vue from 'vue'
import VueRouter from 'vue-router'
import FinishGame from '@/components/FinishGame'
import GameContainer from '@/components/GameContainer'
import Options from '@/components/Options'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Options
    },
    {
      path: '/game',
      component: GameContainer
    },
    {
      path: '/finishgame',
      component: FinishGame
    }
  ]
})
const Constructor = Vue.extend(FinishGame)
const vm = new Constructor({ router }).$mount()

describe('FinishGame.vue', () => {
  it('should render correct title and stats', done => {
    router.push('finishgame')
    localStorage.clear()
    localStorage.setItem('scoreHistory', JSON.stringify([20, 40, 20, 100, 60]))
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h1').textContent).to.equal('Finish!')
      expect(vm.score).to.equal(60)
      done()
    })
  })
  it('sets the correct default data', () => {
    const defaultData = FinishGame.data()
    expect(defaultData.title).to.equal('Finish!')
  })
  it('correctly sets the message when created', () => {
    expect(vm.title).to.equal('Finish!')
  })
})
