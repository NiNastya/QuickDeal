<script setup>
import { ref } from 'vue'   
import { computed } from 'vue';
import { useStore } from 'vuex';

const tasks = computed(() => store.state.tasks);
const store = useStore();

const add = ref({
    title: '',
    tasks: []
})
const err = ref({})

function Add() {
    console.log(tasks.value.length)
    if (add.value.title) {
        add.value.id = tasks.value.length + 1
        store.dispatch('addTaskList', add.value);
        store.dispatch('setModal');
    } else {
        err.value.title = true
    }
}
</script>

<template>
    <div class="modal" @click="store.dispatch('setModal', '');">
        <div class="modal-block" @click.stop="">
            <h3>Добавить список задач</h3>
            <form @submit.prevent="Add()">
                <label for="title" :class="{error: err.title }">
                    <p>Название</p>
                    <input type="text" v-model="add.title" id="title">
                </label>
                <label :for="`task-${i}`" v-for="(item, i) in add.tasks" :key="i">
                    <p>Задача №{{ i + 1 }}</p>
                    <input type="text" v-model="item.name" :id="`task-${i}`">
                    <div class="delite" @click="add.tasks.splice(i, 1);">Удалить</div>
                </label>
                <div class="add" @click="add.tasks.push({ name: '', active: false })">Добавить задачу</div>
                <button type="submit">Создать</button>
            </form>
        </div>
        
    </div>
</template>

