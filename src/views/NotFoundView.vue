<script setup>
import Button from '@/components/UI/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="container">
        <h1>Not found
        <Button @click="() => router.go(-1)">Go back</Button></h1>
    </div>
</template>
