<template>
    <v-container>
      <v-layout column>
        <v-btn class="primary" @click="close"> Close items </v-btn>
        <v-expansion-panels>
          <v-expansion-panel expand>
            <v-expansion-panel-content v-for="(sec, i) in sections" :key="i">
              <template v-slot:header>
                <v-flex xs12 sm12 md12>
                  <v-text-field v-text="sec"></v-text-field>
                </v-flex>
              </template>
              <v-card>
                <v-container fluid grid-list-md>
                  <v-layout row wrap>
                    <v-flex
                      v-for="card in cards"
                      :key="card.title"
                      v-bind="{ [`xs${card.flex}`]: true }"
                    >
                      <v-card>
                        <v-flex justify-center>
                          <v-img :src="card.src" width="100%">
                            <v-container fill-height fluid pa-2>
                              <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                  <span
                                    class="headline white--text"
                                    v-text="card.title"
                                  ></span>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-img>
                        </v-flex>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn icon>
                            <v-icon>edit</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>list</v-icon>
                          </v-btn>
                          <v-btn icon>
                            <v-icon>delete</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: [],
      sections: [
        "Welcome to the CET Safety & Compliance Portal",
        "Emergency Management",
        "User Experience Links",
      ],
      cards: [
        {
          title: "",
          src: "https://s3-ap-southeast-2.amazonaws.com/ce-static-assets-compliengine.com/cs-primary-icons-120/Guidelines.png",
          flex: 2,
        },
        {
          title: "",
          src: "https://s3-ap-southeast-2.amazonaws.com/ce-static-assets-compliengine.com/cs-primary-icons-120/Guidelines.png",
          flex: 2,
        },
        {
          title: "",
          src: "https://s3-ap-southeast-2.amazonaws.com/ce-static-assets-compliengine.com/cs-primary-icons-120/Guidelines.png",
          flex: 2,
        },
      ],
    };
  },
  methods: {
    close() {
      this.model = [];
    },
  },
  // watch: {
  //   model(nxt, old) {
  //     let oldIdx = old.indexOf(true);
  //     if (oldIdx >= 0) {
  //       nxt[oldIdx] = false;
  //     }
  //     let activeIdx = nxt.indexOf(true);
  //     console.log("activeIdx", activeIdx);
  //   },
  // },
};
</script>

<style scoped>
.full-screen {
  display: block;
  position: fixed;
  width: 50%;
  height: 800px;
  left: 300px;
  background-color: lightblue !important;
}
</style>
