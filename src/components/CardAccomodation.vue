<template>
  <!-- row 1 -->
  <div
    class="col-3 ticket-location mb-3"
    @click="handleShowDetail(accomodation.id)"
  >
    <img
      :src="accomodation.imgUrl"
      alt=""
      class="img-fluid rounded-4"
      style="width: 300px; height: 240px; object-fit: cover"
    />
    <br /><br />
    <p class="fw-bold">{{ accomodation.name }}</p>
    <p class="text-secondary">{{ accomodation.location }}</p>
    <p class="fw-bold">
      {{
        accomodation.price?.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })
      }}
    </p>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "CardAccomodation",
  props: ["accomodation"],
  methods: {
    ...mapActions(useAccomodationStore, ["handleShowDetail"]),
  },
};
</script>

<style></style>
