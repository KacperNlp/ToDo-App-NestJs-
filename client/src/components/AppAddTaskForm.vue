<template>
  <section class="flex flex-col gap-4 mb-8">
    <Card>
      <template #content>
        <h1 class="text-2xl font-bold text-center">{{ $t("form.addTask") }}</h1>
        <FormKit
          type="form"
          @submit="handleSubmit"
          v-model="form"
          :submit-label="$t('form.submit')"
        >
          <FormKit
            type="text"
            name="title"
            :label="$t('form.title')"
            id="title"
          />
          <FormKit
            type="textarea"
            name="description"
            :label="$t('form.description')"
            id="description"
          />
        </FormKit>
      </template>
    </Card>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { FormKitGroupValue } from "@formkit/core";

interface Form extends FormKitGroupValue {
  title: string;
  description: string;
}

const form: Form = reactive({
  title: "",
  description: "",
});

async function handleSubmit() {
  try {
    console.log(form);
  } catch (error) {
    console.error(error);
  }
}
</script>
