import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import routes from "@/router/routes";
import store from "@/store";





const guard = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
});

Vue.use(VueRouter);

const router = new VueRouter({ routes });

router.beforeEach(async (to, from, next) => {
    // const isPublicRoute = to.matched.some((router) => router.meta.public);
    // const isUserLoggedIn = store.getters["user/userIsLogged"];

    // if (isPublicRoute === false && isUserLoggedIn === false) {
        
    //     const token = localStorage.getItem('token');

    //     guard.defaults.headers["Authorizaion"] = `Bearer ${token}`;

    //     try {
    //         const {data} = await guard.get('/user');
    //         store.commit('user/SET_USER', data.user);
    //         next();
    //     } catch (error) {
    //         router.replace('/login');
    //         localStorage.clear();
    //     }
    // } else {
    //     next();
    // }
    next();
});


export default router;