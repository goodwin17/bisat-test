<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/Main/Header.vue';
</script>

<template>
    <Header />
    <main>
        <RouterView />
    </main>
</template>
