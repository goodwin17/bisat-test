import initialData from '@/helpers/initialData.json';

const months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
];

const withZero = (value) => value < 10 ? `0${value}` : value.toString();

const getRelativeDate = (date) => {
    const dateDay = new Date(date);
    const tempDateDay = new Date(dateDay);

    if (dateDay.toString() === 'Invalid Date') {
        return dateDay.toString();
    }

    if (dateDay.getTime() > (new Date()).getTime()) {
        return 'Not happened yet';
    }

    dateDay.setHours(0, 0, 0, 0);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dayMs = 24 * 60 * 60 * 1000;
    const dayCount = (today.getTime() - dateDay.getTime()) / dayMs;
    const dateTime = `${withZero(tempDateDay.getHours())}:${withZero(tempDateDay.getMinutes())}`;

    if (dayCount === 0) {
        return `Today at ${dateTime}`;
    }

    if (dayCount === 1) {
        return `Yesterday at ${dateTime}`;
    }

    if (dayCount < 7) {
        return `${dayCount} days ago`;
    }

    return `${months[tempDateDay.getMonth()]} ${tempDateDay.getDate()}`;
};

const extendTimestamp = (timestamp) => timestamp * 1000;

const shortenTimestamp = (timestamp) => Math.floor(timestamp / 1000);

const setStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    
    if (!tasks) {
        localStorage.setItem('tasks', JSON.stringify(initialData.tasks) || '[]');
    }
};

const resetStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(initialData.tasks) || '[]');
    window.location.reload();
};

export {
    getRelativeDate,
    extendTimestamp,
    shortenTimestamp,
    setStorage,
    resetStorage,
};
