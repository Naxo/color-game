import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App'
import FinishGame from '@/components/FinishGame'
import GameContainer from '@/components/GameContainer'
import GameContainerRobot from '@/components/GameContainerRobot'
import Options from '@/components/Options'

Vue.use(VueRouter)
const myRoutes = [
    {
        path: '/',
        component: Options
    },
    {
        path: '/game',
        component: GameContainer
    },
    {
        path: '/botgame',
        component: GameContainerRobot
    },
    {
        path: '/finishgame',
        component: FinishGame
    }
]

describe('App.vue', () => {
    it('should render correct title to root', done => {
        const Constructor = Vue.extend(App)
        const router = new VueRouter({
            routes: myRoutes
        })
        const vm = new Constructor({ router }).$mount()
        router.push('/')
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('h1').textContent).to.equal('Color Game')
            done()
        })
    })
    it('should render correct title to game', done => {
        const Constructor = Vue.extend(App)
        const router = new VueRouter({
            routes: myRoutes
        })
        const vm = new Constructor({ router }).$mount()
        router.push('/game')

        try {
            Vue.nextTick(() => {
                expect(vm.$el.querySelectorAll('.game-button').length).to.equal(2)
                done()
            })
        } catch (error) {
            done()
        }
    })
    it('should render correct title to botGame', done => {
        const Constructor = Vue.extend(App)
        const router = new VueRouter({
            routes: myRoutes
        })
        const vm = new Constructor({ router }).$mount()
        router.push('/botgame')
        try {
            Vue.nextTick(() => {
                expect(vm.$el.querySelectorAll('input[type=range]').length).to.equal(1)
                done()
            })
        } catch (error) {
            done()
        }
    })
    it('should render correct title to finishgame', done => {
        const Constructor = Vue.extend(App)
        const router = new VueRouter({
            routes: myRoutes
        })
        const vm = new Constructor({ router }).$mount()
        router.push('/finishgame')
        try {
            Vue.nextTick(() => {
                expect(vm.$el.querySelector('h1').textContent).to.equal('Finish!')
                done()
            })
        } catch (error) {
            done()
        }
    })
})
