import { createStore } from 'vuex';

export default createStore({
    state: {
        tasks: [],
        modal: '',
    },
    mutations: {
        InitTask(state, item) {
            state.tasks = item
        },
        addTaskList(state, task) {
            state.tasks.push(task);
            localStorage.setItem('task', JSON.stringify(state.tasks))
        },
        deleteTask(state, index) {
            state.tasks.splice(index, 1);
        },
        setModal(state, item) {
            state.modal = item;
        },
        TestData(state) {
            state.tasks = [
                {
                    id: 1,
                    title: 'Список продуктов',
                    tasks: [
                        { name: 'Хлеб', active: false },
                        { name: 'Молоко', active: false },
                        { name: 'Яйца', active: false },
                        { name: 'Кока-кола', active: true },
                        { name: 'Сахар', active: false },
                        { name: 'Шоколадка', active: false },
                        { name: 'Печеньки', active: false }
                    ]
                },
                {
                    id: 2,
                    title: 'Список дел по дому',
                    tasks: [
                        { name: 'Убратся', active: false },
                        { name: 'Сходить в магазин', active: false },
                        { name: 'Пропылесосить', active: false },
                        { name: 'Помыть кота', active: true },
                        { name: 'Отремонтировать шкафчик', active: false }
                    ]
                },
                {
                    id: 3,
                    title: 'Глобальные дела',
                    tasks: [
                        { name: 'Поспать', active: true },
                        { name: 'Построить замок', active: false },
                        { name: 'Стать долларовым миллионером', active: false },
                        { name: 'Купить самолет', active: false },
                        { name: 'Вернуть Сане долг', active: false }
                    ]
                },
            ];
            localStorage.setItem('task', JSON.stringify(state.tasks))
        },
        AllDelite(state) {
            state.tasks = [];
            localStorage.removeItem('task')
        },
    },
    actions: {
        addTaskList({ commit }, task) {
            commit('addTaskList', task);
        },
        deleteTask({ commit }, index) {
            commit('deleteTask', index);
        },
        setModal({ commit }, item) {
            commit('setModal', item);
        },
        InitTask({ commit }, item) {
            commit('InitTask', item);
        },
        TestData({ commit }) {
            console.log('TestData')
            commit('TestData');
        },
        AllDelite({ commit }) {
            commit('AllDelite');
        },
    },
    modules: {}
});