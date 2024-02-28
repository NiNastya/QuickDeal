<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const modal = computed(() => store.state.modal);
const tasks = computed(() => store.state.tasks);
const store = useStore();
</script>

<template>
    <section class="home">
        <div class="container">
            <h1>Добро пожаловать в менеджер задач</h1>
            <div class="home-tasks">
                <div class="home-task" v-for="(item, i) in tasks" :key="item.id">
                    <router-link :to="{ name: 'TaskId', params: { id: item.id } }">№{{ i + 1 }} {{ item.title }}</router-link>
                    <div class="delete" @click="store.dispatch('deliteList', i);">Удалить</div>
                </div>
            </div>
            <button @click="store.dispatch('setModal', 'addList');">Добавить список задач</button>
        </div>
    </section>
</template>

