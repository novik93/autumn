<template lang="pug">
  form.add-new-container(
    :class="{'is-blocked' : blocked || loading}"
    @submit.prevent="addNewSkill"
  )
    .add-new__inputs
      .add-new__col
        app-input(
          placeholder="Новый навык"
          v-model="skill.title"
          :errorText="validation.firstError('skill.title')"
        )
      .add-new__col.add-new__col_small
        app-input(
          type="number"
          min="0"
          max="100"
          maxlength="3" 
          v-model="skill.percent"
          :errorText="validation.firstError('skill.percent')"
        )
    button(type="submit" data-text="+").add-new__button
</template>

<script>
import { mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "skill.title": value => {
      return Validator.value(value).required("Заполните название");
    },
    "skill.percent": value => {
      return Validator.value(value)
        .integer("Должно быть числом")
        .between(0, 100, "Некорректное значение для процентов")
        .required("Поле не может быть пустым");
    }
  },
  props: {
    blocked: {
      type: Boolean,
      default: false
    },
    categoryId: Number
  },
  data() {
    return {
      loading: false,
      skill: {
        title: "",
        percent: 0
      }
    };
  },
  components: {
    appInput: () => import("./input")
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("tooltips", ["showTooltip"]),
    async addNewSkill() {
      if ((await this.$validate()) === false) return;
      this.loading = true;
      try {
        const response = await this.addSkill({
          category: this.categoryId,
          title: this.skill.title,
          percent: this.skill.percent
        });
        this.skill.percent = 0;
        this.skill.title = "";
        this.showTooltip({
          type: "success",
          text: "Скилл добавлен"
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
.add-new-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  &.is-blocked {
    opacity: 0.3;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
.add-new__inputs {
  display: flex;
  width: 100%;
}
.add-new__col {
  margin-right: 10px;
  flex: 1;
  &:last-child {
    margin-right: 0;
  }
  &_small {
    width: 75px;
    flex: initial;
  }
}
.add-new__button {
  width: 40px;
  height: 40px;
  position: relative;
  padding: 0;
  background: linear-gradient(to right, #006aed 0%, #3f35cb 100%) center center;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin-left: 34px;
  flex-shrink: 0;
  &:before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    line-height: 40px;
  }
}
</style>