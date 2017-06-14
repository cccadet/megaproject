<script>
  export default {
    name: 'Home',
    data: () => ({
      stitle: 'Megaproject',
      ssubtitle: 'Subtítulo'
    }),
    created () {
      this.updateTitle()
    },
    methods: {
      updateTitle: function () {
        const payload = {
          stitle: this.stitle
        }
        this.$store.commit('CHANGE_STITLE', payload)
        const payload2 = {
          ssubtitle: this.ssubtitle
        }
        this.$store.commit('CHANGE_SSUBTITLE', payload2)
      }
    }
  }
</script>

<template>
  <div>
    Home
  </div>
</template>

<style scoped>

</style>
