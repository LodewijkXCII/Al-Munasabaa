<template>
  <footer class="bg-gray-700 py-8">
    <div class="top container mx-auto text-center">
      <img
        class="block w-auto min-h-full mx-auto mb-4"
        src="~/assets/img/al_manusabaa_logo_small.png"
        alt="Workflow"
      />
      <p>Luxary Catering</p>
      <div class="keywords">
        <p>Great Food | Great Service</p>
      </div>
    </div>
    <div class="links text-xs gold container mx-auto text-center my-3">
      <nuxt-link to="/" class="mx-2">Home</nuxt-link>
      <nuxt-link to="/#wiezijnwij" class="mx-2">Wie zijn wij</nuxt-link>
      <nuxt-link to="/#pakketten" class="mx-2">Catering</nuxt-link>
      <nuxt-link to="/portfolio" class="mx-2">Impressie</nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

// //FOOTER//
// footer {
//   background-color: $secondary-color;
//   width: 100%;
//   margin-top: 2rem;
// }

// .footer-wrapper {
//   text-align: center;
//   padding: 1rem 0;
// }

// .footer-wrapper img {
//   height: 75px;
//   width: auto;
//   margin-bottom: 1rem;
// }

// .footer-wrapper p {
//   font-size: 0.8rem;
// }

// .footer-wrapper .links a {
//   margin: 0 0.5rem;
//   font-size: 0.7rem;
// }

// .footer-wrapper .links a:hover {
//   color: $gold-color;
// }
</style>
