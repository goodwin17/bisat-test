<script setup>
import {computed} from 'vue';
import {useStore} from 'vuex';
import {getRelativeDate, extendTimestamp} from '@/helpers/utils.js';
import Checkbox from '@/components/UI/Checkbox.vue';

const props = defineProps(['task']);
const store = useStore();

const handleToggleCheckbox = () => store.dispatch('toggleTask', props.task.id);
</script>

<template>
  <div :class="`task${props.task.done ? ' task_done' : ''}`">
    <Checkbox
        @toggle="handleToggleCheckbox"
        :checked="props.task.done"
    />
    <div class="task__right-part">
      <div class="task__text">{{ props.task.text }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.task {
  @include flex($ai: flex-start);
  gap: $task-gap;

  .checkbox {
    align-self: baseline;
    margin-top: 0.15em;
  }

  &__right-part {
    @include flex($ai: baseline);
    gap: $task-gap;
    flex-grow: 1;
  }

  &__text {
    text-align: left;
    font-size: 1em;
  }

  &__date {
    font-size: 0.9em;
    flex-shrink: 0;
    text-align: right;
    color: rgba(0, 0, 0, 0.5);
    align-self: baseline;
  }
}

@media (max-width: 575px) {
  .task {
    &__right-part {
      flex-direction: column;
      align-items: stretch;
      gap: $task-gap-sm;
    }

    &__date {
      flex-basis: auto;
    }
  }
}
</style>
