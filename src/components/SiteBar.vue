<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
const burger = ref(false)    
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const tasks = computed(() => store.state.tasks);
</script>

<template>
    <div class="sitebar">
        <router-link :to="{ name: 'Home' }" class="sitebar-logo">
            <Logo />
            Task Manager
        </router-link>
        <div class="sitebar-list" v-if="tasks.length">
            <nav :class="{ active: burger }" @click="burger = !burger">
                <router-link :to="{ name: 'TaskId', params: { id: item.id } }" v-for="item in tasks" :key="item.id">{{ item.title }}</router-link>
            </nav>
        </div>
        <div class="sitebar-null" v-else>У вас нету списков задач</div>
        <button @click="store.dispatch('setModal', 'addList');">Добавить список задач</button>
        <button @click="store.dispatch('TestData');" v-if="!tasks.length">Загрузить тестовые данные</button>
        <button @click="store.dispatch('AllDelite');"  v-if="tasks.length">Удалить все</button>
        <div class="sitebar-burger" @click="burger = !burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    </div>
</template>

