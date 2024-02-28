<script setup>
import { ref, watch } from 'vue';
import AddTask from '../components/AddTask.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const tasks = computed(() => store.state.tasks);
const modal = computed(() => store.state.modal);
const store = useStore();
const route = useRoute();
const task = ref('');
const edit = ref(-1);

GetTask()
watch(() => route.params, (newValue, oldValue) => {
    GetTask()
});

function GetTask() {
    task.value = tasks.value.find(function (item) {
        return item.id == route.params.id;
    });
}
function RemTask(i) {
    task.value.tasks.splice(i, 1);
    store.dispatch('editTask', task.value);
}
function Check(i) {
    task.value.tasks[i].active = !task.value.tasks[i].active
    store.dispatch('editTask', task.value);
}

</script>

<template>
    <section class="task" v-if="task" @click="edit = -1">
        <div class="container">
            <h1>{{ task.title }}</h1>
            
            <div class="task-list">
                <div class="task-list__item"  @click.stop v-for="(item, i) in task.tasks" :key="i">
                    <div class="task-list__item-check" @click="Check(i)"><span v-if="item.active">✔</span></div>
                    <p v-if="edit !== i" @click="edit = i">{{ item.name }}</p>
                    <input v-else type="text" v-model="item.name" @change="store.dispatch('editTask', task);" >
                    <div class="delite" @click="RemTask(i)">x</div>
                </div>
            </div>
            <button @click="store.dispatch('setModal', 'addTask');">Добавить задачу</button>
            <button @click="store.dispatch('DeliteList', task);">Удалить список задач</button>
        </div>
    </section>
    <AddTask  v-if="modal == 'addTask'"/>
</template>

