<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container id="mainContent">
        <router-view></router-view>
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#mainContent {
  margin-top: 50px;
}

/* SCROLL BAR */

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #26e2d3;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(27, 27, 27);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 104, 85);
}
</style>
