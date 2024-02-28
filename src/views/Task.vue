<script setup>
import AddTask from '../components/AddTask.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const tasks = computed(() => store.state.tasks);
const modal = computed(() => store.state.modal);
const store = useStore();
const route = useRoute();

const task = tasks.value.find(function (item) {
    return item.id == route.params.id;
});
</script>

<template>
    <section class="task">
        <div class="container">
            <h1>{{ task.title }}</h1>
            
            <div class="task-list">
                <div class="task-list__item" v-for="(item, i) in task.tasks" :key="i">
                    <div class="task-list__item-check"><span v-if="item.active">✔</span></div>
                    <p>{{ item.name }}</p>
                    
                    <div class="delite">x</div>
                </div>
            </div>
            <button>Добавить задачу</button>
        </div>
    </section>
    <AddTask  v-if="modal == 'addTask'"/>
</template>

