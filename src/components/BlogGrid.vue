<template>
  <div>
    <div>
        <img class="w-full" :src="item.img" alt="" />
        <p class="md:text-[17px] md:leading-[28px] text-[14px] leading-[24px]  mt-4 mb-2 opacity-[70%] text-primary font-medium" >{{ item.data }}</p>
        <h3 class="text-[18px] leading-[28px] md:text-[26px] md:leading-[36px]  mt-4 mb-2  text-primary text-justify  font-bold" >
        {{ item.text }}
        </h3>
        <p class="text-[14px] leading-[24px] md:text-[17px] md:leading-[28px] font-medium opacity-[70%] text-primary" >{{ item.content }}</p>
        <button class="flex items-center gap-2 mt-5 leading-[28px] font-medium text-[18px]   text-primary" >
            <span class="">Read more</span>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938"/>
            </svg>
        </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
</script>

<style lang="scss" scoped></style>
