<template lang="pug">
  .card.card_plain(v-if="plain")
    slot(name="default")

  .card(v-else)
    .card__title
      .card__title-text(v-text="title")
      slot(name="title" v-if="!!title === false")
    .card__content
      slot(name="content")


</template>

<script>
export default {
  props: {
    title: String,
    plain: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="postcss" scoped>
.card {
  background: #fff;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  &_plain {
    padding: 0;
  }
}
.card__title {
  padding: 30px 2%;
  border-bottom: 1px solid rgba(#1f232d, 0.15);
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 30px;
}
.card__content {
  padding: 0 2%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>