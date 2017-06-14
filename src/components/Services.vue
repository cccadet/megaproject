<script>

  export default {
    name: 'Services',
    data: () => ({
      stitle: 'Serviços',
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
    <section class="section background">
      <div class="columns is-multiline is-mobile">
        <!-- Coordenação de Obra -->
        <div class="column is-half">
            <span class="box">
              <div class="columns ">
                <div class="column is-5">
                  <div class="image is-1by1">
                    <img src="../assets/img/imagem2.jpg">
                  </div>
                </div>
                <div class="column is-7 ">
                  <div class="title is-4 has-text-muted">
                    <h3 class="title is-5">
                      <a>
                        <i class="fa fa-cog fa-spin fa-fw"></i>
                        <span class="sr-only"></span>
                        <strong>Coordenação de obra</strong>
                      </a>
                    </h3>
                  </div>
                  <hr>
                  <ul class="has-text-left">
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Instalações Mecânicas</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Instalações Elétricas</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Construção Civil</p></li>
                  </ul>
                  <br>
                </div>
              </div>
            </span>
        </div>
        <!-- Instalações de Equipamentos -->
        <div class="column is-half">
            <span class="box">
              <div class="columns ">
                <div class="column is-5">
                  <div class="image is-1by1">
                    <img src="../assets/img/imagem1.jpg">
                  </div>
                </div>
                <div class="column is-7 ">
                  <div class="title is-4 has-text-muted">
                    <h3 class="title is-5">
                      <a>
                        <i class="fa fa-cog fa-spin fa-fw"></i>
                        <span class="sr-only"></span>
                        <strong>Instalações</strong>
                      </a>
                    </h3>
                  </div>
                  <hr>
                  <ul class="has-text-left">
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Equipamentos em Geral</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Montagem Mecânica e Elétrica de Equipamentos </p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Instalações Mecânicas</p></li>
                  </ul>
                  <br>
                </div>
              </div>
            </span>
        </div>
        <!-- Coordenação de Obra -->
        <div class="column is-half">
            <span class="box">
              <div class="columns ">
                <div class="column is-5">
                  <div class="image is-1by1">
                    <img src="../assets/img/imagem2.jpg">
                  </div>
                </div>
                <div class="column is-7 ">
                  <div class="title is-4 has-text-muted">
                    <h3 class="title is-5">
                      <a>
                        <i class="fa fa-cog fa-spin fa-fw"></i>
                        <span class="sr-only"></span>
                        <strong>Instalações</strong>
                      </a>
                    </h3>
                  </div>
                  <hr>
                  <ul class="has-text-left">
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Equipamentos em Geral</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Montagem Mecânica e Elétrica de Equipamentos </p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Instalações Mecânicas</p></li>
                  </ul>
                  <br>
                </div>
              </div>
            </span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .title {
    color: #4a4a4a;
  }

  .subtitle {
    color: #4a4a4a;
  }
</style>
