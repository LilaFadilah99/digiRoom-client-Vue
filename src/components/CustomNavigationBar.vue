<template>
  <div>
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg pt-3 nav-1 d-flex justify-content-center"
    >
      <div class="container d-flex justify-content-between">
        <a class="navbar-brand text-danger fw-bold" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav justify-content-center">
            <div class="col-9 rounded-pill px-5 py-2 nav-search-bar">
              <div class="row">
                <div class="col p-0">
                  <form class="d-flex" role="search">
                    <input
                      class="p-0 text-center form-control border-0 search-form"
                      type="search"
                      placeholder="Accomodation"
                      aria-label="Search"
                    />
                    <!-- <span style="font-size: 30px; color: #a5a9ad">|</span> -->
                    <input
                      class="p-0 text-center form-control border-0 search-form"
                      type="search"
                      placeholder="Price"
                      aria-label="Search"
                    />
                    <!-- <span style="font-size: 30px; color: #a5a9ad">|</span> -->
                    <input
                      class="p-0 text-center form-control border-0 search-form"
                      type="search"
                      placeholder="Category"
                      aria-label="Search"
                    />
                    <button
                      class="btn btn-danger btn-sm rounded-circle"
                      type="submit"
                    >
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item me-3">
              <a class="nav-link active fw-bold" aria-current="page" href="#"
                >Mulai Temukan Penginapan</a
              >
            </li>
            <!-- profile -->
            <div class="btn-group">
              <button
                type="button"
                class="
                  btn btn-outline-secondary
                  dropdown-toggle
                  rounded-pill
                  px-3
                "
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i
                  class="fa-solid fa-user p-2 rounded-circle"
                  style="
                    background-color: #a5a9ad;
                    font-size: 12px;
                    color: #495966;
                  "
                ></i>
              </button>
              <ul class="dropdown-menu" style="left: -90px">
                <li><a class="dropdown-item" href="#">Favorit</a></li>
                <li><a class="dropdown-item" href="#">Pesanana</a></li>
                <li><a class="dropdown-item" href="#">Akun</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="/login"
                    >Login</router-link
                  >
                </li>
                <li><a class="dropdown-item" href="#">Daftar</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
    <hr />
    <!-- end Navbar -->
  </div>
</template>

<script>
export default {
  name: "CustomNavigationBar",
};
</script>

<style lang="css" scoped>
.nav-search-bar {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
