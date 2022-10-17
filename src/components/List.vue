<script setup lang="ts">
import type { CommitType } from '~/types'

defineProps<{
  list: CommitType[]
}>()
</script>

<template>
  <div v-for="(item, index) in list" :key="index">
    <h2 class="my-4 text-3xl">
      {{ item.title }}
    </h2>

    <ListItem
      v-for="commit in item.list"
      :key="commit.message"
      :content="commit.message"
      :description="commit.description"
    />
  </div>
</template>
