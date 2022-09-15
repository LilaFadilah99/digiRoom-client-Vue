import { defineStore } from "pinia";
import Axios from "axios";
import router from "../router";

export const useAccomodationStore = defineStore({
  id: "user",
  state: () => {
    return {
      accomodations: [],
      detailAccomodation: {},
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
    handleShowDetail(id) {
      console.log(id);
      Axios({
        method: "GET",
        url: `/accomodation/all/${id}`,
      })
        .then(({ data }) => {
          console.log(data);
          this.detailAccomodation = data;
          router.push({
            name: "detail",
            params: {
              id: data.id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleAddToFavorite(id) {
      Axios({
        method: "GET",
        url: `/accomodation/favorites/:id/${id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then(({ data }) => {
          console.log(data);
          this.detailAccomodation = data;
          router.push({
            name: "detail",
            params: {
              id: data.id,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
