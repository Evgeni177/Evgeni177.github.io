import Vue from 'vue';
import Router from 'vue-router';
import TaskTwo from './../TaskTwo';
import Main from './../components/Main';
Vue.use(Router)

const routes = [
    {
        name: 'TaskTwo',
        path: '/taskTwo',
        component: TaskTwo
    },
    {
        name: 'Main',
        path: '/',
        component: Main
    }
]

const router = new Router({
    routes,
    mode: 'history'
});

export default router;