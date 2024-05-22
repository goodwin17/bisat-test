<script setup>
const props = defineProps(['checked']);

const emit = defineEmits(['toggle']);
</script>

<template>
    <input
        class="form-check-input checkbox" type="checkbox"
        value="" id="flexCheckDefault"
        :checked="props.checked"
        @change="() => emit('toggle')"
        >
</template>

<style lang="scss">
.checkbox.form-check-input {
    min-width: 22px;
    min-height: 22px;
    margin-top: 0;
    cursor: pointer;
}

@media (max-width: 767px) {
    .checkbox {
        min-width: 26px;
        min-height: 26px;
    }
}
</style>
