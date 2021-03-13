import Vue from 'vue';
import Router from 'vue-router';
import TaskTwo from './../TaskTwo';
import App from './../App';
Vue.use(Router)

const routes = [
    {
        name: 'TaskTwo',
        path: '/taskTwo',
        component: TaskTwo
    },
    {
        name: 'App',
        path: '/',
        component: App
    }
]

const router = new Router({
    routes,
    mode: 'history'
});

export default router;