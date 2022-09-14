<template>
  <!-- Favorite list -->
  <section>
    <div class="container-fluid my-5">
      <div class="container">
        <h2 class="fw-bold mb-5">Favorite List</h2>
        <div class="row">
          <div class="col-7">
            <!-- favorite -->
            <div class="row my-3">
              <div class="col-5">
                <img
                  src="https://a0.muscache.com/im/pictures/474649f7-9f37-4f60-949d-f018d429b525.jpg?im_w=720"
                  alt=""
                  class="img-fluid rounded-4"
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
                    <p class="p-size">
                      <i class="fa-solid fa-star"></i>&nbsp;
                      <span class="fw-bold">5,0</span
                      ><span class="text-secondary">(40 ulasan)</span>
                    </p>
                  </div>
                  <div class="col-6">
                    <p class="fw-bold">Rp. 4000.000 / malam</p>
                  </div>
                </div>
              </div>
              <hr class="mt-3" style="color: #a5a9ad" />
            </div>
            <!-- end favorite row 1 -->
          </div>
          <!-- right -->
          <div class="col-4 p-4 offset-1 border rounded-3 font-info">
            <h1 style="font-size: 40px; color: #ee2656" class="mb-3">
              <i class="fa-solid fa-file-shield"></i>
            </h1>
            <h6 class="fw-bolder color-grey">
              Mengapa info saya tidak ditampilkan di sini?
            </h6>
            <p class="text-secondary">
              Kami menyembunyikan beberapa detail akun untuk melindungi
              identitas Anda.
            </p>
            <hr class="my-4" />
            <h1 style="font-size: 40px; color: #ee2656" class="mb-3">
              <i class="fa-solid fa-lock"></i>
            </h1>
            <h6 class="fw-bolder color-grey">
              Detail apa saja yang bisa diedit?
            </h6>
            <p class="text-secondary">
              Detail yang digunakan D-Room untuk memverifikasikan identitas Anda
              tidak bisa diubah. Info kontak dan beberapa detail pribadi bisa
              diedit. Namun, kami mungkin akan meminta Anda memverifikasikan
              identitas Anda saat Anda membuat pemesanan atau membuat iklan
              berikutnya.
            </p>
            <hr class="my-4" />
            <h1 style="font-size: 40px; color: #ee2656" class="mb-3">
              <i class="fa-solid fa-eye"></i>
            </h1>
            <h6 class="fw-bolder color-grey">
              Info apa yang dibagikan kepada orang lain?
            </h6>
            <p class="text-secondary">
              D-Room hanya memberikan informasi kontak Tuan Rumah dan tamu
              setelah reservasi terkonfirmasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Favorite list -->
</template>

<script>
export default {
  name: "CardFavorite",
};
</script>

<style>
</style>