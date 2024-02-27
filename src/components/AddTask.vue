<script setup>
import { ref } from 'vue'   
</script>

<template>
    <div class="modal">
        <div class="modal-block">
            <h3>Добавить задачи</h3>
            <form action="">
                <label :for="`task-${i}`" v-for="i in 3" :key="i">
                    <p>Задача №{{ i }}</p>
                    <input type="text" name="" :id="`task-${i}`">
                </label>
                <div class="add">Добавить задачу</div>
                <button type="submit">Добавить</button>
            </form>
        </div>

    </div>
</template>

