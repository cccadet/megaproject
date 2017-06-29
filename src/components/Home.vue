<script>
  export default {
    name: 'Home',
    data: () => ({
      stitle: 'Megaproject',
      ssubtitle: 'Sobre nós'
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
    <br>
    <div class="box">
      <h1 class="title">
        Megaproject
        </h1>
      <br>
      <div>
        <p>
          A MEGAPROJECT tem profissionais com sólida
          experiência no setor industrial em geral, com
          expertise no setor de alimentos. Atua na área de
          “projetos” desde a definição de capacidades,
          escolha de equipamentos, projetos mecânicos,
          instalações de equipamentos e montagem
          mecânica.


          Possui uma equipe de profissionais com experiência
          no mercado e com conhecimento técnico
          abrangente.
          </p>
      </div>
    </div>
    <div class="box">
      <div id="your-application-id">
        <photos source="https://www.mockaroo.com/8e9a75b0/download?count=10&key=e2db8d80"></photos>
        <theater></theater>
      </div>
    </div>
    <br>
  </div>
</template>

<style scoped>

</style>
