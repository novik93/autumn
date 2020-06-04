<template lang="pug">
  ul.tags
    template(v-if="interactive")
      li.tags__item.tags__item_interactive(v-for="(tag, index) in tags" :key="tag")
        span {{tag}} 
        a.tags__remove(@click="$emit('remove', index)")

    template(v-else)
      li.tags__item(v-for="tag in tags" :key="tag") {{tag}} 
</template>

<script>
export default {
  props: {
    tags: Array,
    interactive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="postcss" scoped>
.tags {
  display: flex;
  flex-wrap: wrap;
}
.tags__remove {
  width: 11px;
  height: 11px;
  background: svg-load('cross.svg', fill=$text-color) center center no-repeat / contain;
  margin-left: 9px;
}
.tags__item {
  white-space: nowrap;
  padding: 6px 20px;
  border-radius: 50px;
  background: #fff;
  color: rgba(40, 51, 64, 0.5);
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  &_interactive {
    display: flex;
    align-items: center;
    background-color: #f4f4f4;
  }
}
</style>
