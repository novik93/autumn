export default [
    {
      path: "/",
      component: () => import("./../components/pages/about.vue"),
      meta: {
        title: "Блок «Обо мне»"
      }
    },
    {
      path: "/works",
      component: () => import("./../components/pages/works.vue"),
      meta: {
        title: "Блок «Работы»"
      }
    },
    {
      path: "/reviews",
      component: () => import("./../components/pages/reviews.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    {
      path: "/login",
      component: () => import("./../components/pages/login.vue"), 
      meta: {
        public: true
      }
    }
  ];