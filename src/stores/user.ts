export const useUserStore = defineStore('user', () => {
  const name = ref('commit example')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
