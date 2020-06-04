import { generateStdError } from "@/helpers/errorHandler";
import { wrapIntoFormData } from "@/helpers/forms";

export default {
  namespaced: true,
  state: {
    reviews: [],
    currentReview: {}
  },
  mutations: {
    SET_REVIEWS_STATE: (state, reviews) => (state.reviews = reviews),
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(
        review => review.id !== removedReviewId
      );
    },
    ADD_NEW_REVIEW: (state, review) => state.reviews.push(review),
    EDIT_REVIEW: (state, editedReview) => {
      state.reviews = state.reviews.map(review => {
        return review.id === editedReview.id ? editedReview : review;
      });
    },
    SET_CURRENT_REVIEW: (state, selectedReviewId) => {
      
      state.currentReview = state.reviews.filter(
        review => review.id === selectedReviewId
      )[0];
    }
  },
  actions: {
    async addReview({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post("/reviews", data);
        commit("ADD_NEW_REVIEW", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchReviews({ commit, rootGetters }) {
      try {
        const userId = rootGetters['user/userId'];
        const response = await this.$axios.get(`/reviews/${userId}`);
        commit("SET_REVIEWS_STATE", response.data);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async updateReview({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post(`/reviews/${payload.id}`, data);
        commit("EDIT_REVIEW", response.data.review);
        return response;
      } catch (error) {
        generateStdError(error);
      }
    }
  }
};