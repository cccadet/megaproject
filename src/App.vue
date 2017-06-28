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
    },
    data: () => ({
      stitle: 'Megaproject',
      ssubtitle: 'Subtitle'
    }),
    updated () {
      this.loadUpdateTitle()
    },
    methods: {
      loadUpdateTitle: function () {
        this.stitle = this.$store.state.stitle.stitle
        this.ssubtitle = this.$store.state.ssubtitle.ssubtitle
      }
    }
  }
</script>

<template>
  <div id="app">
    <nprogress-container></nprogress-container>
    <cc-header></cc-header>
    <!-- Slide -->
    <section class="hero is-primary is-medium header-image ">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2">
            {{stitle}}
          </h1>
          <h2 class="subtitle is-5">
            {{ssubtitle}}
          </h2>
        </div>
      </div>
    </section>
    <!-- End Slide -->
    <div class="background">
      <section class="container is-fullheight ">
        <router-view></router-view>
      </section>
    </div>
    <br>
    <cc-footer></cc-footer>
  </div>
</template>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

  .header-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.89)), url('assets/img/slide1.jpg');
    margin-top: 5px;
  }

  .subtitle {
    font-weight: 300;
    margin-bottom: 20px;
    word-break: break-word;
    color: #C1C1C1;
  }

  .background {
    background-color: #F0F0F0;
  }

  .footer-section {
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem 1.5rem 1.5rem;
  }

  .subtitle-form{
    color: rgba(0,0,0,.44);
    font-size: small;
    font-weight: 500;
  }

</style>
