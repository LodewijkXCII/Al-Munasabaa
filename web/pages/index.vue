<template>
  <div>
    <div class="section img-full landing">
      <img
        src="@/assets/img/flower_gold_table.jpg"
        alt="Romantic Blue overview"
        class="top-img"
      />
      <div class="img-full container mx-auto full text-center">
        <h1 class="title lg:text-7xl md:text-6xl gold text-4xl my-4">
          Almunasabaa
        </h1>
        <h2 class="subtitle lg:text-2xl md:text-xl alblue text-l">
          Luxary Catering
        </h2>
        <div class="keywords-front lg:text-4xl md:text-3xl text-2xl my-2">
          <p><span>Great Food | Great Service</span></p>
        </div>
      </div>
    </div>

    <section class="container mx-auto callout" id="wiezijnwij">
      <h2 class="text-4xl font-bold text-center mb-6 mt-6">Wie zijn wij?</h2>
      <div class="flex flex-wrap px-6">
        <div class="w-full lg:w-1/3   md:px-4 lg:px-6 py-5">
          <div class="bg-gray-700 hover:shadow-xl text-center py-6">
            <font-awesome-icon
              :icon="['fas', 'check-double']"
              class="fa-2x gold"
            />
            <h4 class="gold pt-4 pb-1 pm-4 font-bold">Kennis van de markt</h4>
            <p class="py-4 mx-8 text-left">
              Met meer dan 400 feesten op de teller durven wij te stellen dat we
              ruime ervaring opgedaan hebben met het verzorgen van feesten. Wij
              bedienen voornamelijk de Marokkaanse markt maar hebben daarnaast
              ook ervaring met bijvoorbeeld de Turkse en Libanese keuken.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3   md:px-4 lg:px-6 py-5">
          <div class="bg-gray-700 hover:shadow-xl text-center py-6">
            <font-awesome-icon :icon="['fas', 'utensils']" class="fa-2x gold" />
            <h4 class="gold pt-4 pb-1 pm-4 font-bold">
              Achtergrond in horeca
            </h4>
            <p class="py-4 mx-8  text-left">
              Het hoogtepunt van het feest is voor ons als cateraar het moment
              waarop onze gerechten uitgeserveerd worden. Door onze ervaring
              binnen meerdere horecaconcepten weten we feilloos te bieden wat
              een klant verwacht, onze gerechten worden tot in detail
              uitgedacht.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/3   md:px-4 lg:px-6 py-5">
          <div class="bg-gray-700 hover:shadow-xl text-center py-6">
            <font-awesome-icon :icon="['fas', 'users']" class="fa-2x gold" />
            <h4 class="gold pt-4 pb-1 pm-4 font-bold">Familiebedrijf</h4>
            <p class="py-4 mx-8 text-left">
              Al-Munasaba is een echt familiebedrijf, wat maakt dat wij kunnen
              rekenen op een ijzersterke samenwerking onderling en u altijd kunt
              rekenen op ons. Iedereen die komt te werken bij Al-Munasaba wordt
              direct opgenomen in de familie, samen maken wij het feest.
            </p>
          </div>
        </div>
      </div>
      <div class="py-20 px-8 grid grid-cols-6 gap-8">
        <div class="col-span-4 my-auto">
          <h2 class="gold text-4xl font-bold text-center mb-6">Ons verhaal</h2>
          <p class="my-4">
            Welkom bij Al-Munasaba. Om u een beter beeld te geven van wie wij
            zijn en wat wij voor u kunnen betekenen, stellen wij ons graag aan u
            voor. Al Munasaba staat voor een feestelijke gelegenheid, letterlijk
            vertaald vanuit het Arabisch. Bij een goed feest hoort goed en
            lekker eten; en daar komen wij om de hoek kijken. Wij zorgen als
            cateraar voor heerlijk, kwalitatief eten op iedere feestelijke
            gelegenheid.
          </p>
          <p class="my-4">
            Wij zijn een jong en gepassioneerd team met een specialisatie in de
            Marokkaanse keuken en zijn voornamelijk werkzaam in de Marokkaanse
            trouwbranche.
          </p>
        </div>
        <div class="col-span-2 my-auto">
          <img
            alt="Placeholder"
            class="block h-auto w-full"
            src="@/assets/img/over_ons.jpg"
          />
        </div>
      </div>
    </section>
    <!-- END SECTION WIE ZIJN WIJ -->

    <section class="my-8 bg-img" id="pakketten">
      <div class="img-full section-C container mx-auto py-16">
        <h2 class="gold text-4xl font-bold text-center mb-6">
          De verschillende Pakketten
        </h2>
        <div class="grid md:grid-cols-5 p-8 gap-4 m-5">
          <Paketten
            v-for="pakket in paketten.paketten"
            :key="pakket.id"
            :description="pakket.description"
            :gerechten="pakket.gerechten"
            :prijs="pakket.prijs"
            :slug="pakket.slug.current"
            :titel="pakket.titel"
            :decoraties="pakket.decoraties"
            :dranken="pakket.dranken"
            :diner="pakket.diner"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import groq from 'groq'
import sanityClient from '~/sanityClient'

import Paketten from '../components/paketten.vue'

export default {
  head: {
    return: {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    },
    title: 'Al-Munasaba | Luxary Catering',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ]
  },
  components: { Paketten },
  data() {
    return {
      paketten: []
    }
  },
  async created() {
    const query = groq`
  {
    "paketten": *[_type == 'paketten']{ ..., 'decoraties': decoraties[]->, 'gerechten':gerechten[]->}| order(prijs asc)
  }
`
    // const client =
    const response = await sanityClient.fetch(query)
    this.paketten = response
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';
.top-img {
  height: 100vh;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
}

.top-img-half {
  height: 80vh;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: -1;
}

.full {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.half-full {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bg-color-full {
  width: 100%;
  background-color: $blue-opacity;
}

.keywords-front,
.keywords {
  text-align: center;
  position: relative;
}

.bg-img {
  position: relative;
}
.bg-img:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  background-image: url(~assets/img/water_glass_pour.jpg);
  background-position: 50% 0;
  background-size: cover;
}
@media screen and (min-width: 1024px) {
  .keywords {
    text-align: center;
    position: relative;

    &::before,
    &::after {
      content: '';
      border-top: 1px solid white;
      width: 5%;
      position: absolute;
      top: 12px;
    }

    &::before {
      left: 38%;
    }

    &::after {
      right: 38%;
    }

    span {
      display: inline-block;
      position: relative;
    }
  }
  .keywords-front {
    text-align: center;
    position: relative;

    &::before,
    &::after {
      content: '';
      border-top: 3px solid white;
      width: 8%;
      position: absolute;
      top: 20px;
    }

    &::before {
      left: 25%;
    }

    &::after {
      right: 25%;
    }

    span {
      display: inline-block;
      position: relative;
    }
  }
}

.keyfeatures {
  text-align: center;
  display: flex;
}

.feature {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    color: $gold-color;
    margin: 0.5rem;
  }
}
</style>
