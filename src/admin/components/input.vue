<template lang="pug">
  label.input(
    v-if="fieldType === 'input'" 
    :class="[{'input_labeled' : !!title, 'no-side-paddings' : noSidePaddings}, iconClass, {'error' : !!errorText}]"
  )
    .input__title(v-if="title") {{title}} 
    input(
      v-bind="$attrs"
      :value="value" 
      @input="$emit('input', $event.target.value)"
    ).input__elem.field__elem
    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )

  label.textarea(
    v-else-if="fieldType === 'textarea'"
    v-bind="$attrs"
    :class="{'error': !!errorText}"
  )
    .input__title(v-if="title") {{title}} 
    textarea.textarea__elem.field__elem(
      :value="value"
      :class="{'error' : !!errorText}"
      @input="$emit('input', $event.target.value)"
    )
    .input__error-tooltip
      errors-tooltip(
        :errorText="errorText"
      )
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    title: String,
    errorText: {
      type: String,
      default: ""
    },
    noSidePaddings: Boolean,
    fieldType: {
      type: String,
      default: "input"
    },
    value: String | Number,
    icon: {
      type: String,
      default: "",
      validator: value => ["", "user", "key"].includes(value)
    }
  },
  computed: {
    iconClass() {
      const iconName = this.icon;
      return iconName.length ? ` input_iconed input_icon-${iconName}` : "";
    }
  },
  components: {
    errorsTooltip: () => import("./errors-tooltip.vue")
  }
};
</script>


<style lang="postcss" scoped>
.input__error-tooltip {
  display: none;
  position: absolute;
  top: 100%;
  left: 30%;
  transform: translateX(-50%);
  z-index: 100;
}
.input {
  display: block;
  position: relative;
  &.no-side-paddings {
    .input__elem {
      padding-right: 0;
      padding-left: 0;
    }
  }
  &_labeled {
    .input__elem {
      padding: 15px 0 18px;
    }
  }
  &_iconed {
    .input__title {
      margin-left: 45px;
      margin-bottom: 13px;
    }
    .input__elem {
      padding-left: 45px;
      background: left center / auto 29px no-repeat;
      font-size: 18px;
      font-weight: bold;
      padding-top: 17px;
      padding-bottom: 17px;
    }
  }
  &_icon {
    @each $icon in (user, key) {
      &-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=#cfd2d7);
        }
      }
    }
  }
  &.error {
    @each $icon in (user, key) {
      &.input_icon-$(icon) {
        .input__elem {
          background-image: svg-load("$(icon).svg", fill=red);
        }
      }
    }
  }
}
.error {
  .field__elem {
    border-color: red;
  }
  .input__error-tooltip {
    display: block;
  }
}
.textarea {
  position: relative;
}
.input__title {
  color: rgba(65, 76, 99, 0.5);
  font-weight: 600;
  opacity: 0.5;
}
.textarea__elem {
  height: 150px;
  padding: 20px;
  border: 1px solid rgba($text-color, 0.2);
  resize: none;
  font-weight: 600;
  margin-top: 10px;
  width: 100%;
}
.input__elem {
  width: 100%;
  padding: 10px 8%;
  border: none;
  border-bottom: 1px solid #1f232d;
  &::placeholder {
    color: rgba(55, 62, 66, 0.25);
  }
}
</style>
