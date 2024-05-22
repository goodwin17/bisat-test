<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import Button from '@/components/UI/Button.vue';

const store = useStore();
const inputRef = ref(null);
const inputValue = computed(() => store.state.addTaskInputValue);

const handleChangeInput = (event) => {
    store.dispatch('changeAddTaskInputValue', event.currentTarget.value);
};

const handleAddTask = () => {
    if (inputValue.value.trim() === '') {
        return;
    }

    store.dispatch('addTask');
    store.dispatch('clearAddTaskInputValue');
};

const handlePressEnterInput = (event) => event.keyCode === 13 && handleAddTask();
</script>

<template>
    <div class="add-task">
        <input
            type="text"
            class="form-control add-task__input"
            placeholder="Write a task..."
            :ref="inputRef"
            :value="inputValue"
            @input="handleChangeInput"
            @keyup="handlePressEnterInput"
            >
        <Button @click="handleAddTask">Add</Button>
    </div>
</template>

<style lang="scss">
.add-task {
    @include flex;
    gap: $common-gap;

    &__input.form-control {
        padding: 0.5rem 1rem;
    }
}
</style>
