<template lang="pug">
  button(
    v-if="elem === 'button'"
    v-on="$listeners"
    :class="{'disabled' : disabled}"
    :disabled="disabled"
  ).default-btn-container.btn-decorator {{text}}


  .btn-file-container(
    v-else-if="elem === 'file'"
  )
    .btn-file-fake.btn-decorator {{text}}
    input(
      type="file"
      v-on="$listeners"
    ).btn-file-input
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Отправить"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    elem: {
      type: String,
      default: "button",
      validator: value => ["button", "file"].includes(value)
    }
  }
};
</script>

<style lang="postcss" scoped>
.btn-file-container {
  overflow: hidden;
  position: relative;
}
.btn-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}
.btn-decorator {
  padding: 19px 40px;
  color: #fff;
  text-transform: uppercase;
  background: linear-gradient(to right, #006aed, #3f35cb) center center;
  display: inline-block;
  border-radius: 100px;
  font-weight: bold;
  &.disabled {
    opacity: .5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
  }
  &.plain {
    text-transform: initial;
    color: $links-color;
    background: transparent;
  }
}
</style>
