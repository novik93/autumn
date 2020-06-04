<template lang="pug">
  adding-form(
    :title="title"
    :disabled="disableForm"
    buttonsPadding="0 20% 0 0"
    @submit="mode === 'add' ? addNewReview() : editCurrentReview()"
    @cancel="closeForm"
  )
    .reviews__form-content(slot="form-content")
      .reviews__form-userpic
        label.reviews__form-avatar-upload(
          :class="{ 'error' :  validation.hasError('review.photo') }"
        )
          input(
            type="file"
            @change="handlePhotoUpload"
          ).reviews__form-file-input
          .reviews__form-pic
            .reviews__form-avatar-empty(
              :class="{'filled' : renderedAvatar.length}"
              :style="{'backgroundImage' : userAvatarUrl}"
            )
          .reviews__form-addphoto Добавить фото
          .reviews__avatar-error
            errors-tooltip(
              :errorText="validation.firstError('review.photo')"
            )
      .reviews__form-col
        .reviews__form-row
          .reviews__form-block
            app-input(
              title="Имя автора"
              v-model="review.author"
              :errorText="validation.firstError('review.author')"
            )
          .reviews__form-block
            app-input(
              title="Титул автора"
              v-model="review.occ"
              :errorText="validation.firstError('review.occ')"
            )
        .reviews__form-row
          .reviews__form-block
            app-input(
              title="Отзыв"
              field-type="textarea"
              v-model="review.text"
              :errorText="validation.firstError('review.text')"
            )
</template>

<script>
import { mapActions, mapState } from "vuex";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "review.author": value => {
      return Validator.value(value).required("Заполните автора");
    },
    "review.occ": value => {
      return Validator.value(value).required("Укажите роль автора");
    },
    "review.text": value => {
      return Validator.value(value).required("Введите текст отзыва");
    },
    "review.photo": value => {
      return Validator.value(value).required("Вставьте аватар");
    }
  },
  components: {
    appInput: () => import("../components/input"),
    appButton: () => import("../components/button"),
    addingForm: () => import("../components/adding-form"),
    errorsTooltip: () => import("../components/errors-tooltip")
  },
  data() {
    return {
      renderedAvatar: "",
      disableForm: false,
      review: {
        id: 0,
        author: "",
        occ: "",
        text: "",
        photo: ""
      }
    };
  },
  props: {
    title: {
      type: String,
      default: "Новый отзыв"
    },
    mode: {
      type: String,
      default: "add",
      validator: value => ["add", "edit"].includes(value)
    }
  },
  computed: {
    ...mapState("reviews", {
      currentReview: state => state.currentReview
    }),
    userAvatarUrl() {
      return `url(${this.renderedAvatar})`;
    }
  },
  watch: {
    currentReview(value) {
      if (this.mode === "edit") this.fillFormWithCurrentReviewData();
    }
  },
  created() {
    if (this.mode === "edit") this.fillFormWithCurrentReviewData();
  },
  methods: {
    ...mapActions("reviews", ["addReview", "updateReview"]),
    ...mapActions("tooltips", ["showTooltip"]),
    closeForm() {
      this.review = {};
      this.$emit("cancel");
    },
    async editCurrentReview() {
      if (this.$validate() === false) return;
      this.disableForm = true;
      try {
        const response = await this.updateReview(this.review);
        this.$emit("cancel");
        this.showTooltip({
          type: "success",
          text: "Работа обновлена"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.disableForm = false;
        this.validation.reset();
      }
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      this.disableForm = true;
      try {
        const response = await this.addReview(this.review);
        this.clearFormFields();
        this.showTooltip({
          type: "success",
          text: "Отзыв добавлен"
        });
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: error.message
        });
      } finally {
        this.disableForm = false;
        this.valdation.reset();
      }
    },
    clearFormFields() {
      this.review = {};
      this.renderedAvatar = "";
    },
    fillFormWithCurrentReviewData() {
      this.review = { ...this.currentReview };
      this.renderedAvatar = getAbsoluteImgPath(this.currentReview.photo);
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      this.review.photo = file;
      try {
        const renderedResult = await renderer(file);
        this.renderedAvatar = renderedResult;
      } catch (error) {
        this.showTooltip({
          type: "error",
          text: "Ошибка во время обработки файла"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.reviews__form-content {
  display: flex;
  padding-right: 20%;
  @include tablets {
    padding-right: 0;
  }  
  @include phones {
    flex-direction: column;
  }  
}
.reviews__form-addphoto {
  text-align: center;
}
.reviews__form-row {
  display: flex;
  margin-bottom: 40px;
  @include tablets {
    flex-direction: column;
  }  
}
.reviews__form-col {
  flex: 1;
}
.reviews__form-block {
  flex: 1;
  margin-right: 30px;
  @include tablets {
    margin-right: 0;
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
  }  
  &:last-child {
    margin-right: 0;
  }
}
.reviews__form-addphoto {
  color: #383bcf;
  font-weight: 600;
}
.reviews__form-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}
.reviews__form-userpic {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
  @include phones {
    margin-right: 0;
    margin-bottom: 30px;
  }  
}
.reviews__form-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;
  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("filled-user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}
.reviews__form-avatar-upload {
  position: relative;
  &.error {
    .reviews__avatar-error {
      display: block;
    }
  }
}
.reviews__avatar-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}
.reviews__form-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
</style>
