import { createStore } from 'vuex';
import { shortenTimestamp } from '@/helpers/utils.js';
import {retrieveTasks, saveTasks} from "@/lib/utilities.js";

const compareTasks = (task1, task2) => task2.createdAt - task1.createdAt;

const checkSubstring = (string, substring) => string.toLowerCase().includes(substring.toLowerCase());

const generateTaskId = () => {
    let taskId;

    do {
        taskId = Math.floor(Math.random() * 100);
    } while (store.state.tasks.some(el => el.id === taskId));
    
    return taskId;
};

const sortDirections = [
    'newer',
    'older'
];

const filterFeatures = [
    'all',
    'done',
    'undone'
];

const getTimestampNow = () => shortenTimestamp((new Date()).getTime());

const store = createStore({
    actions: {
        fetchTasks: (context) => {
            const tasks = retrieveTasks();

            context.commit('updateTasks', tasks);
        },
        addTask: (context) => {
            const task = {
                id: generateTaskId(),
                text: context.state.addTaskInputValue,
                done: false,
                createdAt: getTimestampNow()
            };

            context.commit('createTask', task);
        },
        editTask: (context, { taskId, taskText }) => {
            const task = context.getters.getTaskById(taskId);

            task.text = taskText;
            context.commit('updateTask', task);
        },
        removeTask: (context, taskId) => {
            context.commit('deleteTask', taskId);
        },
        toggleTask: (context, taskId) => {
            const task = context.getters.getTaskById(taskId);

            task.done = !task.done;
            context.commit('updateTask', task);
        },
        changeAddTaskInputValue: (context, inputValue) => context.commit('setAddTaskInputValue', inputValue),
        clearAddTaskInputValue: (context) => context.commit('setAddTaskInputValue', ''),
        changeSortDirection: (context, direction) => {
            if (!sortDirections.includes(direction)) {
                return;
            }

            context.commit('setSortDirection', direction);
        },
        changeFilterFeature: (context, feature) => {
            if (!filterFeatures.includes(feature)) {
                return;
            }

            context.commit('setFilterFeature', feature);
        },
        changeControlSearchInputValue: (context, inputValue) => context.commit('setControlSearchInputValue', inputValue),
        clearControlSearchInputValue: (context) => context.commit('setControlSearchInputValue', ''),
    },
    mutations: {
        createTask: (state, task) => state.tasks = [...state.tasks, task],
        updateTasks: (state, tasks) => state.tasks = tasks,
        updateTask: (state, task) => state.tasks = [...state.tasks.filter(el => el.id !== task.id), task],
        deleteTask: (state, taskId) => state.tasks = state.tasks.filter(el => el.id !== taskId),
        setAddTaskInputValue: (state, value) => state.addTaskInputValue = value,
        setSortDirection: (state, value) => state.sortDirection = value,
        setFilterFeature: (state, value) => state.filterFeature = value,
        setControlSearchInputValue: (state, value) => state.controlSearchInputValue = value,
    },
    state: () => ({
        tasks: [],
        filterFeature: 'all',
        sortDirection: 'newer',
        addTaskInputValue: '',
        controlSearchInputValue: ''
    }),
    getters: {
        getTasks: state => () => {
            let tasks = state.tasks.toSorted(compareTasks);

            if (state.sortDirection === 'older') {
                tasks.reverse();
            }

            if (state.filterFeature === 'undone') {
                tasks = tasks.filter(el => el.done === false);
            } else if (state.filterFeature === 'done') {
                tasks = tasks.filter(el => el.done === true);
            }

            if (state.controlSearchInputValue !== '') {
                tasks = tasks.filter(el => checkSubstring(el.text, state.controlSearchInputValue));
            }

            return tasks;
        },
        getTaskById: state => taskId => state.tasks.find(el => el.id === taskId),
        getAddTaskInputValue: state => () => state.addTaskInputValue,
        getControlSearchInputValue: state => () => state.controlSearchInputValue,
    },
});

store.subscribeAction({
    after: (_, state) => saveTasks(state.tasks)
});

export default store;
