<template lang="pug">
  tr(v-if="editmodeOn")
    td
      input(type="text" v-model="editedSkill.title")
    td
      input(type="text" v-model="editedSkill.percent")
    td
      button(type="button" @click="editCurrentSkill ") отправить
      button(type="button" @click ="editmodeOn = false") отменить
  tr(v-else).skills__item-content
    td.skills__item-left {{skill.title}}
    td.skills__item-midle {{skill.percent}} 
    td.skills__item-right
        button(type="button" @click="removeCurrentSkill").input-elem-svg
          .svg__delete 
        button(type="button" @click="editmodeOn = true").input-elem-svg
          .svg__pencil

</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      editmodeOn: false,
      editedSkill: {...this.skill},
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {
        console.log(error)
      }
    },
    async editCurrentSkill() {
      try {
        await this.editSkill(this.editedSkill);
      } catch (error) {
        console.log(error)
      } finally {
        this.editmodeOn = false;
      }
    }
  }
};
</script>


<style lang="postcss" scoped>


.skills__item-content {
  display: flex;
}


.skills__item-left{
  /* margin-left: auto; */
}
.skills__item-midle{
  margin-left: auto;
}
.skills__item-right{
  /* margin-right: auto; */
  margin-left: 30px;
}

.svg__delete {
  background: svg-load('trash.svg', fill=#a0a5b1);
  width: 15px;
  height: 15px;
}

.svg__pencil {
  background: svg-load('pencil.svg', fill=#a0a5b1);
  width: 15px;
  height: 15px;
}

.input-elem-pic{
  display: flex;
}
</style>