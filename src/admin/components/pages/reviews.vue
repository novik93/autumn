<template lang="pug">
  .reviews-section
    .container
      h1.page-title Блок "Мои отзывы"
    .reviews-container
      .container.container--mobile-wide
        .reviews__form(v-if="showAddingForm")    
          add-new-review(
            :title="formTitle"
            :mode="mode"
            @cancel="showAddingForm = false"
          )
        ul.reviews
          li.reviews__item
            add-new(
              @click="addNewReview"
            )
          li.reviews__item(v-for="review in reviews")
            reviews-item(
              :review="review"
              @updateWork="updateWork"
            )
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    pageTitle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mode: "",
      showAddingForm: false
    };
  },
  components: {
    addNew: () => import("../add-new"),
    addNewReview: () => import("../reviews-add"),
    // reviewsItem: () => import("components/reviews-item.vue")
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    }),
    formTitle() {
      switch (this.mode) {
        case "add":
          return "Добавить отзыв";
        case "edit":
          return "Изменить отзыв";
        default:
          return "";
          console.warn("не верное значение поля mode в reviews");
      }
    }
  },
  created() {
    this.collectReviews();
  },
  methods: {
    ...mapActions("reviews", ["fetchReviews"]),
    ...mapActions("tooltips", ["showTooltip"]),
    updateWork() {
      this.mode = "edit";
      this.showAddingForm = true;
    },
    addNewReview() {
      this.mode = "add";
      this.showAddingForm = true;
    },
    async collectReviews() {
      try {
        await this.fetchReviews();
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Не удалось загурузить отзывы"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../../styles/mixins.pcss";
.reviews {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}
.reviews__item {
  margin-left: 30px;
  width: calc(100% / 3 - 30px);
  margin-bottom: 30px;
  @include tablets {
    width: calc(100% / 2 - 30px);
  }
  @include phones {
    width: 100%;
    margin-bottom: 15px;
  }
}
.reviews__form {
  margin-bottom: 30px;
}
</style>
