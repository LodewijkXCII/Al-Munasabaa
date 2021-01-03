<template>
  <section>
    <div class="">
      <img
        src="@/assets/img/flower_gold_table.jpg"
        alt="Romantic Blue overview"
        class="top-img-half"
      />
      <div class="img-full container mx-auto half-full text-center">
        <h1 class="title lg:text-7xl md:text-6xl text-4xl">
          {{ $route.params.id.toUpperCase() }}
        </h1>
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-6 gap-8 my-10">
      <div class="lg:col-span-6 col-span-6 justify-center px-4">
        <h1
          class="gold py-4 text-center font-bold uppercase lg:text-4xl text-2xl"
        >
          {{ $route.params.id }}
        </h1>
        <p>{{ pakket.description }}</p>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 gap-4 py-4 px-8 container mx-auto">
      <div class="bg-gray-700" v-for="gerecht in pakket" :key="gerecht._id">
        <img
          :src="gerecht.headerimg"
          alt=""
          class="w-full h-48 sm:h-56 object-cover"
        />

        <div class="text-2xl font-bold gold uppercase text-center mx-auto my-8">
          {{ gerecht.titel }}
        </div>
      </div>
    </div>
    <div class="container mx-auto text-center p-8">
      <nuxt-link
        to="/portfolio#gerechten"
        class="md:auto bg-gold hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 hover:bg-gold-darker"
      >
        Terug
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'

export default {
  data() {
    return {
      pakket: {}
    }
  },
  async mounted() {
    const params = this.$route.params.id

    const query = groq`
  {
    "gerechten": *[_type == 'gerechten' && course == "${params}"]{...,  'headerimg': headerimg.asset->url}
  }
`
    const response = await sanityClient.fetch(query)
    console.log(response)
    this.pakket = response.gerechten
  }
}
</script>

<style></style>
