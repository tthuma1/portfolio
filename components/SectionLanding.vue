<template>
  <section
    class="
      min-h-screen
      grid grid-rows-2
      justify-center
      gap-16
      pt-28
      px-5
      bg-gray-100
      relative
      z-20
      bg-lines
      sm:bg-lines-xl
      lg:pt-36 lg:px-32 lg:grid-rows-1 lg:grid-cols-2 lg:bg-lines-lg
      xl:pt-40 xl:bg-lines-xl
      dark:bg-truegray-850
    "
  >
    <div class="z-20 relative 2xl:flex 2xl:justify-center">
      <!-- Wrapper div needed for 2xl breakpoint -->
      <div>
        <p
          class="text-lg font-light text-gray-600 lg:text-xl dark:text-gray-300"
        >
          Hello, I'm
        </p>
        <h1
          class="
            uppercase
            font-bold
            text-5xl
            mb-2
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-blue-600
            to-green-500
            lg:text-7xl
            dark:from-blue-500
          "
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
              class="
                absolute
                animate-fade
                -animation-delay-5000
                text-2xl text-green-600
                font-semibold
                dark:text-green-400
              "
              >C++</span
            >
            <span
              class="
                absolute
                opacity-0
                animate-fade
                text-2xl text-green-600
                font-semibold
                dark:text-green-400
              "
              >Python</span
            >
            <span
              class="
                opacity-0
                animate-fade
                animation-delay-5000
                text-2xl text-green-600
                font-semibold
                dark:text-green-400
              "
              >Web languages</span
            >
          </span>
        </p>
      </div>

      <!-- <button class="hover:-translate-y-0.5 transform transition">
          <a
            href="#about"
            class="
              bg-blue-500
              rounded-lg
              text-gray-50
              px-4
              py-3
              font-semibold
              shadow-lg
              hover:bg-blue-600 hover:text-white
            "
            >About Me</a
          >
        </button> -->

      <!-- Blobs -->
      <!-- <div
          class="
            absolute
            bg-blue-500
            w-32
            h-32
            blur-xl
            rounded-full
            right-32
            bottom-12
            opacity-40
            z-0
            animate-move
            animation-delay-5000
          "
        ></div>
        <div
          class="
            absolute
            bg-green-600
            w-32
            h-32
            blur-2xl
            rounded-full
            right-64
            bottom-8
            opacity-50
            z-0
            animate-move
          "
        ></div> -->
    </div>

    <!-- <img
        src="/lines.svg"
        alt="Vector lines"
        class="
          hidden
          absolute
          h-screen
          w-auto
          left-0
          bottom-0
          opacity-50
          z-0
          lg:block
        "
      /> -->

    <!-- Card with portrait -->
    <div
      class="
        row-span-3
        flex
        items-center
        justify-center
        relative
        h-80
        mt-4
        max-w-md
        lg:max-h-96 lg:h-auto lg:row-span-1
        xl:max-h-[30rem]
      "
    >
      <div
        class="
          absolute
          inset-0
          w-full
          h-full
          bg-green-400
          rounded-2xl
          shadow-xl
          transform
          -rotate-6
          lg:h-5/6
          dark:bg-green-500
        "
      ></div>
      <div
        class="
          absolute
          inset-0
          flex
          justify-center
          items-center
          w-full
          h-full
          bg-blue-500
          rounded-2xl
          shadow-xl
          transform
          rotate-2
          lg:h-5/6
          dark:bg-blue-600
        "
      >
        <img
          src="/icon_full.png"
          alt="My icon"
          width="208"
          height="208"
          class="w-52 h-52 rounded-full shadow-2xl"
        />
        <!-- <div class="relative w-full lg:h-full">
            <img
              src="/portrait.png"
              alt="My portrait"
              class="absolute bottom-0"
            />
          </div> -->
      </div>
    </div>
  </section>
</template>
