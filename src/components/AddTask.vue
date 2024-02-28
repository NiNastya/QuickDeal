<script setup>
import { ref } from 'vue' 
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';


const store = useStore();

const route = useRoute();
const add = ref({
    id: null,
    tasks: [
        {
            name: '',
            active: false
        }
    ]
})  
function Add() { 
    add.value.id = route.params.id
    store.dispatch('addTask', add.value);
    store.dispatch('setModal');
}
</script>

<template>
    <div class="modal" @click="store.dispatch('setModal', '');">
        <div class="modal-block" @click.stop="">
            <h3>Добавить задачи</h3>
            <form  @submit.prevent="Add()">
                <label :for="`task-${i}`" v-for="(item, i) in add.tasks" :key="i">
                    <p>Задача №{{ i + 1 }}</p>
                    <input type="text" v-model="item.name" :id="`task-${i}`">
                    <div class="delite" @click="add.tasks.splice(i, 1);">Удалить</div>
                </label>
                <div class="add" @click="add.tasks.push({ name: '', active: false })">Добавить задачу</div>
                <button type="submit">Добавить</button>
            </form>
        </div>

    </div>
</template>

