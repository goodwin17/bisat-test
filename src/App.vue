<script setup>
import { onMounted } from 'vue';
import { setStorage } from '@/helpers/utils';
import store from '@/store/store.js';

onMounted(() => {
    setStorage();
    store.dispatch('fetchTasks');
});
</script>

<template>
    <RouterView />
</template>
