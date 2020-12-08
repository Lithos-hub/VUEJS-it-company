<template>
  <div>
    <v-app-bar dark prominent app fade-img-on-scroll>
      <div class="video-container">
        <video autoplay loop id="navbarVideo" type="video/webm">
          <source src="../assets/img/videoParticles1.webm" />
        </video>
      </div>

      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Kraken IT Solutions</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="cyan">mdi-email</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon color="cyan">mdi-linkedin</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="cyan">mdi-facebook</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="cyan">mdi-twitter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="cyan">mdi-magnify</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title color="cyan">
          <v-spacer></v-spacer>
          <v-tab>Solutions for Start Ups</v-tab>
          <v-tab>Ecommerce solutions</v-tab>
          <v-tab>Hosting & Domain</v-tab>
          <v-tab>Online Marketing</v-tab>
          <v-tab>Artificial Intelligence</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" dark width="25%" temporary app>
      <video autoplay loop id="sidebarVideo" type="video/webm">
        <source src="../assets/img/videoParticles2.webm" />
      </video>
      <v-container>
        <v-row>
          <v-col cols="3"> </v-col>
          <v-col cols="6">
            <img src="../assets/img/logokraken.png" width="60%" class="mx-auto d-block mb-5" />
            <h1 id="logoBrand">Kraken IT Solutions</h1>
          </v-col>
          <v-col cols="3"> </v-col>
        </v-row>
      </v-container>

      <v-list nav>
        <v-list-item-group id="sidebar">
          <v-list-item>
            <v-list-item-title class="centeredList">Products</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">Partners</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">R & D</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">Careers</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">Philosophy</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">About us</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">Resources</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="centeredList">Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

* {
  font-family: $fontstyle1;
  z-index: 9999;
}

#sidebar {
  margin-top: 25%;
}

.centeredList {
  text-align: center !important;
  font-size: $s2 !important;
  background: $gradient1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    transform: scale(1.2);
    font-weight: bold;
    text-shadow: 0px 0px 10px rgba(0, 225, 255, 0.747);
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: 0.3s;
  }
}

#sidebarVideo {
  position: absolute;
  top: 0px;
  bottom: 0px;
  height: 100%;
}

#navbarVideo {
  width: 100%;
}

.video-container {
  z-index: -100;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}

#logoBrand {
  color: rgb(0, 189, 214);
  font-size: $s2;
  text-align: center;
  font-family: $fontstyle4;
  text-transform: uppercase;
}
</style>
