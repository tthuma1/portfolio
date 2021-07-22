<template>
  <div>
    <div
      class="
        bg-gray-50
        rounded-xl
        shadow-xl
        my-10
        py-6
        px-8
        w-full
        md:min-w-[20rem]
        lg:w-96
        xl:w-[32rem]
        dark:bg-truegray-900
      "
    >
      <div class="border-b flex justify-center w-full pb-2">
        <h2
          class="
            text-2xl
            font-bold
            text-blue-700 text-center
            dark:text-blue-400
          "
        >
          <slot name="heading"></slot>
        </h2>
      </div>

      <div class="flex justify-center pt-4 md:text-justify">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
