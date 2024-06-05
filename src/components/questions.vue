<template>
  <div>
    <div class="border-b pb-4 pt-4">
      <div class="flex justify-between items-center ml-10">
        <div class="flex gap-10">
          <p class="text-[#2405F2] text-[26px] leading-[36px]">{{ item.id }}</p>
          <p class="text-primary text-[26px] leading-[36px]">{{ item.question }}</p>
        </div>
        <button @click="toggleAnswer" class="text-primary text-[26px] leading-[36px]">
          {{ isOpen ? 'x' : '+' }}
        </button>
      </div>
      <transition>
        <div v-show="isOpen" class="mx-28 my-4">
          <p class="text-primary text-[20px] leading-[32px]">{{ item.answer }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const openIds = ref([]);
const props = defineProps({
  item: Object,
});

const isOpen = computed(() => openIds.value.includes(props.item.id));

function toggleAnswer() {
  const index = openIds.value.indexOf(props.item.id);
  if (index > -1) {
    openIds.value.splice(index, 1); // Close the answer if it's already open
  } else {
    openIds.value.push(props.item.id); // Open the clicked answer
  }
}
</script>

<style lang="scss" scoped>

</style>
