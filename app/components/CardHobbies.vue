<template>
  <ContentCard>
    <template v-slot:heading>
      <a name="hobbies" class="pt-32">Hobbies</a></template
    >
    <div>
      <p>
        My biggest hobby is programming, and I spend most of my free time on it.
        But besides that, I also like learning math and science.
        <br />
        <br />
        I like challenges that require thinking, which is why I enjoy solving
        algorithmic problems.
      </p>
      <div class="flex justify-center my-6">
        <NuxtImg
          src="/big-o.jpg"
          alt="Big O notation graph"
          height="360"
          class="w-full rounded-md shadow-md"
          loading="lazy"
        />
      </div>
      <p>
        My most common form of procrastination is watching random videos on YouTube.
      </p>
      <div class="flex justify-center my-6">
        <!-- <lazy-video-yt></lazy-video-yt> -->
        <iframe
          class="w-full h-52"
          width="208"
          height="300"
          src="https://www.youtube-nocookie.com/embed/T38JRqe5tYQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </ContentCard>
</template>
