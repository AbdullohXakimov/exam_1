<template>
  <button 
    class="my-2 sm:my-0 sm:mx-4 text-gray-500" 
    :class="{'text-red-300': category === activeCategory}"
    @click="filterProjects"
  >
    {{ category }}
  </button>
</template>

<script>
export default {
  name: 'WorkMenu',
  props: {
    category: {
      type: String,
      required: true
    },
    activeCategory: {
      type: String,
      required: true
    }
  },
  methods: {
    filterProjects() {
      this.$emit('filter-projects', this.category);
    }
  }
}
</script>

<style scoped>
</style>
