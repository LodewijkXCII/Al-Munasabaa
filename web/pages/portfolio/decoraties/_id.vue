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
          {{ pakket.titel }}
        </h1>
      </div>
    </div>
    <div class="container mx-auto grid grid-cols-6 gap-8 my-10">
      <div class="lg:col-span-4 col-span-6 justify-center px-4">
        <h1
          class="gold py-4 text-center font-bold uppercase lg:text-4xl text-2xl"
        >
          Decoratie {{ pakket.titel }}
        </h1>
        <p>{{ pakket.description }}</p>
      </div>
      <div class="col-span-2">
        <img
          :src="pakket.headerimg"
          alt="Romantic Blue overview"
          class="lg:block hidden"
        />
      </div>
    </div>
    <div class="container mx-auto my-10">
      <h2
        class="gold py-4 text-center font-bold uppercase lg:text-4xl text-2xl"
      >
        Impressiefoto's
      </h2>
      <div class="container mx-auto grid grid-cols-6 gap-8 my-10">
        <div
          class="col-span-2"
          v-for="image in pakket.imagesGallery"
          :key="image.index"
        >
          <img :src="image" alt="Romantic Blue overview" />
        </div>
      </div>
    </div>
    <div class="container mx-auto text-center p-8">
      <nuxt-link
        to="/portfolio#decoraties"
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
    "decoraties": *[_type == 'decoratie' && slug.current == "${params}"]{...,  'headerimg': headerimg.asset->url, 'imagesGallery':imagesGallery[].asset->url}
  }
`
    const response = await sanityClient.fetch(query)
    this.pakket = response.decoraties[0]
  }
}
</script>

<style></style>
