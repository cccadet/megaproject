<script>
  export default {
    name: 'Contacts'
  }
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
                  MegaProject
                </h1>
                <h2 class="subtitle">
                  Hero subtitle
                </h2>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="column is-half">
        <div class="box">
          <h2 class="subtitle">
            <strong>Entre em Contato!</strong>
          </h2>
          </section>
          <form >
          <div class="field">
            <label class="label">Nome</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="text" placeholder="Informe seu Nome" name="nome" required>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-warning"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <label class="label">E-mail</label>
            <p class="control has-icons-left has-icons-right">
              <input class="input is-danger" type="email" placeholder="Informe seu E-mail" name="email" required>
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fa fa-warning"></i>
              </span>
            </p>
            <p class="help is-danger">This email is invalid</p>
          </div>
          <div class="field">
            <label class="label">Mensagem</label>
            <p class="control">
              <textarea class="textarea" placeholder="Mensagem" name="mensagem" required></textarea>
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
