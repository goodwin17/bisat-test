<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['to']);
</script>

<template>
    <RouterLink class="btn btn-primary button" :to="props.to">
        <slot></slot>
    </RouterLink>
</template>
