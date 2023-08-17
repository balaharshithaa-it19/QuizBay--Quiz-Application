import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/Homepage'
import Quizmaster from '@/components/Quizmaster'
import QuizmasterStatic from '@/components/QuizmasterStatic'
import QuizmasterDynamic from '@/components/QuizmasterDynamic'
import Header from '@/components/Header'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import framingQuestion from '@/components/framingQuestion'
import dynamicQuiz from '@/components/dynamicQuiz'
import Screener from '@/components/Screener'
import Scraper from '@/components/scraper'
import Yourcontests from '@/components/Yourcontests'
import UploadQuestions from '@/components/UploadQuestions'
import Scrapermain from '@/components/Scrapermain'
import Leaderboard from '@/components/Leaderboard'
import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss)
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/quizmaster',
      name: 'Quizmaster',
      component: Quizmaster
    },
    {
      path: '/static',
      name: 'QuizmasterStatic',
      component: QuizmasterStatic
    },
    {
      path: '/dynamic',
      name: 'QuizmasterDynamic',
      component: QuizmasterDynamic
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/dynamicquiz',
      name: 'dynamicQuiz',
      component: dynamicQuiz
    },
    {
      path: '/framingQuestions',
      name: 'framingQuestion',
      component: framingQuestion
    },
    {
      path: '/screener',
      name: 'Screener',
      component: Screener
    },
    {
      path: '/scraper',
      name: 'Scraper',
      component: Scraper
    },
    {
      path: '/quizzes',
      name: 'Yourcontests',
      component: Yourcontests
    },
    {
      path: '/uploadquestions',
      name: 'UploadQuestions',
      component: UploadQuestions
    },
    {
      path: '/scrape',
      name: 'Scrapermain',
      component: Scrapermain
    },
    {
      path: '/leaderboard',
      name: 'Leaderboard',
      component: Leaderboard
    }
  ]
})
