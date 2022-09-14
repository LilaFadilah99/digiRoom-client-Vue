<template>
  <!-- row 1 -->
  <div class="col-3 ticket-location">
    <img
      src="https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=720"
      alt=""
      class="img-fluid rounded"
      style="width: 300px; height: 220px; object-fit: cover"
    />
    <br /><br />
    <p class="fw-bold">{{ accomodation.name }}</p>
    <p class="text-secondary">Kecamatan Borobudur</p>
    <p class="fw-bold">Rp. 300.000</p>
  </div>
</template>

<script>
export default {
  name: "CardAccomodation",
  props: ["accomodation"],
  created() {
    console.log(this.accomodation);
  },
};
</script>

<style></style>
