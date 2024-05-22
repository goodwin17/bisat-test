<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Button from '@/components/UI/Button.vue';

const store = useStore();
const inputValue = computed(() => store.state.controlSearchInputValue);

const handleChangeInput = (event) => store.dispatch('changeControlSearchInputValue', event.currentTarget.value);

const handleClearInput = () => store.dispatch('clearControlSearchInputValue');
</script>

<template>
    <div class="input-group control-search">
        <span class="input-group-text bg-primary text-light">Search</span>
        <input
            type="text" 
            class="form-control control-search__input"
            placeholder="Search..."
            :value="inputValue"
            @input="handleChangeInput"
            >
        <Button v-if="inputValue !== ''" class="btn-secondary" @click="handleClearInput">
            <i class="bi bi-x-circle"></i>
        </Button>
    </div>
</template>
