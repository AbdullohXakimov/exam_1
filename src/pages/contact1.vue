<template>
  <div  >
    <h3 class="text-black text-[20px] leading-[32px] font-medium py-2" >{{ item.name }}</h3>
    <input class="py-4 pl-4 w-[380px] border rounded-[8px] "  type="text" :placeholder="item.text" />
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
