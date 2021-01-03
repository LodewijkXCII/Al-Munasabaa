<template>
  <div class="bg-gray-700">
    <div class="px-10 py-6 mb-4 text-center">
      <div class="text-2xl font-bold gold mb-4 uppercase">
        {{ titel }}
      </div>
      <p class="text-lg text-weight-600 my-4">
        &euro; {{ prijs.toFixed(2) }} <span class="text-xs">/per persoon</span>
        <span class="text-xs block">(excl BTW)</span>
      </p>
    </div>
    <div class="px-10 mb-8">
      <div class="my-4">
        <h4 class="gold font-bold text-lg ">
          Decoratielijn naar keuze:
        </h4>
        <ul>
          <li v-for="decoratie in decoraties" :key="decoratie._id">
            {{ decoratie.titel }}
          </li>
        </ul>
      </div>
      <div class="my-4" v-if="dranken">
        <h4 class="gold font-bold text-lg">
          Drank gedurende het evenement:
        </h4>
        <p>{{ dranken }}</p>
      </div>
      <div class="my-4" v-if="diner">
        <h4 class="gold font-bold text-lg">Diner naar keuze:</h4>
        <p>{{ diner }}</p>
      </div>
    </div>
    <button class="w-full text-lg h-16 text-white font-extrabold bg-gold">
      <nuxt-link :to="`/pakketten/${slug}`">Bekijk details</nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    gerechten: Array,
    prijs: Number,
    slug: String,
    titel: String,
    decoraties: Array,
    dranken: String,
    diner: String
  },
  data() {
    return {
      pakketten: []
    }
  }
}
</script>

<style></style>
