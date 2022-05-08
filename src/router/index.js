import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/Projects/ProjectsView.vue'
import ProjectDetails from '../views/Projects/ProjectDetails.vue'
import BlogsView from '../views/Blogs/BlogsView.vue'
import BlogDetails from '../views/Blogs/BlogDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/projects/:id',
    name: 'projectDetails',
    component: ProjectDetails
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/blogs/:id',
    name: 'blogDetails',
    component: BlogDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 };
  }
})

export default router
