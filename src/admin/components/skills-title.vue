<template lang="pug">
  .skills-title-container(
    :class="{'blocked': blocked}"
  )

    add-group-name(
      v-if="editmode"
      v-model="newTitle"
      @approve="changeSkillTitle"
      @closeOrRemove="removeCategory"
    )

    .skills-card-title(v-else)  
      .skills-card-title__text {{categoryData.category}}
      .skills-card-title__icon
        iconed-btn(
          class="is-pencil no-words grayscale"
          @click="editmode = true"
        )
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    addGroupName: () => import("./skills-add-group-name"),
    iconedBtn: () => import("./iconed-btn")
  },
  props: {
    categoryData: Object
  },
  data() {
    return {
      editmode: false,
      newTitle: this.categoryData.category,
      blocked: false
    };
  },
  updated() {
    this.newTitle = this.categoryData.category
  },
  methods: {
    ...mapActions("skills", ["updateSkillsGroup", "removeSkillsGroup"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async changeSkillTitle() {
      this.blocked = true;
      try {
        const response = await this.updateSkillsGroup({
          id: this.categoryData.id,
          title: this.newTitle
        });
        this.editmode = false;
        this.showTooltip({
          type: "success",
          text: "Имя категории обновлено"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.blocked = false;
      }
    },
    async removeCategory() {
      if (confirm("Удалить группу?") === false) return;
      this.editmode = false;
      try {
        const response = await this.removeSkillsGroup(this.categoryData.id);
        this.showTooltip({
          type: "success",
          text: "Категория удалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.skills-title-container {
  &.blocked {
    opacity: 0.5;
    filter: grayscale(100%);
    pointer-events: none;
  }
}
.skills-card-title {
  display: flex;
  justify-content: space-between;
}
</style>

