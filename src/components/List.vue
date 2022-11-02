<script setup lang="ts">
import type { CommitType } from '~/types'

defineProps<{
  list: CommitType[]
}>()

const activeIndex = ref<number | null>(null)

const { copy } = useClipboard()

const { start } = useTimeoutFn(() => {
  activeIndex.value = null
}, 2000, { immediate: false })

const restart = (index: number, value: string) => {
  activeIndex.value = index
  copy(value)
  start()
}
</script>

<template>
  <div v-for="item in list" :key="item.title">
    <h2 class="my-6 text-3xl font-700">
      {{ item.title }}
    </h2>

    <div
      v-for="(commit, index) in item.list"
      :key="commit.message"
      class="item relative px-4 py-2 mb-4 bg-white rounded-2 shadow cursor-pointer"
      @click="restart(index, commit.message)"
    >
      <div class="text-xl font-600 text-blue-500">
        {{ commit.message }}
      </div>
      <div class="text-sm font-italic font-300">
        {{ commit.description }}
      </div>
      <div
        class="item-copy absolute top-1/2 right-2 -translate-y-1/2 flex justify-center items-center p-1 text-base border rounded"
        :class="{ 'border-green-700': activeIndex === index }"
      >
        <div v-if="activeIndex === index" class="i-hbs-check text-green-700" />
        <div v-else class="i-hbs-copy" />
      </div>
    </div>
  </div>
</template>
