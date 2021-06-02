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
          Pakket {{ pakket.titel }}
        </h1>
        <h4>&euro; {{ pakket.prijs }} (exlusief BTW)</h4>
        <p>{{ pakket.description }}</p>
        <p>{{ pakket.dranken }}</p>
      </div>
      <div class="col-span-2">
        <img
          src="@/assets/img/flower_gold_table.jpg"
          alt="Romantic Blue overview"
          class="lg:block hidden"
        />
      </div>
    </div>
    <div class="container mx-auto my-10">
      <h2
        class="gold py-4 text-center font-bold uppercase lg:text-4xl text-2xl"
      >
        Keuze uit de volgende decoratie lijnen:
      </h2>

      <div class="container mx-auto grid md:grid-cols-4 p-8 gap-8">
        <div
          class="bg-gray-700"
          v-for="decoratie in pakket.decoraties"
          :key="decoratie._id"
        >
          <img
            :src="imageUrlFor(pakket.headerimg)"
            alt=""
            class="w-full h-48 sm:h-56 object-cover"
          />

          <div
            class="lg:text-2xl text-xl font-bold gold uppercase text-center mx-auto my-8"
          >
            {{ decoratie.titel }}
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto my-10">
      <h2
        class="gold py-4 text-center font-bold uppercase lg:text-4xl text-2xl"
      >
        Keuze uit de volgende gerechten:
      </h2>
      <div
        class="container mx-auto grid md:grid-cols-4 p-8 gap-8"
        v-for="(gang, name) in gerechten"
        :key="gang.id"
      >
        <h4
          class="gold py-4 text-center font-bold uppercase text-2xl mx-auto self-center"
        >
          {{ name }}:
        </h4>
        <div class="bg-gray-700" v-for="gerecht in gang" :key="gerecht._id">
          <img
            src="https://picsum.photos/400/600/?random"
            alt=""
            class="w-full h-48 sm:h-56 object-cover"
          />

          <div
            class="lg:text-2xl text-xl font-bold gold uppercase text-center mx-auto my-8"
          >
            {{ gerecht.titel }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'

import _ from 'lodash'

import imageUrlBuilder from '@sanity/image-url'

const imageBuilder = imageUrlBuilder(sanityClient)

export default {
  data() {
    return {
      pakket: {},
      gerechten: []
    }
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source)
    }
  },
  async mounted() {
    const params = this.$route.params.id
    console.log(params)

    const query = `{  
    "paketten": *[_type == 'paketten' && slug.current == "${params}"]{ ..., 'decoraties': decoraties[]->, 'gerechten':gerechten[]->}
  }
`

    try {
      console.log(newQuery)
      const { data } = await sanityClient.fetch(query)
      console.log(data)
      this.pakket = data.paketten[0]
      const gerechten = data.paketten[0].gerechten
      this.gerechten = _.groupBy(gerechten, 'course')
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style></style>
