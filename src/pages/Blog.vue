<template>
  <div>
    <div class="container pt-52">
      <h1
        class="text-[50px] font-bold leading-[64px] text-center text-primary w-[825px] mx-auto"
      >
        A UX Case Study on Creating a Studious Environment for Students
      </h1>
      <p
        class="text-[18px] font-semibold leading-[28px] text-center text-primary mb-10 mt-6"
      >
        Posted on 27th January 2021
      </p>
      <img class="w-full" src="/blog1.png" alt="" />
      <p
        class="text-[18px] leading-[28px] text-center text-primary mt-10 mb-6 w-[825px] mx-auto"
      >
        Apparently we had reached a great height in the atmosphere, for the sky
        was a dead black, and the stars had ceased to twinkle. By the same
        illusion which lifts the horizon of the sea to the level of the
        spectator on a hillside.
      </p>
      <button
        class="text-[#2405F2] text-center w-full text-[18px] leading-[28px] mb-24"
      >
        Read more
      </button>
      <h2 class="text-[50px] leading-[64px] font-bold text-center text-primary mb-10">
        Our Blog
      </h2>
      <div class="grid grid-cols-3 gap-x-10 gap-y-14 mb-20">
        <template v-for="item in gridDatas" :key="item.id">
          <BlogGrid :item="item" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import BlogGrid from "../components/BlogGrid.vue";

const gridDatas = [
  {
    id: 1,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 2,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 3,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 4,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 5,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
  {
    id: 6,
    img: "/blogGrid.png",
    data: "27 Jan 2021",
    text: "How one Webflow user grew his single person consultancy from $0-100K in 14 months",
    content:
      "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
  },
];
</script>

<style lang="scss" scoped></style>
