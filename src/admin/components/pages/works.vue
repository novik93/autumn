<template lang="pug">
  .works-section
    .container
      h1.page-title Блок "Мои работы"
    .works-container 
      .container.container--mobile-wide
        add-new-work-form(
          v-if="showForm"
          :mode="mode"
          @closeForm="showForm = false"
        )
        ul.works 
          li.works__item
            add-new-button(
              @click="openAddingForm"
            )
          li.works__item( v-for = "work in works")
            works-item(
              :work="work"
              @updateWork="updateWork"
            )

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  components: {
    addNewButton: () => import("../../components/add-new"),
    addNewWorkForm: () => import("../../components/works-add"),
    worksItem: () => import("../../components/works-item")
  },
  data() {
    return {
      showForm: false,
      mode: "add"
    };
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  methods: {
    ...mapActions("works", ["fetchWorks"]),
    ...mapActions("tooltips", ["showTooltip"]),
    openAddingForm() {
      this.showForm = true;
      this.mode = "add";
    },
    async collectWorks() {
      try {
        await this.fetchWorks();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Ошибка при загрузке работ"
        });
      }
    },
    updateWork() {
      this.mode = "edit";
      this.showForm = true;
    }
  },
  created() {
    this.collectWorks();
  }
};
</script>


<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");
.works{
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  @include phones{
    margin-left: 0;
  } 
}
.works__item{
  width: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  @include tablets {
    width: calc(100% / 2 - 30px);
  }
  
  @include phones {
    width: 100%;
    margin-left: 0;
    margin-bottom: 15px;
  }
}
</style>