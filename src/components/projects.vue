<template>
  <div class="bg-white p-6 rounded-lg duration-200 lg:shadow-sm lg:hover:shadow-md cursor-pointer">
    <img :src="project.image" :alt="project.projectName" class="w-full mb-4 rounded" />
    <h3 class="text-xl font-bold mb-2">{{ project.projectName }}</h3>
    <p class="text-gray-600 mb-4">
      {{ project.description }}
    </p>
    <a href="#" class="text-blue-600 hover:underline">View Portfolio -></a>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
