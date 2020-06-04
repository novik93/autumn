<template lang="pug">
.about-page-container
  .container
    .about-page__title
      h1.page-title {{pageTitle}}
      button.about-page__add-new(
        v-if="showAddingCard === false"
        @click="showAddingCard = true"
      ) Добавить группу

  .about-page__content
    .container.container--mobile-wide
      ul.skill-list
        li.skill-list__item(
          v-if="showAddingCard"
          :class="{'loading': loading}"
        )
          add-new-skills-group(
            v-model="title"
            :errorText="validation.firstError('title')"
            @closeOrRemove="close"
            @approve="addSkillsGroup"
          )
        li.skill-list__item(v-for="skillsCategory in skillsCategories")
          skills-card 
            template(slot="title")
              skills-title(
                :categoryData="skillsCategory"
              )
            template(slot="content")
              .skill-list__table
                skills-table(
                  :categoryId="skillsCategory.id"
                )
              .add-new
                add-new-skill(
                  :categoryId="skillsCategory.id"
                )
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    title: value => {
      return Validator.value(value).required("Заполните название");
    }
  },
  components: {
    skillsCard: () => import("./../card"),
    appInput: () => import("./../input"),
    addNewSkillsGroup: () => import("./../skills-add-group"),
    addNewSkill: () => import("./../skills-add-item"),
    skillsTable: () => import("./../skills-items"),
    skillsTitle: () => import("./../skills-title")
  },
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState("skills", {
      skillsCategories: state => state.categories
    })
  },
  data() {
    return {
      showAddingCard: false,
      loading: false,
      title: ""
    };
  },
  created() {
    this.collectCategories();
  },
  methods: {
    ...mapActions("skills", ["storeSkillsGroup", "fetchCategories"]),
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapMutations("skills", ["ADD_SKILLS_CATEGORY"]),
    close() {
      this.showAddingCard = false;
      this.title = "";
    },
    async collectCategories() {
      try {
        await this.fetchCategories();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    async addSkillsGroup() {
      if ((await this.$validate()) === false) return;
      this.loading = true;
      try {
        const response = await this.storeSkillsGroup({
          title: this.title
        });
        this.showAddingCard = false;
        this.title = "";
        this.showTooltip({
          type: "success",
          text: "Группа создана"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.loading = false;
        this.validation.reset();
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.about-page__title {
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  .page-title {
    margin-bottom: 0;
    margin-right: 60px;
    @include phones {
      margin-bottom: 28px;
    }
  }
  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}
.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}
.skills {
  margin-bottom: 60px;
  tr:last-child {
    .skills__cell {
      padding-bottom: 0;
    }
  }
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones {
    margin-left: 0;
  }
}
.skill-list__item {
  width: calc(100% / 2 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  &.loading {
    opacity: 0.5;
    pointer-events: none;
    filter: grayscale(100%);
  }
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 12px;
  }
}
.skill-list__table {
  margin-bottom: 40px;
}
.add-new {
  padding-left: 18%;
  position: relative;
  margin-top: auto;
  @include phones {
    padding-left: 0;
  }
}
</style>

