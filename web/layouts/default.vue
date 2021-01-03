<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';

.gold {
  color: $gold-color;
  &-darker {
    color: darken($color: $gold-color, $amount: 5);
  }
}

.bg-gold {
  background-color: $gold-color;
  &-darker {
    background-color: darken($color: $gold-color, $amount: 5);
  }
}

.border-gold {
  border-color: $gold-color;
}
</style>
