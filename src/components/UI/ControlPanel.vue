<script setup>
import { computed } from 'vue';
import store from '@/store/store.js';
import ControlDropdown from '@/components/UI/ControlDropdown.vue';
import ControlSearch from '@/components/UI/ControlSearch.vue';

const sortActions = [
    {
        name: 'Newer',
        method: () => store.dispatch('changeSortDirection', 'newer')
    },
    {
        name: 'Older',
        method: () => store.dispatch('changeSortDirection', 'older')
    },
];

const filterActions = [
    {
        name: 'All',
        method: () => store.dispatch('changeFilterFeature', 'all')
    },
    {
        name: 'Done',
        method: () => store.dispatch('changeFilterFeature', 'done')
    },
    {
        name: 'Undone',
        method: () => store.dispatch('changeFilterFeature', 'undone')
    },
];

const sortDirection = computed(() => store.state.sortDirection);
const filterFeature = computed(() => store.state.filterFeature);

</script>

<template>
    <div class="control-panel">
        <div class="control-panel__left-part">
            <ControlDropdown title="Sort" :actions="sortActions" :currentValue="sortDirection" />
            <ControlDropdown title="Filter" :actions="filterActions" :currentValue="filterFeature" />
        </div>
        <ControlSearch />
    </div>
</template>

<style lang="scss">
.control-panel {
    @include flex($jc: flex-start);
    gap: $common-gap;

    &__left-part {
        @include flex($jc: flex-start);
        gap: $common-gap;
    }
}

@media (max-width: 575px) {
    .control-panel {
        flex-direction: column;
        align-items: stretch;

        .left-part {
            justify-content: space-between;
        }

        .control-dropdown {
            flex-grow: 1;

            .btn {
                width: 100%;
            }

            .dropdown-menu {
                width: 100%;
            }
        }
    }
}
</style>
