import Vue from "vue";
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

new Vue({
    template: "#slider-hooper",
    el: "#hooper",
    components: {
      Hooper,
      Slide
    }
});