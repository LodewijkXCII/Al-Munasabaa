<template>
  <section>
    <div class="">
      <img
        src="~/assets/img/flower_gold_table.jpg"
        alt="Romantic Blue overview"
        class="top-img-half"
      />
      <div class="img-full container half-full mx-auto">
        <h1 class="title lg:text-7xl md:text-6xl text-4xl text-center">
          Contact
        </h1>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 container mx-auto my-20">
      <div class="p-6 mr-2">
        <h1 class="text-4xl sm:text-5xl dark:text-white gold">
          Get in touch
        </h1>
        <p class="text-normal text-lg sm:text-2xl font-medium mt-2">
          Fill in the form to start a conversation
        </p>

        <div class="flex items-center mt-8">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            Argon 30, 4751 XC Oud Gastel
          </div>
        </div>

        <div class="flex items-center mt-4 ">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-40">
            +31 (0)165 786 869
          </div>
        </div>

        <div class="flex items-center mt-2">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <div class="ml-4 text-md tracking-wide font-semibold w-50">
            info@al-munasabaa.com
          </div>
        </div>
      </div>

      <form
        class="p-6 flex flex-col justify-center"
        method="POST"
        data-netlify="true"
      >
        <div class="flex flex-col">
          <label for="name" class="hidden">Naam</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Naam"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <div class="flex flex-col mt-2">
          <label for="email" class="hidden">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <div class="flex flex-col mt-2">
          <label for="tel" class="hidden">Nummer</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Telefoon nummer"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="md:w-32 bg-gold hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 hover:bg-gold-darker"
        >
          Verstuur
        </button>
      </form>
    </div>
    <div class="container mx-auto" id="offerte">
      <h2 class="gold">Offerte aanvragen</h2>
      <form class="p-6 flex flex-col justify-center">
        <div class="flex flex-col">
          <label for="name" class="hidden">Naam</label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Naam"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <div class="flex flex-col mt-2">
          <label for="email" class="hidden">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <div class="flex flex-col mt-2">
          <label for="tel" class="hidden">Telefoon nummer</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Telefoon nummer"
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-gold focus:outline-none"
          />
        </div>

        <button
          type="submit"
          class="md:w-32 bg-gold hover:bg-gold-darker text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-gold-darker transition ease-in-out duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script>
// TODO SEND EMAIL WITH NODEMAILER
export default {}
</script>

<style></style>
