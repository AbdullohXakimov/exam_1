<template>
  <div
    :class="
      item.id == 2 ? `bg-primary text-white` : `bg-[#F4F6FC] text-primary`
    "
    class="rounded-2xl flex flex-col"
  >
    <div class="flex items-center gap-3 pt-10 px-10">
      <h2 class="text-[40px] leading-[56px] font-bold">
        {{ item.price }}
      </h2>
      <p
        :class="item.id == 2 ? `text-[#FCD980]` : `text-[#2405F2]`"
        class="text-[18px] leading-[28px]"
      >
        {{ item.type }}
      </p>
    </div>
    <h3 class=" h-84 text-[26px] leading-[36px] font-semibold px-10 py-6">
      {{ item.header }}
    </h3>
    <p
      :class="item.id == 1 ? `pb-[62px]` : item.id == 2 ? `pb-9` : `pb-3`"
      class="text-[18px] leading-[28px] font-semibold px-10 opacity-[70%]"
    >
      {{ item.content }}
    </p>
    <template v-for="item2 in item.arr1" :key="item2.id">
      <InsidePricing :item2="item2" />
    </template>
    <button
      :class="
        item.id != 2
          ? 'bg-[#282938] text-white hover:bg-black hover:text-[#ccc]'
          : ' text-black bg-[#f0c863] hover:bg-[#a0843e8f]'
      "
      class="m-16 px-16 py-4 rounded-[41px] font-bold text-[20px] leading-[32px]"
    >
      {{ item.button }}
    </button>
  </div>
</template>

<script setup>
import InsidePricing from "./InsidePricing.vue";

const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
