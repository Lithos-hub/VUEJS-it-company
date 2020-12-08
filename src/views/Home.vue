<template>
  <div>
    <div id="timeline">
      <v-stepper v-model="e1" alt-labels>
        <v-stepper-header class="secondary darken-1 pa-5">
          <a href="#scroll-kraken" class="white--text no-decoration timelineLink stepper-active">Kraken</a>

          <v-spacer></v-spacer>

          <a href="#scroll-us" class="white--text no-decoration timelineLink">US</a>

          <v-spacer></v-spacer>

          <a href="#scroll-ourwork" class="white--text no-decoration timelineLink">OUR WORK</a>

          <v-spacer></v-spacer>

          <a href="#scroll-development" class="white--text no-decoration timelineLink">DEVELOPMENT</a>

          <v-spacer></v-spacer>

          <a href="#scroll-moderndesign" class="white--text no-decoration timelineLink">MODERN DESIGN</a>

          <v-spacer></v-spacer>

          <a href="#scroll-deeplearning" class="white--text no-decoration timelineLink">DEEP LEARNING</a>

          <v-spacer></v-spacer>

          <a href="#scroll-efficiency" class="white--text no-decoration timelineLink">EFFICIENCY</a>
        </v-stepper-header>
      </v-stepper>
    </div>

    <div class="jumbotron jumbotron-fluid text-center bg-transparent">
      <div class="container">
        <h1 class="giantTitle section-divider" id="scroll-kraken">
          Kraken IT Solutions
          <img src="../assets/img/logokraken.png" width="15%" class="mx-auto d-block mt-5" />

          <p class="lead" id="subtitle">We provide technological solutions in a wide spectrum of the market, combining design with maximum functionality</p>
        </h1>
      </div>
    </div>

    <div class="section-divider" id="scroll-us"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">US</h1>
      <v-container>
        <p class="sectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non deserunt deleniti placeat mollitia repellat necessitatibus obcaecati, temporibus, soluta velit ratione consectetur iste nisi, reiciendis doloremque aliquid est! Et, nam voluptates.</p>

        <v-img class="my-10" max-height="500" src="../assets/img/us.jpg"></v-img>

        <v-row>
          <v-col cols="6">
            <p class="columnText ma-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, ea cupiditate ad unde atque minima tempora? Tempora repellendus, quidem numquam et sed, expedita labore, ad ab alias voluptate harum. Eum odio culpa itaque quisquam cumque unde, rerum quas a et quidem. Alias, iste quisquam quod officia
              odit asperiores obcaecati ratione!
            </p>
          </v-col>
          <v-col cols="6">
            <p class="columnText ma-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe minima adipisci ea harum fugit eius, tempora ipsam perferendis quod fuga, natus doloribus! Necessitatibus quaerat ullam dolor optio consequatur vitae deserunt animi iure. Ex, quo! Libero adipisci unde pariatur rem sequi, deleniti doloribus,
              error consectetur necessitatibus excepturi ratione quasi quae. Saepe.
            </p>
          </v-col>
        </v-row>

        <v-col cols="12">
          <h1 class="our-clients">Our clients</h1>

          <v-carousel hide-delimiters :show-arrows="false" cycle height="400" width="700" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item class="p-10 m-15" v-for="(item, i) in slidesImages" :key="i">
              <v-img :src="item.imagecar" width="600" class="ma-auto mt-15"></v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-container>
    </div>

    <div class="section-divider" id="scroll-ourwork"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">OUR WORK</h1>
      <v-container>
        <p class="sectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non deserunt deleniti placeat mollitia repellat necessitatibus obcaecati, temporibus, soluta velit ratione consectetur iste nisi, reiciendis doloremque aliquid est! Et, nam voluptates.</p>

        <v-img class="my-10" max-height="500" src="../assets/img/ourwork.jpg"></v-img>

        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 5" :key="i" class="transparent cyan--text align-content-center">
            <v-expansion-panel-header expand-icon="mdi-arrow-down-drop-circle cyan--text"> Item #{{ i + 1 }} </v-expansion-panel-header>
            <v-expansion-panel-content class="white--text ma-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </div>

    <div class="section-divider" id="scroll-development"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">DEVELOPMENT</h1>
      <v-container>
        <p class="sectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non deserunt deleniti placeat mollitia repellat necessitatibus obcaecati, temporibus, soluta velit ratione consectetur iste nisi, reiciendis doloremque aliquid est! Et, nam voluptates.</p>

        <v-img class="my-10" max-height="500" src="../assets/img/developers.jpg"></v-img>

        <v-row>
          <v-col cols="3">
            <v-card class="mx-auto transparent card-hover" max-width="344">
              <v-img src="../assets/img/product1.jpg" height="300px"></v-img>

              <v-card-title class="card-product-title"> Product name </v-card-title>

              <v-card-subtitle class="card-product-subtitle"> Subtitle about the product </v-card-subtitle>

              <v-card-actions>
                <v-btn color="cyan lighten-2" text> Read more </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show1 = !show1">
                  <v-icon class="cyan--text">{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show1">
                  <v-divider></v-divider>

                  <v-card-text class="white--text text-center"> Information and description about the product developed </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card class="mx-auto transparent card-hover" max-width="344">
              <v-img src="../assets/img/product2.jpg" height="300px"></v-img>

              <v-card-title class="card-product-title"> Product name </v-card-title>

              <v-card-subtitle class="card-product-subtitle"> Subtitle about the product </v-card-subtitle>

              <v-card-actions>
                <v-btn color="cyan lighten-2" text> Read more </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show2 = !show2">
                  <v-icon class="cyan--text">{{ show2 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show2">
                  <v-divider></v-divider>

                  <v-card-text class="white--text text-center"> Information and description about the product developed </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card class="mx-auto transparent card-hover" max-width="344">
              <v-img src="../assets/img/product3.jpg" height="300px"></v-img>

              <v-card-title class="card-product-title"> Product name </v-card-title>

              <v-card-subtitle class="card-product-subtitle"> Subtitle about the product </v-card-subtitle>

              <v-card-actions>
                <v-btn color="cyan lighten-2" text> Read more </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show3 = !show3">
                  <v-icon class="cyan--text">{{ show3 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show3">
                  <v-divider></v-divider>

                  <v-card-text class="white--text text-center"> Information and description about the product developed </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card class="mx-auto transparent card-hover" max-width="344">
              <v-img src="../assets/img/product4.jpg" height="300px" position="top"></v-img>

              <v-card-title class="card-product-title"> Product name </v-card-title>

              <v-card-subtitle class="card-product-subtitle"> Subtitle about the product </v-card-subtitle>

              <v-card-actions>
                <v-btn color="cyan lighten-2" text> Read more </v-btn>

                <v-spacer></v-spacer>

                <v-btn icon @click="show4 = !show4">
                  <v-icon class="cyan--text">{{ show4 ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show4">
                  <v-divider></v-divider>

                  <v-card-text class="white--text text-center"> Information and description about the product developed </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="section-divider" id="scroll-moderndesign"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">MODERN DESIGN</h1>

      <v-row class="ma-10">
        <v-col v-for="(item, i) in designimages" :key="i" class="d-flex child-flex" cols="4">
          <v-img :src="item.image" aspect-ratio="1" class="grey lighten-2 design-img-hover"> </v-img>
        </v-col>
      </v-row>
    </div>

    <div class="section-divider" id="scroll-deeplearning"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">DEEP LEARNING</h1>

      <v-card color="basil" class="theme--dark">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-3 basil--text">AI & NEURAL NETWORKS</h1>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="cyan" grow>
          <v-tab v-for="item in items" :key="item" class="ai-tab-color">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item">
            <v-card color="basil" class="pa-10 theme--dark rounded-0">
              <v-card-text class="ai-card-text">{{ text1 }}</v-card-text>
              <v-card-text class="ai-card-text">{{ text2 }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

    <div class="section-divider" id="scroll-efficiency"></div>

    <div class="section-jumbo">
      <h1 class="sectionTitle">EFFICIENCY</h1>

      <v-row>
        <v-col cols="12" class="efficiency-text">
          <v-container>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, consequuntur? Dignissimos harum unde non ipsum ratione ea fuga, esse doloribus, quae veritatis aperiam, voluptate amet enim consequatur a perspiciatis itaque ipsam! Natus vitae ducimus, suscipit perferendis harum ipsa, fugiat minima molestiae
            ex dolores laboriosam aliquid maiores, commodi tenetur quae.
          </v-container>

          <v-divider class="cyan darken-4"></v-divider>

          <v-container>
            <v-timeline>
              <v-timeline-item v-for="(item, i) in steps" :key="i" :color="item.color" small>
                <template v-slot:opposite>
                  <span class="headline font-weight-bold timeline-step" v-text="item.step"></span>
                </template>
                <div>
                  <h2 class="mb-1 timeline-title">Lorem ipsum</h2>
                  <div class="timeline-text">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { spyScrolling } from "../hooks/scroll";
import { navSmooth } from "../hooks/scroll";

// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      e1: 1,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      slidesImages: [{ imagecar: require("../assets/img/microsoft.png") }, { imagecar: require("../assets/img/bbva.png") }, { imagecar: require("../assets/img/tesla.png") }, { imagecar: require("../assets/img/farma.png") }, { imagecar: require("../assets/img/ibm.png") }],
      steps: [
        {
          color: "cyan",
          step: "Step 1",
        },
        {
          color: "white",
          step: "Step 2",
        },
        {
          color: "red",
          step: "Step 3",
        },
        {
          color: "blue",
          step: "Step 4",
        },
        {
          color: "orange",
          step: "Step 5",
        },
      ],
      designimages: [
        { image: require("../assets/img/design1.jpg") },
        { image: require("../assets/img/design2.jpg") },
        { image: require("../assets/img/design3.jpg") },
        { image: require("../assets/img/design4.jpg") },
        { image: require("../assets/img/design5.jpg") },
        { image: require("../assets/img/design6.jpg") },
        { image: require("../assets/img/design7.jpg") },
        { image: require("../assets/img/design8.jpg") },
        { image: require("../assets/img/design9.jpg") },
      ],
      tab: null,
      items: ["automatic driving systems", "cybersecurity", "natural language processing", "AI in healthcare"],
      text1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      text2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, Etiam elementum arcu eget risus volutpat, vitae tincidunt ipsum euismod. In molestie lorem ex, ut porttitor sem maximus ac. Integer viverra magna ipsum, a viverra risus sagittis sed. Sed accumsan urna placerat scelerisque ultrices. Aliquam interdum vestibulum mi semper viverra. Praesent imperdiet, est sit amet feugiat faucibus, ipsum mauris sodales orci, non eleifend quam justo in lacus. Praesent efficitur tellus quis arcu aliquam, vel varius nunc tincidunt. Quisque dignissim, nisl et finibus pulvinar, sapien urna porttitor lorem, in facilisis ligula turpis at turpis. Nullam feugiat felis id diam interdum finibus. Suspendisse ornare nunc vitae ipsum pharetra egestas. Sed pellentesque sem et nisi volutpat vehicula vitae in enim. Aenean condimentum iaculis purus, eu tincidunt ipsum pellentesque a. Vestibulum condimentum ut metus in commodo. Phasellus venenatis neque volutpat, vestibulum tortor sit amet, maximus arcu. Integer posuere pharetra porttitor. sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    };
  },
  methods: {},
  mounted() {
    navSmooth();
    spyScrolling();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

.giantTitle {
  font-size: $s12;
  font-family: $fontstyle1;
}

#subtitle {
  font-size: $s3;
  font-family: $fontstyle4;
}

#timeline {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 170px;
  left: 0px;
  right: 0px;
}

.timelineLink {
  padding: 15px;
}

.no-decoration:hover {
  text-decoration: none;
}

.stepper-active {
  border-bottom: 1px solid aqua;
  border-top: 1px solid aqua;
  border-radius: 5px;
  box-shadow: -5px 0px 6px aqua, 5px 0px 6px white;
  transition: 1s;
  text-shadow: 0px 0px 10px aqua !important;
}

.section-jumbo {
  width: 100%;
  height: 100%;
  background-color: rgb(17, 17, 17);
  border-radius: 15px;
  box-shadow: 0px 5px 6px black, 0px 12px 10px gray;
}

.sectionTitle {
  font-size: $huge;
  text-align: center;
  font-family: $fontstyle5;
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-divider {
  height: 300px;
}

.sectionText {
  font-size: $s2;
  background: $gradient4;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 100px;
  margin-right: 100px;
  text-align: center;
}

.columnText {
  background: $gradient3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: $s2;
  text-align: justify;
}

.card-product-title {
  font-size: $s2 !important;
  background: $gradient1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-product-subtitle {
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-hover:hover {
  transform: scale(1.1);
  transition: 0.5s ease-in-out;
}

.design-img-hover:hover {
  transform: scale(1.05);
  transition: 0.5s ease-in-out;
}

.ai-tab-color {
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.ai-card-text {
  font-size: $s2 !important;
  letter-spacing: 3px !important;
  padding: 50px;
  text-align: justify;
  background: $gradient3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.efficiency-text {
  font-size: $s2 !important;
  letter-spacing: 3px !important;
  font-family: $fontstyle2;
  padding: 50px;
  text-align: justify;
  background: $gradient3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-text {
  font-size: $s2 !important;
  letter-spacing: 3px !important;
  font-family: $fontstyle5;
  padding: 25px;
  text-align: justify;
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-title {
  font-size: $s3 !important;
  letter-spacing: 3px !important;
  font-weight: bold;
  font-family: $fontstyle2 !important;
  padding: 25px;
  text-align: justify;
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.timeline-step {
  font-size: $s2 !important;
  letter-spacing: 3px !important;
  font-family: $fontstyle3 !important;
  padding: 25px;
  text-align: justify;
  background: $gradient2;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.our-clients {
  font-size: $s10 !important;
  letter-spacing: 3px !important;
  font-family: $fontstyle2 !important;
  padding: 25px;
  text-align: center;
  background: $gradient3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
