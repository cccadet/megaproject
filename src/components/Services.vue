<script>

  export default {
    name: 'Services',
    data: () => ({
      stitle: 'Serviços',
      ssubtitle: 'Prestamos serviços de qualidade em diferentes áreas de conhecimento'
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
        <!-- Automação -->
        <div class="column is-half">
            <span class="box">
              <div class="columns ">
                <div class="column is-5">
                  <div class="image is-1by1">
                    <img src="../assets/img/services/automacao.jpg">
                  </div>
                </div>
                <div class="column is-7 ">
                  <div class="title is-4 has-text-muted">
                    <h3 class="title is-5">
                      <a>
                        <i class="fa fa-cog fa-spin fa-fw"></i>
                        <span class="sr-only"></span>
                        <strong>Automação</strong>
                      </a>
                    </h3>
                  </div>
                  <hr>
                  <ul class="has-text-left">
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Automação de Centrais CIP</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Automação de processos</p></li>
                    <li><p><i class="fa fa-wrench"
                              aria-hidden="true"></i>&nbsp&nbsp Atualização de Sistemas Obsoletos</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Especificação de Hardware</p></li>
                    <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Especificação de Software</p></li>
                  </ul>
                  <br>
                </div>
              </div>
            </span>
        </div>
        <!-- Gerenciamento de Projetos -->
        <div class="column is-half">
          <span class="box">
            <div class="columns ">
              <div class="column is-5">
                <div class="image is-1by1">
                  <img src="../assets/img/services/ger-projetos.jpg">
                </div>
              </div>
              <div class="column is-7 ">
                <div class="title is-4 has-text-muted">
                  <h3 class="title is-5">
                    <a>
                      <i class="fa fa-cog fa-spin fa-fw"></i>
                      <span class="sr-only"></span>
                      <strong>Gerenciamento de Projetos</strong>
                    </a>
                  </h3>
                </div>
                <hr>
                <ul class="has-text-left">
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Cronogramas</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Equalização de Orçamentos</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Memorial Descritivo</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Controle de Entrega de Materiais</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Definição de Equipamentos</p></li>
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
                    <img src="../assets/img/services/coor-obra.jpg">
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
        <!-- Montagem Mecânica -->
        <div class="column is-half">
          <span class="box">
            <div class="columns ">
              <div class="column is-5">
                <div class="image is-1by1">
                  <img src="../assets/img/services/montagem.png">
                </div>
              </div>
              <div class="column is-7 ">
                <div class="title is-4 has-text-muted">
                  <h3 class="title is-5">
                    <a>
                      <i class="fa fa-cog fa-spin fa-fw"></i>
                      <span class="sr-only"></span>
                      <strong>Montagem Mecânica</strong>
                    </a>
                  </h3>
                </div>
                <hr>
                <ul class="has-text-left">
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Fabricação e Instalação de Suportes e Plataformas</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Tubulações de Amônia ou Vapor</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Tubulações em Aço</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Isolamento Térmico</p></li>
                </ul>
                <br>
              </div>
            </div>
          </span>
        </div>

        <!-- Conservação de Equipamentos -->
        <div class="column is-half">
          <span class="box">
            <div class="columns ">
              <div class="column is-5">
                <div class="image is-1by1">
                  <img src="../assets/img/services/plano-manut.jpg">
                </div>
              </div>
              <div class="column is-7 ">
                <div class="title is-4 has-text-muted">
                  <h3 class="title is-5">
                    <a>
                      <i class="fa fa-cog fa-spin fa-fw"></i>
                      <span class="sr-only"></span>
                      <strong>Conservação de Equipamentos</strong>
                    </a>
                  </h3>
                </div>
                <hr>
                <ul class="has-text-left">
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Planos de Lubrificação</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Planos de Manutenção</p></li>
                  <li><p><i class="fa fa-wrench" aria-hidden="true"></i>&nbsp&nbsp Adequação de Estoque de Segurança</p></li>
                </ul>
                <br>
              </div>
            </div>
          </span>
        </div>
        <!--- --->
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
