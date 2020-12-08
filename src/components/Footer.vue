<template>
  <v-footer padless id="mainFooter">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="py-4 text-center white--text" cols="12" id="subFooter">
        {{ new Date().getFullYear() }} — <strong>Kraken IT Solutions</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      links: ["Team", "Jobs", "Services", "Social Media", "Blog", "Contact Us"],
    };
  },
};
</script>

<style>
#mainFooter {
  background: linear-gradient(
    to right,
    rgb(0, 195, 255) 0%,
    rgb(9, 30, 88) 50%
  );
}
#subFooter {
  background: #161616;
}
</style>
