<template>
  <section>
    <div>
      <img
        src="@/assets/img/flower_gold_table.jpg"
        alt="Romantic Blue overview"
        class="top-img-half"
      />
      <div class="img-full container half-full mx-auto">
        <h1 class="title lg:text-7xl md:text-6xl text-4xl text-center">
          Portfolio
        </h1>
      </div>
    </div>

    <div class="py-20 px-8 container mx-auto" id="gerechten">
      <div class="col-span-4 my-auto">
        <h2 class="gold text-4xl font-bold text-center mb-6">Gerechten</h2>
        <p class="my-4">
          Welkom bij Al-Munasaba. Om u een beter beeld te geven van wie wij zijn
          en wat wij voor u kunnen betekenen, stellen wij ons graag aan u voor.
          Al Munasaba staat voor een feestelijke gelegenheid, letterlijk
          vertaald vanuit het Arabisch. Bij een goed feest hoort goed en lekker
          eten; en daar komen wij om de hoek kijken. Wij zorgen als cateraar
          voor heerlijk, kwalitatief eten op iedere feestelijke gelegenheid.
        </p>
        <p class="my-4">
          Wij zijn een jong en gepassioneerd team met een specialisatie in de
          Marokkaanse keuken en zijn voornamelijk werkzaam in de Marokkaanse
          trouwbranche.
        </p>

        <div class="grid grid-cols-3 gap-4">
          <div class="bg-gray-700">
            <img
              src="https://picsum.photos/400/600/?random"
              alt=""
              class="w-full h-48 sm:h-56 object-cover"
            />

            <div
              class="text-2xl font-bold gold uppercase text-center mx-auto my-8"
              @click="show == 1"
            >
              <nuxt-link to="/portfolio/gerechten/voor-hoofdgerecht">
                Voor- Hoofdgerechten
              </nuxt-link>
            </div>
          </div>
          <div class="bg-gray-700">
            <img
              src="https://picsum.photos/400/600/?random"
              alt=""
              class="w-full h-48 sm:h-56 object-cover"
            />

            <div
              class="text-2xl font-bold gold uppercase text-center mx-auto my-8"
              @click="show == 1"
            >
              <nuxt-link to="/portfolio/gerechten/desserts">
                Desserts
              </nuxt-link>
            </div>
          </div>
          <div class="bg-gray-700">
            <img
              src="https://picsum.photos/400/600/?random"
              alt=""
              class="w-full h-48 sm:h-56 object-cover"
            />

            <div
              class="text-2xl font-bold gold uppercase text-center mx-auto my-8"
              @click="show == 1"
            >
              <nuxt-link to="/portfolio/gerechten/overige">
                Overige
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-20 px-8 container mx-auto" id="decoraties">
      <h2 class="gold text-4xl font-bold text-center mb-6">Decoraties</h2>
      <p class="my-4">
        Welkom bij Al-Munasaba. Om u een beter beeld te geven van wie wij zijn
        en wat wij voor u kunnen betekenen, stellen wij ons graag aan u voor. Al
        Munasaba staat voor een feestelijke gelegenheid, letterlijk vertaald
        vanuit het Arabisch. Bij een goed feest hoort goed en lekker eten; en
        daar komen wij om de hoek kijken. Wij zorgen als cateraar voor heerlijk,
        kwalitatief eten op iedere feestelijke gelegenheid.
      </p>
      <p class="my-4">
        Wij zijn een jong en gepassioneerd team met een specialisatie in de
        Marokkaanse keuken en zijn voornamelijk werkzaam in de Marokkaanse
        trouwbranche.
      </p>
      <div class="grid grid-cols-4 gap-4">
        <div
          class="bg-gray-700"
          v-for="decoratie in decoraties"
          :key="decoratie._id"
        >
          <img
            src="https://picsum.photos/400/600/?random"
            alt=""
            class="w-full h-48 sm:h-56 object-cover"
          />

          <div
            class="text-2xl font-bold gold uppercase text-center mx-auto my-8"
          >
            <nuxt-link :to="`/portfolio/decoraties/${decoratie.slug.current}`">
              {{ decoratie.titel }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'

export default {
  data() {
    return {
      show: 0,
      decoraties: [],
      gerechten: []
    }
  },
  async created() {
    const query = groq`
  {
    "decoraties": *[_type == 'decoratie'],
    "gerechten": *[_type == 'gerechten']
  }
`
    const response = await sanityClient.fetch(query)
    this.gerechten = response.gerechten
    this.decoraties = response.decoraties
  }
}
</script>

<style></style>
