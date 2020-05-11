import Vue from "vue";
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';


const slideReviews = {
    template: "slide",
    props: ["currentReviews", "reviews"],
};

new Vue({
    template: "#slider-hooper",
    el: "#hooper",
    components: {
      Hooper,
      Slide,
      HooperNavigation,
      slideReviews
    },
    data() {
        return {
            reviews: [],
            // currentReviews: {},
            currentIndex: 0,
            
        }
    },
    computed: {
        currentReviews() {
            return this.reviews[this.currentIndex];
        }
    },
    methods: {
        handleSlide(direction) {
            console.log("root copm", direction);
            switch(direction) {
                case "next" :
                    this.currentIndex++;
                    break;
                case "prev" :
                    this.currentIndex--;
                    break;
            }
        },
        makeArrWithRequiredImages(array) {
            return array.map(item => {
                const requiredPic = require(`../images/content/${item.pic}`);
                item.pic = requiredPic;

                return item;
            });
        },
        handleClick(direction) {
            this.$emit("slide", direction);
        },
        slidePrev() {
            this.$refs.carousel.slidePrev();
        },
          slideNext() {
            this.$refs.carousel.slideNext();
        },
          updateCarousel(payload) {
            this.myCarouselData = payload.currentSlide;
        }
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = this.makeArrWithRequiredImages(data);
        this.reviews = data;
    },
});
