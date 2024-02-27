<script setup>
import { ref } from 'vue'
import Logo from './Logo.vue'
const burger = ref(false)    
</script>

<template>
    <div class="sitebar">
        <router-link :to="{ name: 'Home' }" class="sitebar-logo">
            <Logo />
            MyProtfolio
        </router-link>
        <nav :class="{active: burger}" @click="burger = !burger">
            <router-link :to="{ name: 'TaskId', params: { id: 1 } }">Какой то таск</router-link>
        </nav>
        <button>Добавить список задач</button>
        <div class="sitebar-burger" @click="burger = !burger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        
    </div>
</template>

