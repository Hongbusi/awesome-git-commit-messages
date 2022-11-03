<script setup lang="ts">
import type { CommitType } from '~/types'

defineProps<{
  list: CommitType[]
}>()

const active = ref<string>('')

const { copy } = useClipboard()

const { start } = useTimeoutFn(() => {
  active.value = ''
}, 2000, { immediate: false })

const restart = (index: string, value: string) => {
  active.value = index
  copy(value)
  start()
}
</script>

<template>
  <div v-for="(firstItem, firstIndex) in list" :key="firstIndex">
    <h2 class="my-6 text-3xl font-700">
      {{ firstItem.title }}
      <span class="text-xl font-italic font-300">（{{ firstItem.description }}）</span>
    </h2>

    <div
      v-for="(secondItem, secondIndex) in firstItem.list"
      :key="secondItem.message"
      class="item relative px-4 py-2 mb-4 bg-white rounded-2 shadow cursor-pointer"
      @click="restart(`${firstIndex}-${secondIndex}`, secondItem.message)"
    >
      <div class="text-xl font-600 text-blue-500">
        {{ secondItem.message }}
      </div>
      <div class="text-sm font-italic font-300">
        {{ secondItem.description }}
      </div>
      <div
        class="item-copy absolute top-1/2 right-2 -translate-y-1/2 flex justify-center items-center p-1 text-base border rounded"
        :class="{ 'border-green-700': active === `${firstIndex}-${secondIndex}` }"
      >
        <div v-if="active === `${firstIndex}-${secondIndex}`" class="i-hbs-check text-green-700" />
        <div v-else class="i-hbs-copy" />
      </div>
    </div>
  </div>
</template>
