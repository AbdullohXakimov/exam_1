<template>
  <div>
    <div class="flex gap-x-5 mx-10 my-[12px] items-center">
      <img :src="item2.img" alt="" />
      <p class="text-[18px]" >{{ item2.content }}</p>
    </div>
  </div>
</template>

<script setup>
const props2 = defineProps({
  item2: Object,
});
</script>

<style lang="scss" scoped></style>
