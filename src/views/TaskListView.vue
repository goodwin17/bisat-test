<script setup>
import TaskList from '@/components/UI/TaskList.vue';

</script>

<template>
    <div class="container">
        <h1>Регламент встречи в аэропортах</h1>

        <div class="view-content">
            <TaskList />
        </div>
    </div>
</template>

<style scoped lang="scss">
.view-content {
    max-width: 900px;
    margin: 0 auto 12px;
    @include flex($fd: column, $ai: normal);
    gap: $common-gap;
}
</style>
