<script setup lang="ts">
const props = defineProps<{
  content: string
  description: string
}>()

const isCopy = ref(false)

const { copy } = useClipboard()

const { start } = useTimeoutFn(() => {
  isCopy.value = false
}, 3000, { immediate: false })

const restart = () => {
  isCopy.value = true
  copy(props.content)
  start()
}
</script>

<template>
  <div class="relative px-4 py-2 mb-4 bg-white rounded-2 shadow cursor-pointer" @click="restart">
    <div class="text-xl font-600 text-blue-500">
      {{ content }}
    </div>
    <div class="text-sm font-italic font-300">
      {{ description }}
    </div>
    <div class="absolute top-1/2 right-2 -translate-y-1/2 flex justify-center items-center p-2 text-xl transition hover:bg-blue-100">
      <div v-if="isCopy" class="i-hbs-copied" />
      <div v-else class="i-hbs-copy" />
    </div>
  </div>
</template>
