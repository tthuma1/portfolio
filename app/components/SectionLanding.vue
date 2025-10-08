<template>
  <section
    class="relative z-20 grid justify-center min-h-screen-or-rem grid-rows-2 gap-16 px-5 bg-gray-100 pt-28 bg-lines sm:bg-lines-xl lg:pt-36 lg:px-32 lg:grid-rows-1 lg:grid-cols-2 lg:bg-lines-lg xl:pt-40 xl:bg-lines-xl dark:bg-truegray-850"
  >
    <div class="relative z-20 2xl:flex 2xl:justify-center">
      <!-- Wrapper div needed for 2xl breakpoint -->
      <div>
        <p
          class="text-lg font-light text-gray-600 lg:text-xl dark:text-gray-300"
        >
          Hello, I'm
        </p>
        <h1
          class="mb-2 text-5xl font-bold text-transparent uppercase bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 lg:text-7xl dark:from-blue-500"
        >
          Tim Thuma
        </h1>
        <p class="text-lg text-gray-800 lg:text-xl dark:text-gray-100">
          Student and software developer from Slovenia
        </p>

        <p class="mt-10 mb-8 sm:mb-16">
          I like to develop various <br class="sm:hidden" />
          software with
          <span class="relative inline-block">
            <span
              class="absolute text-2xl font-semibold text-green-600 animate-fade -animation-delay-2000 dark:text-green-400"
              >C++</span
            >
            <span
              class="absolute text-2xl font-semibold text-green-600 opacity-0 animate-fade dark:text-green-400"
              >Python</span
            >
            <span
              class="text-2xl font-semibold text-green-600 opacity-0 animate-fade animation-delay-2000 dark:text-green-400"
              >Web languages</span
            >
          </span>
        </p>
      </div>

      <!-- <button class="hover:-translate-y-0.5 transform transition">
          <a
            href="#about"
            class="px-4 py-3 font-semibold bg-blue-500 rounded-lg shadow-lg  text-gray-50 hover:bg-blue-600 hover:text-white"
            >About Me</a
          >
        </button> -->

      <!-- Blobs -->
      <!-- <div
          class="absolute z-0 w-32 h-32 bg-blue-500 rounded-full  blur-xl right-32 bottom-12 opacity-40 animate-move animation-delay-5000"
        ></div>
        <div
          class="absolute z-0 w-32 h-32 bg-green-600 rounded-full opacity-50  blur-2xl right-64 bottom-8 animate-move"
        ></div> -->
    </div>

    <!-- <NuxtImg
        src="/lines.svg"
        alt="Vector lines"
        class="absolute bottom-0 left-0 z-0 hidden w-auto h-screen opacity-50  lg:block"
        loading="lazy"
      /> -->

    <!-- Card with portrait -->
    <div
      class="row-span-3 flex items-center justify-center relative h-80 mt-4 max-w-md lg:max-h-96 lg:h-auto lg:row-span-1 xl:max-h-[30rem]"
    >
      <div
        class="absolute inset-0 w-full h-full transform bg-green-400 shadow-xl rounded-2xl -rotate-6 lg:h-5/6 dark:bg-green-500"
      ></div>
      <div
        class="absolute inset-0 flex items-center justify-center w-full h-full transform bg-blue-500 shadow-xl rounded-2xl rotate-2 lg:h-5/6 dark:bg-blue-600"
      >
        <NuxtImg
          src="/icon_full.png"
          alt="My icon"
          width="208"
          height="208"
          class="rounded-full shadow-2xl w-52 h-52"
          loading="lazy"
        />
        <!-- <div class="relative w-full lg:h-full">
            <NuxtImg
              src="/portrait.png"
              alt="My portrait"
              class="absolute bottom-0"
              loading="lazy"
            />
          </div> -->
      </div>
    </div>
  </section>
</template>
