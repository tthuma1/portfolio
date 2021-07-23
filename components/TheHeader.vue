<template>
  <header
    class="
      py-4
      px-8
      bg-gray-50
      shadow-md
      fixed
      top-0
      w-full
      z-40
      md:px-10
      lg:px-28
      xl:px-32
      dark:bg-truegray-900
    "
  >
    <nav class="flex justify-between items-center">
      <!-- Left side -->
      <nuxt-link
        to="/#"
        class="
          font-bold
          text-xl text-blue-500
          hover:text-blue-600
          relative
          group
          lg:text-2xl
          dark:hover:text-blue-400
        "
      >
        <div
          class="
            z-0
            rounded-full
            bg-blue-300
            h-12
            w-12
            absolute
            transition
            transform
            opacity-10
            -top-3
            -left-2
            group-hover:translate-y-2 group-hover:-translate-x-1
            lg:h-14 lg:w-14
          "
        ></div>
        <span class="z-10 relative">Tim Thuma</span>
        <div
          class="
            z-0
            rounded-full
            h-10
            w-10
            bg-blue-300
            absolute
            transition
            transform
            opacity-10
            -bottom-4
            -right-4
            group-hover:-translate-y-2 group-hover:translate-x-1
            lg:h-12 lg:w-12
          "
        ></div>
      </nuxt-link>

      <!-- Hamburger toggle on mobile -->
      <div class="flex items-center md:hidden">
        <button
          @click="$emit('toggleDark')"
          type="button"
          aria-label="dark mode toggle"
          class="
            p-2
            rounded-full
            text-gray-500
            hover:text-gray-600 hover:bg-gray-100
            dark:text-gray-300
            dark:hover:bg-truegray-800
            dark:hover:text-gray-200
          "
        >
          <button-theme></button-theme>
        </button>

        <button
          @click="toggle"
          class="
            rounded-md
            p-2
            ml-2
            text-gray-400
            hover:text-gray-500 hover:bg-gray-100
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400
            dark:hover:bg-truegray-800 dark:hover:text-gray-300
          "
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
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
      <div class="hidden items-center md:flex">
        <a
          v-for="link in links"
          :key="link.to"
          :href="link.href"
          class="
            mx-2
            font-semibold
            text-gray-700 text-sm
            hover:text-gray-500 hover:underline
            dark:text-gray-200 dark:hover:text-gray-50
            lg:mx-3.5
            xl:mx-7
          "
        >
          {{ link.text }}
        </a>
        <a
          href="#contact"
          class="
            font-semibold
            text-gray-50 text-sm
            bg-blue-600
            py-2
            px-4
            mx-2
            rounded-full
            hover:text-white hover:underline hover:bg-blue-500
          "
        >
          Contact Me
        </a>

        <!-- Dark mode toggle desktop -->
        <button
          @click="$emit('toggleDark')"
          type="button"
          aria-label="dark mode toggle"
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-truegray-800"
        >
          <button-theme></button-theme>
        </button>
      </div>
    </nav>

    <!-- Mobile navigation -->
    <transition
      enter-active-class="duration-150 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leaves-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="
          absolute
          z-20
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-md
            bg-white
            ring-1 ring-black ring-opacity-5
            overflow-hidden
            dark:bg-truegray-900
          "
        >
          <div class="px-5 pt-4 flex items-center justify-between">
            <nuxt-link
              to="/#"
              class="
                font-bold
                text-xl text-blue-500
                hover:text-blue-600
                relative
                group
                dark:hover:text-blue-400
              "
            >
              <div @click="toggle">
                <div
                  class="
                    z-0
                    rounded-full
                    bg-blue-300
                    h-10
                    w-10
                    absolute
                    transition
                    transform
                    opacity-10
                    -top-2
                    -left-1
                    group-hover:translate-y-2 group-hover:-translate-x-1
                  "
                ></div>
                <span class="z-10 relative">Tim Thuma</span>
                <div
                  class="
                    z-0
                    rounded-full
                    bg-blue-300
                    h-8
                    w-8
                    absolute
                    transition
                    transform
                    opacity-10
                    -bottom-2
                    -right-2
                    group-hover:-translate-y-2 group-hover:translate-x-1
                  "
                ></div>
              </div>
            </nuxt-link>

            <div>
              <button
                @click="$emit('toggleDark')"
                type="button"
                class="
                  p-2
                  rounded-full
                  text-gray-500
                  hover:text-gray-600 hover:bg-gray-100
                  dark:text-gray-300
                  dark:hover:bg-truegray-800
                  dark:hover:text-gray-200
                "
              >
                <button-theme></button-theme>
              </button>
              <button
                @click="toggle"
                type="button"
                class="
                  rounded-md
                  p-2
                  mr-1
                  ml-2
                  text-gray-400
                  hover:text-gray-500 hover:bg-gray-100
                  focus:outline-none
                  focus:ring-2
                  focus:ring-inset
                  focus:ring-blue-400
                  dark:hover:text-gray-300 dark:hover:bg-truegray-800
                "
              >
                <span class="sr-only">Close main menu</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="h-6 w-6"
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
              class="
                block
                py-2
                px-3
                rounded-md
                font-medium
                text-gray-700
                hover:text-gray-900 hover:bg-gray-50
                dark:text-gray-50 dark:hover:bg-truegray-800
              "
            >
              {{ link.text }}
            </a>

            <a
              @click="toggle"
              href="#contact"
              class="
                block
                font-semibold
                text-gray-50
                bg-blue-600
                py-2
                px-4
                rounded-lg
                text-center
                hover:text-white hover:bg-blue-500
              "
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
