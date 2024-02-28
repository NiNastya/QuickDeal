<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const modal = computed(() => store.state.modal);
const store = useStore();
</script>

<template>
    <section class="home">
        <div class="container">
            <h1>Добро пожаловать в менеджер задач</h1>
            {{ modal }}
            <div class="home-tasks">
                <router-link :to="{ name: 'TaskId', params: { id: 1 } }" class="home-task" v-for="i in 5" :key="i">№{{ i }} список</router-link>
            </div>
            <button @click="store.dispatch('setModal', 'addList');">Добавить список задач</button>
        </div>
    </section>
</template>

