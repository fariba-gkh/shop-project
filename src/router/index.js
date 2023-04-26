import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainPage from '@/components/firstpage/MainPage.vue';
import ContactUs from '@/components/menu/contactUs/ContactUs.vue';
import AboutUs from '@/components/menu/aboutUs/AboutUs.vue';
import Blog from '@/components/menu/blog/Blog.vue';
import Service from '@/components/menu/service/Service.vue';
import ProductProperty from '@/components/property/ProductProperty.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage 
    },
    {
      path: '/ContactUs',
      name: 'ContactUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ContactUs
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUs
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/service',
      name: 'service',
      component: Service
    },
    {
      path: '/ProductProperty/:id',
      name: 'ProductProperty',
      component: ProductProperty
    }
  ]
})

export default router


// import.meta.env.BASE_URL