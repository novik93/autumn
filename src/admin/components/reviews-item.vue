<template lang="pug">
  card
    template(slot="title")
      user(
        :user="constructUserObj(review)"
      )
    .reviews__content(slot="content")
      .reviews__content-text 
        p {{review.text}}
      .reviews__btns
        iconedBtn(
          class="is-pencil"
          data-text="Править"
          @click="updateWork"
        )
        iconedBtn(
          class="is-cross"
          data-text="Удалить"
          @click="removeExistedReview"
        )

</template>

<script>
import { getAbsoluteImgPath } from "@/helpers/pictures";
import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    card: () => import("../components/card"),
    user: () => import("../components/user"),
    iconedBtn: () => import("../components/iconed-btn")
  },
  props: {
    review: Object
  },
  methods: {
    ...mapActions("reviews", ["removeReview"]),
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapMutations("reviews", ["SET_CURRENT_REVIEW"]),
    updateWork() {
      this.SET_CURRENT_REVIEW(this.review.id);
      this.$emit("updateWork");
    },
    async removeExistedReview() {
      if (confirm('Удалить отзыв?') === true)
      try {
        const response = await this.removeReview(this.review.id);
        this.showTooltip({
          type: "success",
          text: "Работа удалена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      }
    },
    constructUserObj(data) {
      return {
        name: data.author,
        occ: data.occ,
        avatar: getAbsoluteImgPath(data.photo)
      };
    }
  }
};
</script>

<style lang="postcss" scoped>
.reviews__content {
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.reviews__content-text {
  line-height: 1.88;
  font-weight: 600;
}
.reviews__btns {
  display: flex;
  justify-content: space-between;
}
</style>