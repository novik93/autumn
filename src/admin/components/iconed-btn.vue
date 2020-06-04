<template lang="pug">
  button(
    type="button"
    v-on="$listeners"
  ).btn
</template>

<style lang="postcss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  &.no-words {
    &:after {
      /* background: svg-load("trash.svg", fill=#a0a5b1); */
      width: 20px;
      height: 20px;
    }
    &:before {
      margin-right: 0;
    }
  }
  &:before {
    content: attr(data-text);
    font-weight: 600;
    color: rgba(65, 76, 99, 0.4);
    margin-right: 18px;
  }
  &:after {
    /* background: svg-load("tick.svg", fill=#a0a5b1); */
    content: "";
    width: 17px;
    height: 17px;
    display: block;
  }
  @each $icon, $fill in (pencil, cross, tick, trash),
    (#3942cc, #c73033, #00d70a, #414c62)
  {
    &.is-$(icon) {
      &:after {
        background: svg-load("$(icon).svg", fill=$(fill)) ;
      }
    }
  }
  &.grayscale {
    @each $icon, $fill in (pencil, cross, tick, trash),
      (#3942cc, #c73033, #00d70a, #414c62)
    {
      &.is-$(icon) {
        &:after {
          background: svg-load("$(icon).svg", fill=#a0a5b1) ;
        }
        &:hover {
          &:after {
            background: svg-load("$(icon).svg", fill=$(fill));
          }
        }
      }
    }
  }
}
</style>