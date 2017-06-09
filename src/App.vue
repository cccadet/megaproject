<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <cc-header></cc-header>
    <div>
        <div class="container is-fluid">
          <cc-container></cc-container>
          <router-view></router-view>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
  import CcHeader from './components/Header'
  import CcContainer from './components/Container.vue'
  import nprogressContainer from './components/Common/NprogressContainer.vue'

  export default {
    name: 'app',
    components: {
      CcHeader,
      CcContainer,
      nprogressContainer
    }
  }
</script>

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
