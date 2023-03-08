import { createRouter, createWebHistory } from 'vue-router'
import ExampleOne from "../views/ExampleOne.vue";
import ExampleTwo from "../views/ExampleTwo.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
		path: '/example-one',
		name: 'exampleOne',
		component: ExampleOne
	},
	{
		path: '/example-two',
		name: 'exampleTwo',
		component: ExampleTwo
	}
  ]
})

export default router
