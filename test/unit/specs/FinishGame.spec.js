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

beforeEach(function () {
  window.localStorage.setItem('scoreHistory', JSON.stringify([2, 4, 2, 10, 6]))
})

describe('FinishGame.vue', () => {
  it('should render correct title', done => {
    router.push('finishgame')
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('h1').textContent).to.equal('Finish!')
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
