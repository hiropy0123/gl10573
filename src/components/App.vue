<template>
  <!-- <div class="app">
    <h1>Hello Vue.js!</h1>
    <sub-component message="My Counter for Vue.js with Babel"></sub-component>
  </div> -->
<div class="tokamachi_wrap">
  <!-- SNS -->
  <SNS />
  <First />
  <!-- END first_view -->

  <section id="road_map">
    <figure class="road_map-image">
      <img src="images/road_map.png" alt="行程表">
    </figure>
  </section>
  <!-- END road_map -->

  <HowToUse />
  <!-- END how_to_use -->

  <Accommodation />
  <!-- END accommodations -->

  <Experiences />
  <!-- END experiences -->

  <Plan />
  <!-- END plans -->

  <section id="googlemap">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d203787.7806227369!2d138.55886926067578!3d37.05309646516565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f19.1!3m3!1m2!1s0x5ff5fad6320bfa21%3A0xcfbf07e9a6f8dede!2z5paw5r2f55yM5Y2B5pel55S65biC!5e0!3m2!1sja!2sjp!4v1523347072809" width="950" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>
  <!-- END googlemap -->

</div>
<!-- END tokamachi_wrap -->
</template>

<script>
  import SNS from './SNS.vue';
  import First from './First.vue';
  import HowToUse from './HowToUse';
  import Accommodation from './Accommodation';
  import Experiences from './Experiences';
  import Plan from './Plan';

  export default {
    name: 'app',
    components: {
      SNS,
      First,
      HowToUse,
      Accommodation,
      Experiences,
      Plan
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal;
  }
  .app {
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
</style>