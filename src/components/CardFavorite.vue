<template>
  <!-- favorite -->
  <div class="row my-3 rounded-3 py-2 card-favorite">
    <div class="col-4">
      <img
        src="https://a0.muscache.com/im/pictures/474649f7-9f37-4f60-949d-f018d429b525.jpg?im_w=720"
        alt=""
        class="img-fluid rounded-2"
        style="width: 900px; height: 190px; object-fit: cover"
      />
    </div>
    <div class="col-7">
      <div class="row">
        <div class="col-11">
          <p class="text-secondary p-size">Kecamatan Borobudur</p>
        </div>
        <div class="col-1">
          <i
            class="fa-solid fa-heart"
            style="font-size: 22px; color: #ee2656"
          ></i>
        </div>
      </div>
      <p class="fw-bold">Pandhega 2 House 3BR dengan Kolam Renang</p>
      <hr style="width: 40px" />
      <p class="text-secondary p-size">
        7 tamu . 3 kamar tidur . 1 kamar mandi + toilet
      </p>

      <div class="row mt-5">
        <div class="col-6">
          <p class="p-size mb-0">
            <i class="fa-solid fa-star"></i>&nbsp;
            <span class="fw-bold">5,0</span
            ><span class="text-secondary">(40 ulasan)</span>
          </p>
        </div>
        <div class="col-6">
          <p class="fw-bold mb-0">Rp. 4000.000 / malam</p>
        </div>
      </div>
    </div>
  </div>
  <!-- end favorite row 1 -->
</template>

<script>
export default {
  name: "CardFavorite",
};
</script>

<style>
.card-favorite {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}
</style>