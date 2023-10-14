import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import ReactivityFundamentals from '../views/ReactivityFundamentals.vue'
import EventHandling from '../views/EventHandling.vue'
import FormHandling from '../views/FormHandling.vue'
import WatcherView from '../views/WatcherView.vue'
import ParentComponent from '../views/ParentComponent.vue'

// 11. Router
const routes = [
  { path: '/', component: AboutMe },
  { path: '/reactivity-fundamentals', component: ReactivityFundamentals },
  { path: '/event-handling', component: EventHandling },
  { path: '/form-handling', component: FormHandling },
  { path: '/watchers', component: WatcherView },
  { path: '/components', component: ParentComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
