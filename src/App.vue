<script setup>
import SiteBar from './components/SiteBar.vue'
import AddList from './components/AddList.vue'
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const modal = computed(() => store.state.modal);

Init()

function Init() {
  if (localStorage.getItem('task')) { store.dispatch('InitTask', JSON.parse(localStorage.getItem('task'))); }
}
</script>

<template>
  <main>

    <SiteBar />
    <router-view />

  </main>
  <AddList v-if="modal == 'addList'"/>
</template>

