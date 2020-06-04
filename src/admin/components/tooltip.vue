<template lang="pug">
  .inner-tooltip-container(
    :class="type"
  )
    .tooltip__text {{text}}
    button.tooltip__close(@click="closeTooltip")
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState('tooltips', {
      text: state => state.text,
      type: state => state.type
    })
  },
  methods: {
    ...mapActions('tooltips', ['closeTooltip'])
  }
}
</script>


<style lang="postcss" scoped>
  .inner-tooltip-container {
    padding: 22px;
    background: #4bb133;
    min-width: 400px;
    position: relative;
    display: flex;
    justify-content: space-between;
    color: #fff;
    &.warning {
      background: #b18333;
    }
    &.error {
      background: #b13333;
    }
  }
  .tooltip__close {
    width: 20px;
    height: 20px;
    background: svg-load('cross.svg', fill=#fff) center center no-repeat;
    cursor: pointer;
    margin-left: 20px;
  }
</style>
