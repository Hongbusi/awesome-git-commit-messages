<script setup lang="ts">
defineProps<{
  content: string
  description: string
}>()

const { copy } = useClipboard()
</script>

<template>
  <div class="p-2 mb-4 bg-white rounded shadow text-blue-500 text-xl" @click="copy(content)">
    {{ content }}
    <span class="ml-10 text-gray">// {{ description }}</span>
  </div>
</template>
