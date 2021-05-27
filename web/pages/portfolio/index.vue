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
        <h3 class="gold text-xl font-bold text-center mb-3">
          Moderne gerechten, traditionele kwaliteit.
        </h3>
        <p class="my-4">
          Als vanzelfsprekend werken wij met enkel verse en pure ingrediënten
          welke wij daags voor uw gelegenheid inkopen bij onze vaste
          distributeurs. Met grote zorg en met behoud van de pure smaken worden
          deze door onze koks op traditionele wijze verwerkt tot een heerlijk
          smakenpallet. Wij hebben onze traditionele gerechten qua opmaak in een
          modern jasje voor u gestoken en bieden naast traditionele gerechten
          een scala aan meer eigentijdse variaties. Laat u verrassen door de
          overweldigende smaken en de prachtige opmaak van onze gerechten.
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
      <h2 class="gold text-4xl font-bold text-center mb-6">Decoratielijnen</h2>
      <p class="my-4">
        Bij het opzetten van onze decoratielijnen proberen wij onze eigen stijl
        te behouden. Iedere lijn representeert elegantie en klasse op
        simplistische wijze. Hierdoor komen zelfs de kleinste details tot hun
        recht. Met de verscheidene kleurschakeringen en accessoires binnen ons
        assortiment, is er voor ieder wat wils. Maar op aanvraag kunnen wij ook
        hierin aanvullingen of maatwerk leveren. Onze stijl laten wij met alle
        liefde aansluiten op uw wensen.
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
