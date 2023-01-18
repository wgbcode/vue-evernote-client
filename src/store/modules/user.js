import request from "../../axios/request.js";

const state = {
  user: null,
};
const getters = {};
const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
};
const actions = {
  authLogin(context, products) {
    return new Promise((resolved, rejected) => {
      request("/login", "POST", this.user)
        .then((res) => {
          context.commit("setUser", products);
          resolved(res);
        })
        .catch((err) => {
          rejected(err);
        });
    });
  },
};
export default { state, getters, mutations, actions };
