<template lang="pug">
  .skill-container
    h2.skill-item-decoration {{category.category}}
      .skill-input-elem
        a(href="#").input-elem-pic
          .svg__tick 
        a(href="#").input-elem-pic
          .svg__remove
    hr
    table.skills__content
      skillsItem(
        v-for="skill in category.skills" 
        :key="skill.id"
        :skill="skill"
      )
    .add-skill-wrapper.blocked
      form(@submit.prevent = "addNewSkill").skill__form
        input(type="text" v-model="skill.title" placeholder="Добавить скилл").skill-input
        input(type="text" v-model="skill.percent" placeholder="0").skill-input
        button(type="submit" ).about-page__add-new Добавить

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    category: Object,
  },
  data() {
    return {
      skill: {
        title: "",
        percent: 0
      }
    }
  },
  components: {
    skillsItem: () => import("./skills-item.vue")
  },
  methods: {
    ...mapActions('skills', ['addSkill']),
    async addNewSkill() {
      const skillData = {
        ...this.skill,
        category: this.category.id
      };

      try {
        await this.addSkill(skillData);
      } catch (error) {
        console.log(error) 
      }
    }
  }
};
</script>

<style lang="postcss" scoped>

hr {
  width: 100%;
}

.skills__content {
  margin: auto 0;
}

.about-page__add-new {
  color: $links-color;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  &:before {
    content: "+";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    line-height: 20px;
    color: #fff;
    margin-right: 13px;
    flex-shrink: 0;
    flex-basis: 20px;
  }
}


.add-skill-wrapper {
  margin-top: auto;
}


.svg__tick {
  background: svg-load('tick.svg', fill= green);
  width: 15px;
  height: 15px;
}

.svg__remove {
  background: svg-load('remove.svg', fill=red);
  width: 15px;
  height: 15px;
}

.skill__form {
  display: flex;
}

.skill-input {
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid;
  outline: none;
}
</style>