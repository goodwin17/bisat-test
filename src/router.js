import { createRouter, createWebHashHistory } from "vue-router";
import PageLayout from '@/helpers/PageLayout.vue';
import TaskListView from '@/views/TaskListView.vue';
import TaskView from '@/views/TaskView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import store from "@/store/store.js";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: PageLayout,
            children: [
                {
                    path: '/tasks',
                    component: TaskListView
                },
                {
                    path: '/',
                    redirect: '/tasks'
                },
                {
                    path: '/tasks/:id',
                    component: TaskView,
                    beforeEnter: (to, _, next) => {
                        if (store.getters.getTaskById(parseInt(to.params.id))) {
                            next();
                        } else {
                            next('/tasks');
                        }
                    }
                },
                {
                    path: '/:pathMatch(.*)*',
                    component: NotFoundView
                },
            ]
        }
    ]
});

export default router;
