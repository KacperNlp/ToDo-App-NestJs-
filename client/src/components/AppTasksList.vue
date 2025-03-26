<template lang="">
  <ul class="flex flex-col gap-4">
    <AppTask
      v-for="task in tasks"
      :key="task.title"
      :title="task.title"
      :description="task.description"
    />
  </ul>
</template>

<script setup lang="ts">
import AppTask from "./AppTask.vue";

const tasks = [
  {
    title: "Task 1",
    description: "Description 1",
  },
  {
    title: "Task 2",
    description: "Description 2",
  },
];
</script>
