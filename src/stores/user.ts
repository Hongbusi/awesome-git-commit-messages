export const useUserStore = defineStore('user', () => {
  const name = ref('Git commit message example')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
