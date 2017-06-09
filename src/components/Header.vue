<template>
  <div class="hero-head">
    <div class="container">
      <nav class="nav has-shadow">
        <div class="nav-left">
          <a href="/" class="nav-item hero-brand">
            <img
              src="../assets/img/logo.jpg"
              alt="MegaProject"
              title="MegaProject"
              class="">
          </a>
        </div>
        <div class="nav-right nav-menu">
          <router-link :to="{ name: 'Hello' }" class="nav-item is-tab"><i class="fa fa-home"></i>&nbspHome</router-link>
          <router-link :to="{ name: 'Hello' }" class="nav-item is-tab"><i class="fa fa-table"></i>&nbspServiços</router-link>
          <router-link :to="{ name: 'Hello' }" class="nav-item is-tab"><i class="fa fa-table"></i>&nbspProjetos</router-link>
          <router-link :to="{ name: 'Hello' }" class="nav-item is-tab"><i class="fa fa-envelope"></i>&nbspContato</router-link>
        </div>
      </nav>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style scoped>
  .nav {
    height: 6.25rem
  }
  .nav-item img {
    max-height: 6.25rem;
  }

</style>
