<template>
  <div>
    <div class="bg-[#F4F6FC]">
      <div class="container flex py-40 items-center justify-center flex-col text-center">
        <p class="text-gray-500 text-[18px] leading-[28px] mb-2">
          What we created
        </p>
        <h1 class="text-gray-800 text-[56px] font-bold leading-[74px] pb-5">
          Our Work Portfolio
        </h1>
        <div class="w-[60%]">
          <p class="text-gray-600 text-[18px] leading-[28px] mb-6">
            We help teams create great digital products by providing them with
            tools and technology to make the design-to-code process universally
            accessible.
          </p>
        </div>
      </div>
    </div>

    <div class="container py-20">
      <div class="flex flex-col sm:flex-row justify-center mb-10">
        <WorkMenu 
          v-for="(item, index) in menuButtons" 
          :key="index" 
          :category="item"
          :active-category="activeSearch"
          @filter-projects="filterProjects"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Projects v-for="(item, index) in filteredProjects" :key="index" :project="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Projects from '../components/projects.vue';
import WorkMenu from '../components/work-menu.vue';

export default {
  name: "Portfolio",
  components: {
    Projects,
    WorkMenu
  },
  data() {
    return {
      activeSearch: 'All',
      menuButtons: ['All', 'UI Design', 'Webflow Design', 'Figma Design'],
      projects: [
        {
          id: 1,
          category: 'UI Design',
          image: "/Cover.png",
          projectName: "Template 1",
          description: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."
        },
        {
          id: 2,
          category: 'Webflow Design',
          image: "/Cover.png",
          projectName: "Template 2",
          description: "The horizon was sharp and clear, and the sky had ceased to twinkle."
        },
        {
          id: 3,
          category: 'Figma Design',
          image: "/Cover.png",
          projectName: "Template 3",
          description: "We could see the curvature of the earth, and the sky had ceased to twinkle."
        },
        {
          id: 4,
          category: 'Figma Design',
          image: "/Cover.png",
          projectName: "Template 3",
          description: "We could see the curvature of the earth, and the sky had ceased to twinkle."
        },
        {
          id: 5,
          category: 'UI Design',
          image: "/Cover.png",
          projectName: "Template 3",
          description: "We could see the curvature of the earth, and the sky had ceased to twinkle."
        },
        {
          id: 6,
          category: 'Figma Design',
          image: "/Cover.png",
          projectName: "Template 3",
          description: "We could see the curvature of the earth, and the sky had ceased to twinkle."
        }
      ]
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeSearch === 'All') {
        return this.projects;
      } else {
        return this.projects.filter(project => project.category === this.activeSearch);
      }
    }
  },
  methods: {
    filterProjects(category) {
      this.activeSearch = category;
    }
  }
};
</script>

<style scoped>
</style>
