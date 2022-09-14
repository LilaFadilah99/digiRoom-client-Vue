import { defineStore } from "pinia";
import Axios from "axios";

export const useAccomodationStore = defineStore({
  id: "user",
  state: () => {
    return {
      accomodations: [],
    };
  },

  actions: {
    handleGetTransportation() {
      Axios({
        method: "GET",
        url: "/accomodation",
      })
        .then(({ data }) => {
          this.accomodations = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
