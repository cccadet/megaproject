<script>
  export default ({
    name: 'Contacts',
    data: () => ({
      email: '',
      nome: '',
      mensagem: '',
      stitle: 'Contato',
      ssubtitle: 'Deixe sua dúvida que entraremos em contato'
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
  })
</script>

<template>
  <div>
    <br>
    <div class="columns">
      <div class="column is-half">
        <div class="box">
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">
                  <a href="/" class="">
                    <img
                      src="../assets/img/logo.jpg"
                      alt="MegaProject"
                      title="MegaProject"
                      class="">
                  </a>
                </h1>
                <h2 class="subtitle-contact">
                  <p><strong>Endereço:</strong> Rua Sete de Abril, nº100, Languiru - Teutônia-RS</p>
                  <p><strong>Email: </strong>contato@megaproject.com.br</p>
                  <p><strong>Fone: </strong>+55 51 98118-9789</p>
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <h2 class="subtitle">
            <strong>Formulário de Contato:</strong>
          </h2>
          <form>
            <div class="field">
              <label class="label">Nome
              </label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" autofocus v-model="nome" v-validate="'required'"
                       :class="{'input': true, 'is-danger': errors.has('nome') }" type="text" placeholder="Informe seu Nome" name="nome" required>
                <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
                <span class="icon is-small is-right">
                <i v-if="errors.has('nome')" class="fa fa-warning"></i>
                <i v-else="errors.has('nome')" class="fa fa-check "></i>
              </span>
              </p>
              <p><span v-show="errors.has('nome')" class="subtitle-form help is-danger">{{ errors.first('nome') }}</span></p>
            </div>
            <div class="field">
              <label class="label">E-mail
              <p>
                <span class="subtitle-form">Informe um e-mail valido ex. john@gmail.com</span>
              </p>
              </label>
              <p class="control has-icons-left has-icons-right">
                <input class="input" v-model="email" v-validate="'required|email'"
                       :class="{'input': true, 'is-danger': errors.has('email') }" type="email"
                       placeholder="Informe seu E-mail" name="email" required>
                <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
                <span class="icon is-small is-right">
                <i v-if="errors.has('email')" class="fa fa-warning"></i>
                <i v-else="errors.has('email')" class="fa fa-check"></i>
              </span>
              </p>
              <p><span v-show="errors.has('email')" class="subtitle-form help is-danger">{{ errors.first('email') }}</span></p>
            </div>
            <div class="field">
              <label class="label">Mensagem</label>
              <p class="control">
                <textarea class="textarea" v-model="mensagem" v-validate="'required'"
                          :class="{'input': true, 'is-danger': errors.has('mensagem') }"  placeholder="Digite sua Mensagem" name="mensagem" required></textarea>
              <p><span v-show="errors.has('mensagem')" class="subtitle-form help is-danger">{{ errors.first('mensagem') }}</span></p>
              </p>
            </div>
            <div class="field is-grouped">
              <p class="control">
                <input type="submit" class="button is-primary" value="Enviar">
              </p>
              <p class="control">
                <button class="button is-link">Cancel</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
