<template>
  <main class="max-w-4xl mx-auto my-10 px-4">
    <AppAddTaskForm />
    <AppTasksList />
  </main>
</template>

<script setup lang="ts">
import AppTasksList from "./components/AppTasksList.vue";
import AppAddTaskForm from "./components/AppAddTaskForm.vue";
</script>
