<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { getRelativeDate, extendTimestamp } from '@/helpers/utils.js';
import Checkbox from '@/components/UI/Checkbox.vue';
import Button from '@/components/UI/Button.vue';

const props = defineProps(['task']);
const router = useRouter();
const store = useStore();
const textarea = ref(null);
const textareaValue = ref(props.task.text);
const date = computed(() => getRelativeDate(extendTimestamp(props.task.createdAt)));

let textareaOffset;

const handleToggleCheckbox = () => store.dispatch('toggleTask', props.task.id);

const handleChangeTextarea = (event) => {
    textareaValue.value = event.currentTarget.value;
    event.currentTarget.style.height = 'auto';
    event.currentTarget.style.height = event.target.scrollHeight + textareaOffset + 'px';
};

const handleSaveTask = () => {
    if (textareaValue.value.trim() === '') {
        return;
    }

    store.dispatch('editTask', {
        taskId: props.task.id,
        taskText: textareaValue.value
    });
    router.push('/tasks');
};

const handleRemoveTask = () => {
    store.dispatch('removeTask', props.task.id);
    window.location.reload();
};

onMounted(() => {
    textareaOffset = textarea.value.offsetHeight - textarea.value.clientHeight;
    textarea.value.style.height = 'auto';
    textarea.value.style.height = textarea.value.scrollHeight + textareaOffset + 'px';
});
</script>

<template>
    <div class="edit-task">
        <div class="edit-task__content">
            <Checkbox
                @toggle="handleToggleCheckbox"
                :checked="props.task.done"
                />
            <div class="edit-task__right-part">
                <textarea
                    ref="textarea"
                    class="form-control edit-task__textarea"
                    rows="1"
                    :value="textareaValue"
                    @input="handleChangeTextarea"
                    ></textarea>
                <div class="edit-task__date">{{ date }}</div>
            </div>
        </div>
        <div class="edit-task__buttons">
            <Button @click="handleSaveTask">Save</Button>
            <Button @click="handleRemoveTask">Remove</Button>
        </div>
    </div>
</template>

<style lang="scss">
.edit-task {
    @include flex($ai: flex-start);
    gap: $common-gap;
    width: 100%;

    &__content {
        @include flex($ai: flex-start);
        gap: $task-gap;
        flex-grow: 1;
    }

    .checkbox {
        margin-top: 0.6em;
    }

    &__right-part {
        @include flex($ai: baseline);
        gap: $task-gap;
        flex-grow: 1;
    }

    &__textarea {
        resize: none;
    }

    &__date {
        font-size: 0.9em;
        flex-shrink: 0;
        text-align: right;
        color: rgba(0, 0, 0, 0.5);
        align-self: baseline;
    }

    &__buttons {
        @include flex($ai: flex-start);
        gap: $common-gap;
    }
}

@media (max-width: 767px) {
    .edit-task {
        &__right-part {
            flex-direction: column;
            align-items: stretch;
            gap: $task-gap-sm;
        }

        &__buttons {
            flex-direction: column;
            align-items: stretch;
        }
    }
}

@media (max-width: 575px) {
    .edit-task {
        flex-direction: column;
        align-items: stretch;

        &__buttons {
            flex-direction: row;
            align-items: flex-start;
        }

        &__buttons > * {
            flex-grow: 1;
        }
    }
}
</style>
