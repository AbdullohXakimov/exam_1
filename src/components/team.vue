<template>
  <div class="bg-white flex flex-col items-center pt-12 pb-10 group">
    <div class="relative mb-6 overflow-hidden rounded-[50%]">
      <img :src="item.img" alt="" />
      <img
        class="absolute transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"
        src="/ellipse2.png"
        alt=""
        style="left: 0; bottom: 0"
      />
      <div
        class="absolute flex gap-3 transition-all duration-500 ease-in-out transform translate-y-5 group-hover:translate-y-[-10px]"
        style="left: 50px; bottom: 5px"
      >
        <img src="/twit.png" alt="someeeeeeeeee" />
        <img src="/twit.png" alt="" />
        <img src="/twit.png" alt="" />
      </div>
    </div>
    <h3 class="font-semibold text-primary text-[26px] leading-[36px]">
      {{ item.name }}
    </h3>
    <p class="pt-2 text-primary text-[20px] leading-[28px]">
      {{ item.position }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
