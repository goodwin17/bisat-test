<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Control'
    },
    actions: {
        type: Array
    },
    currentValue: {
        type: String
    }
});
</script>

<template>
    <div class="dropdown control-dropdown">
        <button
            class="btn btn-primary dropdown-toggle control-dropdown__button"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            {{ props.title }}
        </button>
        <ul class="dropdown-menu control-dropdown__list">
            <li
                v-for="action in props.actions"
                :key="action"
                :class="`dropdown-item control-dropdown__item${props.currentValue === action.name.toLowerCase() ? ' control-dropdown__item_current' : ''}`"
            >
                <button @click.prevent="action.method">{{ action.name }}</button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.control-dropdown {
    &__item.dropdown-item {
        padding: 0;
        background-color: #fff;

        & button {
            width: 100%;
            height: 100%;
            padding: 0.5rem 1rem;
            border: none;
            text-align: left;
            background-color: transparent;
        }
    }

    &__item_current.dropdown-item {
        background-color: rgba(#0d6efd, 0.2);

        &:hover {
            background-color: rgba(#0d6efd, 0.25);
        }
    }
}
</style>
