<template lang="pug">
  .header
    .container
      .header__info
        .user
          .user__pic
            img(src="../../images/content/user.jpg").user__pic-avatar
          .user__name
            span Андрей Новиков
            a.exit-btn(@click="logoutUser") Выйти

        .header__title Панель администрирования
      a.exit-btn(@click="logoutUser") Выйти
</template>



<script>
import { mapActions} from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>


<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.header {
  color: white;
}
.header__info {
  display: flex;
  align-items: center;
}
.header__title {
  color: rgba(#fff, 0.5);
  @include phones {
    display: none;
  }
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}
.user {
  display: flex;
  align-items: center;
  margin-right: 20px;
}
.user__name {
  font-style: 18px;
  font-weight: 600;
  .exit-btn {
    display: none;
    @include phones {
      display: block;
    }
  }
}
.user__pic {
  margin-right: 20px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
}
.exit-btn {
  opacity: 0.7;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
  }
  @include phones  {
    display: none;
  }
}
</style>