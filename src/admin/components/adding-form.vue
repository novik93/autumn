<template lang="pug">
  .edit-form
    card(
      :title="title"
    )
      template(slot="content")
        slot(name="form-content")
        .edit-form__buttons(
          :style="{'padding' : buttonsPadding}"
        )
          .edit-form__buttons-item
            app-button(
              text="Отмена"
              class="plain"
              @click="$emit('cancel')"
            )
          .edit-form__buttons-item
            app-button(
              text="Загрузить"
              @click="$emit('submit')"
              :disabled="disabled"
            )
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Форма добавления элемента"
    },
    buttonsPadding: {
      type: String,
      default: "0"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    card: () => import("../components/card"),
    appButton: () => import("../components/button")
  }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.edit-form__buttons {
  display: flex;
  justify-content: flex-end;
  @include tablets {
    padding: 0 !important; 
  }
}
.edit-form__buttons-item {
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
}
</style>