<template>
  <div>
    <div class="container">
      <div class="pt-60 md:w-[580px] mx-auto">
        <h1
          class="text-primary text-[36px] md:text-[50px] leading-[46px] md:leading-[64px] font-bold text-center"
        >
          Our Pricing Plans
        </h1>
        <p
          class="text-[#282938] pt-5 pb-14 text-[18px] leading-[28px] font-medium text-center mx-10"
        >
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <!-- Three Grid  -->
      <div class="grid md:grid-cols-3 grid-cols-1 gap-10 mb-28">
        <template v-for="item in pricingElems" :key="item.id">
          <Pricing1 :item="item" />
        </template>
      </div>

      <!-- Frequently Question  -->
      <div class="md:flex my-20 justify-between">
        <div class="md:w-[30%] md:m-0 mx-10 my-10">
          <h2 class="text-[36px] md:text-[50px] leading-[46px] md:leading-[64px] text-primary font-bold">
            Frequently asked questions
          </h2>
          <p class="text-[20px] leading-[32px] text-[#2405F2] mt-5">
            Contact us For More Info
          </p>
        </div>

        <div class="md:flex flex-col md:w-[65%] mx-5 md:m-0">
          <template v-for="item in questions" :key="item.id">
            <Questions :item="item" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Pricing1 from "../components/pricing1.vue";
import Questions from "../components/questions.vue";

const pricingElems = [
  {
    id: 1,
    price: "$299",
    type: "Per Design",
    header: "Landing Page",
    content: "When you’re ready to go beyond prototyping in Figma, ",
    arr1: [
      {
        id: 1,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 2,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 3,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 4,
        img: "Pointer1.png",
        content: "All limited links",
      },
      {
        id: 5,
        img: "Pointer1.png",
        content: "All limited links",
      },
    ],
    button: "Get started",
  },
  {
    id: 2,
    price: "$399",
    type: "Multi Design",
    header: "Website Page",
    content:
      "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    arr1: [
      {
        id: 1,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 2,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 3,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 4,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 5,
        img: "Pointer.png",
        content: "All limited links",
      },
    ],
    button: "Get started",
  },
  {
    id: 3,
    price: "$499+",
    type: "Per Design",
    header: "Complex Project",
    content: "When you’re ready to go beyond prototyping in Figma, ",
    arr1: [
      {
        id: 1,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 2,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 3,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 4,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 5,
        img: "Pointer.png",
        content: "All limited links",
      },
      {
        id: 6,
        img: "Pointer.png",
        content: "Assist and Help",
      },
    ],
    button: "Get started",
  },
];

const questions = [
  {
    id: "01",
    question: "How much time does it take ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "02",
    question: "What is your class naming convention ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "03",
    question: "How do we communicate ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "04",
    question: "I have a bigger project. Can you handle it ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "05",
    question: "What is your class naming convention ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
</script>

<style lang="scss" scoped></style>
