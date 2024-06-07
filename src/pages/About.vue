<template>
  <div>
    <div class="container">
      <!-- Intro_1 -->
      <div class="md:flex justify-between items-center pt-52 pb-32">
        <div class="md:w-1/2 md:pr-36">
          <h3 class="text-primary text-[20px] leading-[32px] text-center md:text-start">About us</h3>
          <h1 class="text-primary md:text-[56px] font-bold md:leading-[74px] pb-5 text-[30px] text-center md:text-start leading-[40px] ">
            Our designs solve problems
          </h1>
          <p class="text-primary text-[18px] leading-[28px] md:m-0 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div>
          <img class="w-full" src="/first.png" alt="" />
        </div>
      </div>

      <!-- Intro_2 -->
      <div class="grid grid-cols-1 md:grid-cols-2 bg-[#F4F5F5] mb-20">
        <div class="py-16 pl-14 pr-16" >
          <h2 class="text-primary text-[40px] font-bold leading-[56px]">
            Goal focussed
          </h2>
          <p class="text-primary text-[18px] leading-[28px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="py-16  px-16 md:pr-24" >
          <h2 class="text-primary text-[40px] font-bold leading-[56px]">
            Continuous improvement
          </h2>
          <p class="text-primary text-[18px] leading-[28px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="md:col-span-2">
            <img class="w-full" src="/about2.png" alt="">
        </div>
      </div>
    </div>
    <div class="bg-[#F4F6FC]">
        <div class="container">
            <h2 class="text-primary text-[50px] leading-[64px] font-bold text-center pt-28 pb-8" >Meet our team</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 pb-28">
                <template v-for="item in teamMembers" :key="item.id" >
                    <Team :item="item" />
                </template>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import Team from '../components/team.vue';

const teamMembers = [
    {
        id:1,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
    {
        id:2,
        img: "/man.png",
        name: "John Smith",
        position: "CTO"
    },
    {
        id:3,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
    {
        id:4,
        img: "/man.png",
        name: "John Smith",
        position: "CEO"
    },
]
</script>

<style lang="scss" scoped></style>
