<template>
  <div>
    <CustomNavbar />
    <!-- Favorite list -->
    <section>
      <div class="container-fluid my-5">
        <div class="container">
          <h2 class="fw-bold">Favorite List</h2>
          <p class="mb-5 fw-bold">
            Temukan akomodasi terbaik mu bersama
            <span class="bolder" style="color: #ee2656">D-</span
            ><span>Room</span>
          </p>
          <div class="row justify-content-center">
            <div class="col-9">
              <!-- Favorite Card -->
              <CardFavorite />
              <CardFavorite />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Favorite list -->
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import CardFavorite from "../components/CardFavorite.vue";
export default {
  name: "FavoritePage",
  components: {
    CustomNavbar,
    CardFavorite,
  },
};
</script>

<style>
</style>