<template lang="pug">
  .skills-table-container
    table.skills
      skills-single-item(
        v-for="skill in skills",
        v-if="categoryId === skill.category"
        :key="skill.id"
        :skill="skill"
      )
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsSingleItem: () => import("./skills-single-item")
  },
  props: {
    categoryId: Number
  },
  computed: {
    ...mapState('skills', {
      skills: state => state.skills
    })
  },
  created() {
    this.fetchSkills();
  },
  methods: {
    ...mapActions('skills', ['fetchSkills'])
  }
};
</script>


<style lang="postcss" scoped>
.skills {
  width: 100%;
}
</style>