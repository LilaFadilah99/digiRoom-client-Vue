<template>
  <div>
    <CustomNavbar />
    <!-- Hero image -->
    <!-- imgae utama -->
    <section>
      <div class="container-fluid my-5">
        <div class="container hero-image">
          <h3 class="fw-bold">
            {{ detailAccomodation.name }}
          </h3>
          <p>
            <i class="fa-solid fa-star"></i> 40 Ulasan
            <span class="fw-bold">.</span>
            <i class="fa-solid fa-medal"></i> Host Teladan
            <span class="fw-bold">.</span>
            <span class="fw-bold">{{ detailAccomodation.location }}</span>
          </p>
          <div class="col-12">
            <div class="row">
              <div class="col-6">
                <img
                  :src="detailAccomodation.imgUrl"
                  alt=""
                  class="img-fluid rounded-start"
                  style="width: 900px; height: 360px; object-fit: cover"
                />
              </div>
              <div class="col-6">
                <div class="row mb-2">
                  <div class="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/be5ec43d-245a-4c09-9bb7-a5e1b8eb56b3.jpg?im_w=720"
                      alt=""
                      class="img-fluid"
                      style="width: 500px; height: 175px; object-fit: cover"
                    />
                  </div>
                  <div class="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/7441ac79-c903-40c9-bf8e-39f0733fa3a3.jpg?im_w=720"
                      alt=""
                      class="img-fluid"
                      style="width: 500px; height: 175px; object-fit: cover"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/7441ac79-c903-40c9-bf8e-39f0733fa3a3.jpg?im_w=720"
                      alt=""
                      class="img-fluid"
                      style="width: 500px; height: 175px; object-fit: cover"
                    />
                  </div>
                  <div class="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/7441ac79-c903-40c9-bf8e-39f0733fa3a3.jpg?im_w=720"
                      alt=""
                      class="img-fluid"
                      style="width: 500px; height: 175px; object-fit: cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- keterangan -->
    <section>
      <div class="container-fluid my-5">
        <div class="container">
          <div class="col-12">
            <div class="row">
              <!-- left -->
              <div class="col-7">
                <h4 class="fw-bold">
                  Dengan Kolam Renang. Tuan rumah: Natalia
                </h4>
                <p>6 tamu . 2 kamar tidur . 3 tempat tidur . 0 kamar mandi</p>
                <hr />
                <div class="row">
                  <div class="col-1">
                    <i
                      class="fa-solid fa-door-open"
                      style="font-size: 25px"
                    ></i>
                  </div>
                  <div class="col-11 px-0">
                    <p class="fw-bold">Check-in mandiri</p>
                    <p class="text-secondary mb-0 text-content">
                      Anda bisa check-in sendiri menggunakan kotak berkunci.
                    </p>
                    <br />
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <i
                      class="fa-solid fa-location-dot"
                      style="font-size: 25px"
                    ></i>
                  </div>
                  <div class="col-11 px-0">
                    <p class="fw-bold">Lokasi luar biasa</p>
                    <p class="text-secondary mb-0 text-content">
                      90% tamu baru-baru ini memberikan nilai 5 bintang untuk
                      lokasi.
                    </p>
                    <br />
                  </div>
                </div>
                <div class="row">
                  <div class="col-1">
                    <i class="fa-solid fa-key" style="font-size: 25px"></i>
                  </div>
                  <div class="col-11 px-0">
                    <p class="fw-bold">Pengalaman check-in istimewa</p>
                    <p class="text-secondary mb-0 text-content">
                      95% tamu baru-baru ini memberikan nilai 5 bintang untuk
                      proses check-in.
                    </p>
                    <br />
                  </div>
                </div>
                <hr />
                <!-- d-cover -->
                <div class="row my-3">
                  <h3 style="font-weight: bolder">
                    <span style="color: #ee2656">D-</span>Cover
                  </h3>
                  <p>
                    Setiap pemesanan dilengkapi perlindungan gratis terhadap
                    pembatalan oleh Tuan Rumah, ketidakakuratan iklan, dan
                    masalah lain seperti kendala saat check-in.
                  </p>
                </div>
                <hr />
                <div class="row my-3">
                  <p>
                    {{ detailAccomodation.description }}
                  </p>
                </div>
                <hr />
                <div class="row my-5">
                  <h4 class="fw-bold">Kamar Anda</h4>
                  <br /><br /><br />
                  <div
                    class="col-3 me-3 border p-3"
                    style="border-radius: 15px"
                  >
                    <h3><i class="fa-solid fa-mattress-pillow"></i></h3>
                    <p class="fw-bold mb-0">Kamar tidur 1</p>
                    <p>1 tempat tidur susun</p>
                  </div>
                  <div
                    class="col-3 me-3 border p-3"
                    style="border-radius: 15px"
                  >
                    <h3><i class="fa-solid fa-mattress-pillow"></i></h3>
                    <p class="fw-bold mb-0">Kamar tidur 1</p>
                    <p>1 tempat tidur susun</p>
                  </div>
                  <div class="col-3 border p-3" style="border-radius: 15px">
                    <h3><i class="fa-solid fa-mattress-pillow"></i></h3>
                    <p class="fw-bold mb-0">Kamar tidur 1</p>
                    <p>1 tempat tidur susun</p>
                  </div>
                </div>
                <hr />
                <!-- ----------facility------------- -->
                <div class="row my-5 facility">
                  <h4 class="fw-bold">Fasilitas yang ditawarkan</h4>
                  <br /><br /><br />
                  <div class="col-6">
                    <p>Wifi</p>
                    <p>Akses Publik atau bersama ke pantai – Tepi pantai</p>
                    <p>Sauna Pribadi</p>
                    <p>TV</p>
                    <p>Halaman belakang Bersama – Tidak sepenuhnya berpagar</p>
                  </div>
                  <div class="col-6">
                    <p>Dapur</p>
                    <p>Parkir gratis di areal properti</p>
                    <p>Hewan peliharaan diizinkan</p>
                    <p>Pengisi daya kendaraan listrik</p>
                    <p>Perapian dalam ruang: kayu bakar</p>
                  </div>
                </div>
                <hr />
                <!-- --------------------date------------ -->
                <div class="row my-5">
                  <h4 class="fw-bold">5 malam di Inari</h4>
                  <p class="p-size text-secondary">17 Sep 2022 - 22 Sep 2022</p>
                  <img src="./date.png" alt="" class="img-fluid" />
                </div>
              </div>
              <!-- right -->
              <div
                class="col-4 offset-1 border p-4"
                style="
                  height: 460px;
                  border-radius: 15px;
                  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
                    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
                "
              >
                <div class="row">
                  <div class="col-6">
                    <h5 class="fw-bold">
                      {{
                        detailAccomodation.price?.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })
                      }}
                    </h5>
                    <p class="p-size text-secondary">Per malam</p>
                  </div>
                  <div class="col-6">
                    <p>
                      <i class="fa-solid fa-star"></i>&nbsp; 4.9 .
                      <span class="p-size"
                        ><a href="" class="text-secondary">50 ulasan</a></span
                      >
                    </p>
                  </div>
                </div>
                <!-- check in -->
                <div class="row justify-content-center">
                  <div
                    class="col-11 border rounded"
                    style="border-color: black"
                  >
                    <div class="row mt-2">
                      <div class="col-6 p-sizing border-end">
                        <p class="fw-bold">CHECK-IN</p>
                        <p class="text-secondary">17/9/2020</p>
                      </div>
                      <div class="col-6 p-sizing">
                        <p class="fw-bold">CHECK-OUT</p>
                        <p class="text-secondary">22/9/2020</p>
                      </div>
                    </div>
                    <div class="row border-top pt-2">
                      <div class="col">
                        <p class="fw-bold p-size">1 TAMU</p>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid col-12 mt-md-4 mt-4">
                    <button
                      type="submit"
                      class="btn text-white"
                      style="background-color: #ee2656"
                    >
                      Pesan
                    </button>
                  </div>
                </div>
                <!-- biaya tambahan -->
                <div class="row my-3 p-size">
                  <p class="text-center text-secondary">
                    Anda belum dikenakan biaya
                  </p>
                  <div class="row">
                    <div class="col-6">
                      <p>
                        {{
                          detailAccomodation.price?.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          })
                        }}
                        X 3
                      </p>
                    </div>
                    <div class="col-6 text-end">
                      <p>Rp.900.000</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>Biaya layanan</p>
                    </div>
                    <div class="col-6 text-end">
                      <p>
                        {{
                          detailAccomodation.serviceCharge?.toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                            }
                          )
                        }}
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <p>
                        {{
                          detailAccomodation.cleaningFee?.toLocaleString(
                            "id-ID",
                            {
                              style: "currency",
                              currency: "IDR",
                            }
                          )
                        }}
                      </p>
                    </div>
                    <div class="col-6 text-end">
                      <p>Rp.0</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- -----------------comment---------------- -->
              <hr />
              <div class="row my-5">
                <h4 class="fw-bold">
                  <i class="fa-solid fa-star"></i>&nbsp; 4.9 . 50 Ulasan
                </h4>
                <div class="row my-5">
                  <!-- detail comment -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-2">
                        <img
                          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                          alt=""
                          class="img-fluid"
                          style="
                            height: 50px;
                            width: 50px;
                            object-fit: cover;
                            border-radius: 100%;
                          "
                        />
                      </div>
                      <div class="col-10">
                        <p class="p-size fw-bold">Daniel</p>
                        <p class="p-size text-secondary">September 2022</p>
                      </div>
                    </div>
                    <div class="col-10">
                      <p>
                        Kami bersenang - senang di sini, meskipun hanya satu
                        malam. Saya sangat merekomendasikan tempat Mikko!
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col-2">
                        <img
                          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                          alt=""
                          class="img-fluid"
                          style="
                            height: 50px;
                            width: 50px;
                            object-fit: cover;
                            border-radius: 100%;
                          "
                        />
                      </div>
                      <div class="col-10">
                        <p class="p-size fw-bold">Daniel</p>
                        <p class="p-size text-secondary">September 2022</p>
                      </div>
                    </div>
                    <div class="col-10">
                      <p>
                        Kami bersenang - senang di sini, meskipun hanya satu
                        malam. Saya sangat merekomendasikan tempat Mikko!
                      </p>
                    </div>
                  </div>
                </div>
                <!-- row comment 2 -->
                <div class="row">
                  <!-- detail comment -->
                  <div class="col-6">
                    <div class="row">
                      <div class="col-2">
                        <img
                          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                          alt=""
                          class="img-fluid"
                          style="
                            height: 50px;
                            width: 50px;
                            object-fit: cover;
                            border-radius: 100%;
                          "
                        />
                      </div>
                      <div class="col-10">
                        <p class="p-size fw-bold">Daniel</p>
                        <p class="p-size text-secondary">September 2022</p>
                      </div>
                    </div>
                    <div class="col-10">
                      <p>
                        Kami bersenang - senang di sini, meskipun hanya satu
                        malam. Saya sangat merekomendasikan tempat Mikko!
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="row">
                      <div class="col-2">
                        <img
                          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=2000"
                          alt=""
                          class="img-fluid"
                          style="
                            height: 50px;
                            width: 50px;
                            object-fit: cover;
                            border-radius: 100%;
                          "
                        />
                      </div>
                      <div class="col-10">
                        <p class="p-size fw-bold">Daniel</p>
                        <p class="p-size text-secondary">September 2022</p>
                      </div>
                    </div>
                    <div class="col-10">
                      <p>
                        Kami bersenang - senang di sini, meskipun hanya satu
                        malam. Saya sangat merekomendasikan tempat Mikko!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- ----------------------------------location--------------- -->
              <hr />
              <div class="row my-5">
                <h4 class="fw-bold">Lokasi Anda</h4>
                <p class="text-secondary">Inari, Finlandia</p>
                <div class="col">
                  <img src="./location.png" alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Hero image -->
  </div>
</template>

<script>
import CustomNavbar from "../components/CustomNavigationBar.vue";
import { mapState, mapActions } from "pinia";
import { useAccomodationStore } from "../stores/accomodation.js";

export default {
  name: "DetailPage",
  computed: {
    ...mapState(useAccomodationStore, ["detailAccomodation"]),
    estimatePrice() {
      let check_in = "09/17/2020";
      let check_out = "09/22/2020";
      return Math.ceil(
        (new Date(check_out).getTime() - new Date(check_in).getTime()) /
          (1000 * 60 * 60 * 24)
      );
    },
  },
  methods: {
    ...mapActions(useAccomodationStore, ["handleShowDetail"]),
  },
  components: {
    CustomNavbar,
  },
  created() {
    this.handleShowDetail(this.$route.params.id);
  },
};
</script>

<style>
@import url("../style.css");
</style>