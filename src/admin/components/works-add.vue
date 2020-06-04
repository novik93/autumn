<template lang="pug">
  adding-form(
    :title="editFormTitle"
    @cancel="cancelAdding"
    @submit="mode === 'add' ? addNewWork() : editWork()"
    :disabled="disableForm"
  )
    template(slot="form-content")
      .edit-form__container
        .edit-form__col
          .edit-form__btn(
            v-if="renderedPhoto.length"
          )
            .edit-form__pic(
              :style="{'backgroundImage' : workPhotoUrl}"
            )
            label.edit-form__change-preview
              a.edit-form__change-pic Изменить превью
              input(type="file" @change="handlePhotoUpload").edit-form__preview-input

          label.edit-form__picture(
            v-else
            :class="{'error' : validation.hasError('work.photo')}"
          )
            .edit-form__picture-text
              | Перетащите либо загрузите изображения
            app-button(
              elem="file"
              text="Загрузить"
              @change="handlePhotoUpload"
            )
            .edit-form__file-error
              errors-tooltip(
              )
        .edit-form__col
          .edit-form__row
            app-input(
              title="Название"
              v-model="work.title"
              :errorText="validation.firstError('work.title')"
            )
          .edit-form__row
            app-input(
              title="Ссылка"
              v-model="work.link"
              :errorText="validation.firstError('work.link')"
            )
          .edit-form__row
            app-input(
              title="Описание"
              fieldType="textarea"
              v-model="work.description"
              :errorText="validation.firstError('work.description')"
            )
          .edit-form__row
            add-tags(
              v-model="work.techs"
              @removeTag="value => this.work.techs = value"
              :errorText="validation.firstError('work.techs')"
            )
</template>



<script>
import { mapActions, mapState } from "vuex";
import { renderer, getAbsoluteImgPath } from "@/helpers/pictures";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "work.title": value => {
      return Validator.value(value).required("Заполните название");
    },
    "work.techs": value => {
      return Validator.value(value).required("Заполните технологии");
    },
    "work.link": value => {
      return Validator.value(value).required("Заполните ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Заполните описание");
    },
    "work.photo": value => {
      return Validator.value(value).required("Вставьте файл");
    }
  },
  props: {
    mode: {
      type: String,
      default: "add",
      validator: value => ["add", "edit"].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    appInput: () => import("../components/input"),
    addTags: () => import("../components/add-tags"),
    addingForm: () => import("../components/adding-form"),
    appButton: () => import("../components/button"),
    errorsTooltip: () => import("../components/errors-tooltip")
  },
  data() {
    return {
      disableForm: this.disabled,
      renderedPhoto: "",
      work: {
        id: 0,
        title: "",
        techs: "",
        link: "",
        photo: "",
        description: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      currentWork: state => state.currentWork
    }),
    workPhotoUrl() {
      return `url(${this.renderedPhoto})`;
    },
    editFormTitle() {
      switch (this.mode) {
        case "edit":
          return "Редактирование работы";
        case "add":
          return "Добавление работы";
      }
    }
  },
  created() {
    if (this.mode === "edit") {
      this.fillFormWithCurrentWorkData();
    }
  },
  watch: {
    currentWork(value) {
      if (this.mode === "edit") {
        this.fillFormWithCurrentWorkData();
      }
    },
    mode(value) {
      if (value === "add") {
        this.clearFormFields();
      }
    }
  },
  methods: {
    ...mapActions("works", ["storeWork", "updateWork"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async editWork() {
      if ((await this.$validate()) === false) return;
      this.disableForm = true;
      try {
        const response = await this.updateWork(this.work);
        this.$emit("closeForm");
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
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      this.disableForm = true;
      try {
        const response = await this.storeWork(this.work);
        this.clearFormFields();
        this.showTooltip({
          text: "Работа создана",
          type: "success"
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
    cancelAdding() {
      this.clearFormFields();
      this.$emit("closeForm");
    },
    clearFormFields() {
      this.work = {};
      this.renderedPhoto = "";
    },
    fillFormWithCurrentWorkData() {
      this.work = { ...this.currentWork };
      this.renderedPhoto = getAbsoluteImgPath(this.currentWork.photo);
    },
    async handlePhotoUpload(e) {
      const file = e.target.files[0];
      this.work.photo = file;
      try {
        const rendererResult = await renderer(file);
        this.renderedPhoto = rendererResult;
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
@import url("../../styles/mixins.pcss");
.edit-form {
  margin-bottom: 30px;
}
.edit-form__row {
  margin-bottom: 30px;
}
.edit-form__container {
  display: flex;
  @include tablets {
    flex-direction: column;
    padding: 0 16%;
  }
  @include phones {
    padding: 0;
  }
}
.edit-form__change-pic {
  color: #383bcf;
  font-weight: 600;
}
.edit-form__picture {
  display: block;
  min-height: 276px;
  border: dashed 1px #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24%;
  cursor: pointer;
  position: relative;
  &.error {
    border-color: red;
    .edit-form__file-error {
      display: block;
    }
  }
}
.edit-form__file-error {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  display: none;
}
.edit-form__picture-text {
  margin-bottom: 22px;
  color: rgba(65, 76, 99, 0.5);
  line-height: 2.12;
  font-weight: 600;
  text-align: center;
}
.edit-form__btn {
  text-align: center;
}
.edit-form__pic {
  margin-bottom: 30px;
  height: 260px;
  background: center center no-repeat / cover;
}
.edit-form__change-preview {
  position: relative;
}
.edit-form__preview-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
.edit-form__img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.edit-form__col {
  flex: 1;
  margin-right: 30px;
  @include tablets {
    margin-right: 0;
    margin-bottom: 50px;
  }
  &:first-child {
    max-width: 46%;
    @include tablets {
      max-width: 100%;
    }
  }
  &:last-child {
    margin-right: 0;
    @include tablets {
      margin-bottom: 0px;
    }
  }
}
</style>