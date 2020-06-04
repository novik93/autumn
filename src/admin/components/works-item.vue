<template lang="pug">
  card(plain)
    .works-wrapper
      .works__pic
        img(
          :src="imagePath"
        ).works__image
        .works__tag
          tags(
            :tags="tagsArray"
          )
      .works__data
        .works__title {{work.title}}
        .works__text
          p {{work.description}}
        a.works__link {{work.link}}
        .works__btns
          iconedBtn(
            class="is-pencil"
            data-text="Править"
            @click="updateWork"
          )
          iconedBtn(
            class="is-cross"
            data-text="Удалить"
            @click="removeExistedWork"
          )
</template>

<script>
import requests from "@/requests";
import { mapActions, mapMutations } from "vuex";
import { getAbsoluteImgPath } from "@/helpers/pictures";
export default {
  components: {
    iconedBtn: () => import("./iconed-btn"),
    tags: () => import("./tags"),
    card: () => import("./card")
  },
  props: {
    work: Object
  },
  computed: {
    imagePath() {
      return getAbsoluteImgPath(this.work.photo);
    },
    tagsArray() {
      return this.work.techs.split(",");
    }
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    ...mapMutations("works", ["SET_CURRENT_WORK"]),
    updateWork() {
      this.SET_CURRENT_WORK(this.work.id);
      this.$emit("updateWork");
    },
    async removeExistedWork() {
      if (confirm("Удалить работу?") === false) return;
      try {
        const response = await this.removeWork(this.work.id);
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
    }
  }
};
</script>

<style lang="postcss" scoped>
.works-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.works__pic {
  height: 190px;
  position: relative;
}
.works__tag {
  position: absolute;
  bottom: 2px;
  right: 0;
}
.works__image {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.works__data {
  padding: 40px 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.works__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}
.works__text {
  font-weight: 600;
  line-height: 1.88;
  color: rgba(65, 76, 99, 0.5);
  margin-bottom: 20px;
}
.works__link {
  display: block;
  font-weight: 600;
  color: #383bcf;
  margin-bottom: 44px;
  margin-top: auto;
}
.works__btns {
  display: flex;
  justify-content: space-between;
}
</style>