<template>
  <Card>
    <template #title>{{ title }}</template>
    <template #content>
      <p>{{ description }}</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
}>();
</script>
