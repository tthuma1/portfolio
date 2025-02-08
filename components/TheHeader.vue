<template>
  <header
    class="fixed top-0 z-40 w-full px-7 py-4 shadow-md bg-gray-50 md:px-10 lg:px-28 xl:px-32 dark:bg-truegray-900"
  >
    <nav class="flex justify-between md:justify-around">
      <!-- Left side -->
      <nuxt-link
        to="/#"
        class="relative text-xl font-bold text-blue-500 hover:text-blue-600 group lg:text-2xl dark:hover:text-blue-400"
      >
        <div
          class="absolute z-0 w-12 h-12 transition transform bg-blue-300 rounded-full dark:bg-blue-600 opacity-10 -top-3 -left-2 group-hover:translate-y-2 group-hover:-translate-x-1 lg:h-14 lg:w-14"
        ></div>
        <span class="relative z-10">Tim Thuma</span>
        <div
          class="absolute z-0 w-10 h-10 transition transform bg-blue-300 rounded-full dark:bg-blue-600 opacity-10 -bottom-1 -right-2 group-hover:-translate-y-2 group-hover:translate-x-1 lg:h-12 lg:w-12"
        ></div>
      </nuxt-link>

      <!-- Hamburger toggle on mobile -->
      <div class="flex items-center md:hidden">
        <button
          @click="$emit('toggleDark')"
          type="button"
          aria-label="dark mode toggle"
          class="p-2 text-gray-500 rounded-full hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-truegray-800 dark:hover:text-gray-200"
        >
          <button-theme></button-theme>
        </button>

        <button
          @click="toggle"
          class="p-2 ml-2 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 dark:hover:bg-truegray-800 dark:hover:text-gray-300"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Right side on desktop -->
      <div class="items-center hidden md:flex">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.href"
          class="mx-2 font-semibold text-gray-700 text-sm hover:text-gray-500 hover:underline dark:text-gray-200 dark:hover:text-gray-50 lg:mx-3.5 xl:mx-7"
        >
          {{ link.text }}
        </a>
        <a
          href="#contact"
          class="px-4 py-2 mx-2 text-sm font-semibold bg-blue-600 rounded-full text-gray-50 hover:text-white hover:underline hover:bg-blue-500"
        >
          Contact Me
        </a>

        <!-- Dark mode toggle desktop -->
        <button
          @click="$emit('toggleDark')"
          type="button"
          aria-label="dark mode toggle"
          class="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-truegray-800"
        >
          <button-theme></button-theme>
        </button>
      </div>
    </nav>

    <!-- Mobile navigation -->
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="duration-100 ease-in"
      leaves-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="isOpen"
        class="absolute inset-x-0 top-0 z-20 p-2 transition origin-top-right transform md:hidden"
      >
        <div
          class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 dark:bg-truegray-900"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            <nuxt-link
              to="/#"
              class="relative text-xl font-bold text-blue-500 hover:text-blue-600 group dark:hover:text-blue-400"
            >
              <div @click="toggle">
                <div
                  class="absolute z-0 w-10 h-10 transition transform bg-blue-300 rounded-full opacity-10 -top-2 -left-1 group-hover:translate-y-2 group-hover:-translate-x-1"
                ></div>
                <span class="relative z-10">Tim Thuma</span>
                <div
                  class="absolute z-0 w-8 h-8 transition transform bg-blue-300 rounded-full opacity-10 -bottom-2 -right-2 group-hover:-translate-y-2 group-hover:translate-x-1"
                ></div>
              </div>
            </nuxt-link>

            <div>
              <button
                @click="$emit('toggleDark')"
                type="button"
                class="p-2 text-gray-500 rounded-full hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-truegray-800 dark:hover:text-gray-200"
              >
                <button-theme></button-theme>
              </button>
              <button
                @click="toggle"
                type="button"
                class="p-2 ml-2 mr-1 text-gray-400 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400 dark:hover:text-gray-300 dark:hover:bg-truegray-800"
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3 space-y-1">
            <a
              v-for="link in links"
              :key="link.to"
              :href="link.href"
              @click="toggle"
              class="block px-3 py-2 font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50 dark:text-gray-50 dark:hover:bg-truegray-800"
            >
              {{ link.text }}
            </a>

            <a
              @click="toggle"
              href="#contact"
              class="block px-4 py-2 font-semibold text-center bg-blue-600 rounded-lg text-gray-50 hover:text-white hover:bg-blue-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import links from '@/assets/links'

export default {
  data() {
    return {
      links,
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
