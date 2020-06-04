<template lang="pug">
  .add-tags
    .add-tags__wrapper
      app-input(
        title="Добавление тега"
        :value="tags"
        @input="handleInput"
        :errorText="errorText"
      )
    tags(
      :tags="tagsArray"
      :interactive="true"
      @remove="removeTag"
    )
</template>

<script>
export default {
  components: {
    appInput: () => import("./input"),
    tags: () => import("./tags")
  },
  props: {
    value: String,
    errorText: String,
  },
  data() {
    return {
      tagsString: this.value
    };
  },
  computed: {
    tagsArray() {
      if (!!this.tags.length === false) return [];
      return this.tags.split(",");
    },
    tags: {
      get() {
        return this.value;
      },
      set(value) {
        this.tagsString = value;
      }
    }
  },
  methods: {
    handleInput($event) {
      this.$emit("input", $event);
      this.tags = $event;
    },
    removeTag(index) {
      const tagsArray = [...this.tagsArray];
      tagsArray.splice(index, 1);
      this.$emit("removeTag", tagsArray.join(","));
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-tags__wrapper {
  margin-bottom: 20px;
}
</style>
