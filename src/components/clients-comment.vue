<template>
  <div class="md:w-3/4 md:pl-[120px] pr-3">
    <h2 class="md:leading-[48px] text-[28px] md:text-[36px] text-[#282938] font-medium mx-5 md:mx-0">
      {{ clientsComment[id].text }}
    </h2>
    <div class="flex justify-between items-center pt-10 pb-20">
      <div class="flex gap-4 items-center">
        <img class="" :src="clientsComment[id].image" alt="" />
        <div>
          <h3 class="leading-[32px] text-[20px] text-[#282938]">
            {{ clientsComment[id].fullName }}
          </h3>
          <p class="leading-[28px] text-[16px] text-[#282938]">
            {{ clientsComment[id].position }}
          </p>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <button class="py-2 px-3 pr-4 rounded-[100%] bg-white" @click="previous">
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M11.5859 -1.23626e-07L13 3.21951L3.96947 10.9106L13 18.7805L11.5859 22L9.06922e-07 11.626L1.06329e-06 9.8374L11.5859 -1.23626e-07Z"
              fill="#282938"
            />
          </svg>
        </button>
        <button class="py-2 px-3 pl-4 rounded-[100%] bg-[#5239FA]" @click="next">
          <svg
            width="13"
            height="22"
            viewBox="0 0 13 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41412 22L0 18.7805L9.03053 11.0894L0 3.21951L1.41412 0L13 10.374V12.1626L1.41412 22Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const clientsComment = [
  {
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Xojiakbar Mamiroff",
    position: "Vice President",
    image: "mask.png",
  },
  {
    text: '"The best agency we’vDFGJDSAKHFEe worked with so far. They understand our product and are able to add new features with a great focus."',
    fullName: "Mirahmedov Abubakiir",
    position: "Vice President",
    image: "mask.png",
  },
];

const id = ref(0);

const next = () => {
  if (id.value < clientsComment.length - 1) {
    id.value++;
  }
};

const previous = () => {
  if (id.value > 0) {
    id.value--;
  }
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>