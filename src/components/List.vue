<script setup lang="ts">
import type { CommitType } from '~/types'

defineProps<{
  list: CommitType[]
}>()
</script>

<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="my-8">
      <h3 class="text-3xl font-600 title">
        {{ item.title }}
      </h3>
    </div>

    <ListItem
      v-for="commit in item.list"
      :key="commit.message"
      :content="commit.message"
      :description="commit.description"
    />
  </div>
</template>
