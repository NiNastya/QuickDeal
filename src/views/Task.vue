<script setup>
import AddTask from '../components/AddTask.vue'
</script>

<template>
    <section class="task">
        <div class="container">
            <h1>Какоето название</h1>
            <div class="task-list">
                <div class="task-list__item" v-for="i in 10" :key="i">
                    <div class="task-list__item-check"><span>✔</span></div>
                    Task №{{ i }}
                </div>
            </div>
            <button>Добавить задачу</button>
        </div>
    </section>
    <!-- <AddTask /> -->
</template>

