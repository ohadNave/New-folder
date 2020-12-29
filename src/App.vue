<template>
  <div id="app">
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="Release Notes" />
    <meta name="author" content="Ohad Nave " />
    <title>Release Notes</title>

    <header id="header-background">
      <div class="logo"></div>
    </header>



    <router-view />

    <br>
    <br>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i style="color: #17A2B8" class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i style="color: #17A2B8" class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#">
                  <span class="fa-stack fa-lg">
                    <i style="color: #17A2B8" class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted" style="align=center">
              Ohad Nave
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  name: "App",
  data() {
    return {
      cart: 0,
    };
  },

  async created() {
    // eventBus.$on("fireMethod", () => {
    //   this.newLoad();
    // });
    // this.newLoad();
    // let ckeditor = document.createElement('script');
    // ckeditor.setAttribute('src',"../static/vendor/jquery/jquery.min.js");
    // document.head.appendChild(ckeditor);
  },
  methods: {
    async Logout() {
      this.$root.store.logout();
      console.log("toast");
      this.$root.toast("Logout", "User logged out successfully", "success");
      await this.axios.post(`https://backend3-2.herokuapp.com/Logout`);
      if (this.$route.name === "main") {
        this.$forceUpdate;
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
#header-background {
  width: 100%;
  height: 290px;
  background: url("./assets/template (6).png");
  background-size: cover;
}



.copyright{
  position: relative;
  text-align: center;
}
</style>
