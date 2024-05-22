export const saveTasks = (value) => localStorage.setItem('tasks', JSON.stringify(value) || '[]');

export const retrieveTasks = () => JSON.parse(localStorage.getItem('tasks')) || [];