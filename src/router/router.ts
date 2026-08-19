import { createRouter, createWebHistory } from 'vue-router';

const MainLayout = () => import('@/layouts/MainLayout.vue');
const LoginView = () => import('@/views/login/LoginView.vue');
const MainView = () => import('@/views/MainView.vue');
const UserListView = () => import('@/views/user/UserListView.vue');
const InfiniteListView = () => import('@/views/list/InfiniteListView.vue');
const ModalView = () => import('@/views/modal/ModalView.vue');
const CompGuideView = () => import('@/views/guide/CompGuideView.vue');

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                { path: '', name: 'main', component: MainView },
                { path: 'login', name: 'login', component: LoginView },
                { path: 'users', name: 'users', component: UserListView },
                { path: 'infinite-list', name: 'infinite-list', component: InfiniteListView },
                { path: 'modals', name: 'modals', component: ModalView },
                { path: 'component-guide', name: 'component-guide', component: CompGuideView },
            ],
        },
        { path: '/:pathMatch(.*)*', redirect: { name: 'main' } },
    ],
});

export default router;
