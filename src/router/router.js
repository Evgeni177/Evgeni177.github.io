import Vue from 'vue';
import Router from 'vue-router';
import TaskTwo from './../TaskTwo';

Vue.use(Router)

const routes = [
    {
        name: 'TaskTwo',
        path: '/taskTwo',
        component: TaskTwo
    }
]

const router = new Router({
    routes,
    mode: 'history'
});

export default router;