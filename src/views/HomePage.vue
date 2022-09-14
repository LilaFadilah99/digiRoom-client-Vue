<template>
  <div>
    <CustomNavbar />
    <section id="accomodation">
      <div class="container-fluid my-5">
        <div class="container">
          <div class="row">
            <CardAccomodation
              v-for="accomodation in accomodations"
              :key="accomodation.id"
              :accomodation="accomodation"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import CardAccomodation from "../components/CardAccomodation.vue";
import { mapState, mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "HomePage",
  components: {
    CustomNavbar,
    CardAccomodation,
  },
  computed: {
    ...mapState(useAccomodationStore, ["accomodations"]),
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleGetTransportation"]),
  },
  created() {
    // console.log(this.accomodations, "hello");
    this.handleGetTransportation();
  },
  // watch: {
  //   accomodations(n) {
  //     console.log(n[0], "ini watch");
  //   },
  // },
};
</script>

<style>
</style>
