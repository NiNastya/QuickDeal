<script setup>
import SiteBar from './components/SiteBar.vue'
import AddList from './components/AddList.vue'
</script>

<template>
  <main>

    <SiteBar />
    <router-view />
  </main>
  <!-- <AddList /> -->
</template>

