<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import store from '@/store/store.js';
import EditTask from '@/components/UI/EditTask.vue';

const route = useRoute();
const task = computed(() => store.getters.getTaskById(parseInt(route.params.id)));
</script>

<template>
    <div class="container">
        <h1>Edit task (id: {{ route.params.id }})</h1>
        <div class="view-content">
            <div class="list-group">
                <div class="list-group-item">
                    <EditTask :task="task" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.view-content {
    max-width: 740px;
    margin: 1rem auto;
}

.list-group {
    widows: 100%;
}

.list-group-item {
    @include flex;
    gap: $task-gap;
    background-color: #fff;
    transition: background-color $transition-duration;
    padding: 0.5rem 1rem !important;
}
</style>
