<template>
  <div class="flex flex-col max-w-xl min-h-screen px-5 pt-4 pb-10 mx-auto">
    <div>
      <label for="cipher" class="block mb-2 font-semibold">Šifrirano</label>
      <textarea
        id="cipher"
        v-model="cipher"
        rows="9"
        spellcheck="false"
        class="w-full p-3 font-mono text-sm border shadow-lg resize-y rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-neutral-900 dark:border-gray-600"
      ></textarea>
    </div>

    <div class="flex justify-center my-5 space-x-6">
      <button
        @click="decode"
        type="button"
        aria-label="Dešifriraj"
        class="p-3 rounded-md btn-primary"
      >
        <!-- Heroicon name: outline/arrow-down -->
        <svg
          class="w-5 h-5"
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
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <button
        @click="encode"
        type="button"
        aria-label="Šifriraj"
        class="p-3 rounded-md btn-primary"
      >
        <!-- Heroicon name: outline/arrow-up -->
        <svg
          class="w-5 h-5"
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
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>

    <div>
      <label for="plain" class="block mb-2 font-semibold">Dešifrirano</label>
      <textarea
        id="plain"
        v-model="plain"
        rows="9"
        spellcheck="false"
        class="w-full p-3 font-mono text-sm border shadow-lg resize-y rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-neutral-900 dark:border-gray-600"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ALPHABET = 'ABCČDEFGHIJKLMNOPRSŠTUVZŽ'

const plain = ref('')
const cipher = ref('')

// Atbash is its own inverse, so one function covers both directions.
function atbash(text) {
  return [...text.normalize('NFC').toUpperCase()]
    .map((ch) => {
      const i = ALPHABET.indexOf(ch)
      return i === -1 ? ch : ALPHABET[ALPHABET.length - 1 - i]
    })
    .join('')
}

function encode() {
  plain.value = plain.value.toUpperCase()
  cipher.value = atbash(plain.value)
}

function decode() {
  cipher.value = cipher.value.toUpperCase()
  plain.value = atbash(cipher.value)
}

useSeoMeta({
  title: 'Umorjenke',
  robots: 'noindex, nofollow',
})
</script>
