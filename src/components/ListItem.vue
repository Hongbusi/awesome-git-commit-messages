<script setup lang="ts">
const props = defineProps<{
  content: string
  description: string
}>()

const defaultText = 'Copy'
const text = ref(defaultText)

const { copy } = useClipboard()

const { start } = useTimeoutFn(() => {
  text.value = defaultText
}, 3000, { immediate: false })

const restart = () => {
  text.value = 'Copied!'
  copy(props.content)
  start()
}
</script>

<template>
  <div class="relative pl-4 pr-15 py-2 my-4 rounded border border-gray-200 dark:border-gray-800 cursor-pointer truncate" @click="restart">
    {{ content }}
    <span class="ml-10 text-gray">// {{ description }}</span>
    <button class="absolute top-1/2 right-2 -translate-y-1/2 px-2 py-1 text-sm bg-gray-500/20 hover:bg-gray-500/40 transition-all rounded">
      {{ text }}
    </button>
  </div>
</template>
