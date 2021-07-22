<template>
  <content-card>
    <template v-slot:heading>
      <a name="hobbies" class="pt-32">Hobbies</a></template
    >
    <div>
      <p>
        My biggest hobby is programming and I spend most of my free time for it.
        But besides that I also like learning math and science.
        <br />
        <br />
        I like challenges that require thinking which is why I enjoy solving
        algorithmic problems.
      </p>
      <div class="flex justify-center my-6">
        <img
          src="/big-o.jpg"
          alt="Big O notation graph"
          width="215"
          height="360"
          class="w-full rounded-md shadow-md"
        />
      </div>

      <p>
        My most common form of procrastination is watching random videos on
        YouTube or looking at memes on Reddit.
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
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </content-card>
</template>
