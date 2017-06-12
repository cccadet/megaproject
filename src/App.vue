<script>
  import CcHeader from './components/Header'
  import CcFooter from './components/Footer'
  import nprogressContainer from './components/Common/NprogressContainer.vue'

  export default {
    name: 'app',
    components: {
      CcHeader,
      nprogressContainer,
      CcFooter
    }
  }
</script>

<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <cc-header></cc-header>
    <section class="container is-fullheight">
      <router-view></router-view>
    </section>
    <cc-footer></cc-footer>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .nprogress-container {
    position: fixed !important;
    width: 100%;
    height: 50px;
    z-index: 2048;
    pointer-events: none;

  #nprogress {
    $ color: #48e79a;

  .bar {
    background: $ color;
  }

  .peg {
    box-shadow: 0 0 10px $ color, 0 0 5px $ color;
  }

  .spinner-icon {
    border-top-color: $ color;
    border-left-color: $ color;
  }

  }
  }
</style>
