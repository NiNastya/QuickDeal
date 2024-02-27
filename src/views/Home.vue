<script setup>

</script>

<template>
    <section class="home">
        <div class="container">
            <h1>Добро пожаловать в менеджер задач</h1>
            <div class="home-tasks">
                <router-link :to="{ name: 'TaskId', params: { id: 1 } }" class="home-task" v-for="i in 60" :key="i">№{{ i }} список</router-link>
            </div>
            <button>Добавить список задач</button>
        </div>
    </section>
</template>

