<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Task from '@/components/UI/Task.vue';

const store = useStore();
const tasks = computed(() => store.getters.getTasks());
</script>

<template>
    <ul v-if="tasks.length > 0" class="list-group task-list">
        <li
            v-for="task of tasks"
            :key="task.id"
            :class="`list-group-item task-list__item${task.done ? ' task-list__item_done' : ''}`"
            >
            <Task :task="task" />
        </li>
    </ul>
    <ul v-else class="list-group task-list__nothing">
        <li class="list-group-item">Nothing here</li>
    </ul>
</template>

<style lang="scss">
.task-list {
    width: 100%;

    &__item.list-group-item {
        @include flex($ai: flex-start);
        gap: $common-gap;
        background-color: #fff;
        transition: background-color $transition-duration;
        padding: 0.5rem 1rem;
    }

    & .task {
        align-self: center;
        flex-grow: 1;
    }

    &__item_done.list-group-item {
        background-color: rgba(0, 0, 0, 0.07);

        .task__text {
            text-decoration: line-through;
        }
    }

    &__buttons {
        @include flex($ai: flex-start);
        gap: $common-gap;
    }
}

@media (max-width: 575px) {
    .task-list {
        &__buttons {
            flex-direction: column;
        }
    }
}
</style>
