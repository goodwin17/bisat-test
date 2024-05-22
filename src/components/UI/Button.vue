<script setup>
const emit = defineEmits(['click']);
</script>

<template>
    <button type="button" class="btn btn-primary button" @click.prevent.stop="() => emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss">
.button.btn:not(:has(i)) {
    padding: 0.5rem 1rem;
}
</style>
