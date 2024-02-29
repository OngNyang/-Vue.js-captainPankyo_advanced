// import Vue from 'vue';
// import VueRouter from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

// Vue.use(VueRouter);

const router = createRouter({
    history: createWebHistory(),
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            //url 주소
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
          path: '/user/:id',
          component: UserView,  
        },
        {
            path: '/item/:id',
            component : ItemView,
        }
    ]
});

export { router };

// export const router = new VueRouter({
//     routes: [
//         {
//             //url 주소
//             path: '/news',
//             //url 주소로  갔을때 표시 될 컴포넌트
//             component: NewsView,
//         },
//         {
//             path: '/ask',
//             component: AskView,
//         },
//         {
//             path: '/jobs',
//             component: JobsView,
//         },
//     ]
// })