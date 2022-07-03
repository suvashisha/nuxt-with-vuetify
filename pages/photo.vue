<template>
  <v-row>
    <v-col
      v-for="n in 9"
      :key="n"
      class="d-flex child-flex"
      cols="4"
    >
      <div>
      <v-img
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
      </v-img>
      </div>
       <div :class="sampleClass" @click="click"></div>

    </v-col>
  </v-row>
</template>

<script>
  export default {
    data() {
    return {
      active: false
    };
  },
  computed: {
    sampleClass() {
      return {
        'triangle': true,
        active: this.active,
      };
    },
  },
      methods: {
    click() {
      this.active = !this.active;
      console.log("clicked");
    },
  },

  }
</script>

<style scoped>
.fev-area1 {
  background: red;
  color: white;
  width: 4.5rem;
  height: 4rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  line-height: 1.1;
  text-align: center;
  position: absolute;
  top: -1.85rem;
  /* right: -2.1rem; */
  transform: rotate(45deg);
  margin-left: 200px;
  }
.fev-area {
width: 0;
  height: 0;
  border-top: 150px solid #ffcc00;
  border-bottom: 150px solid transparent;
  border-left: 150px solid transparent;
  position:absolute;
  right:0;
}


.option{
  position: relative;
  /* margin:10px 0 0 0; */
  /* padding:10px; */
  background:#22244a;

/* add */
position: absolute;
  margin-left: 237px;
}

.option:after {
   content: "";
   position: absolute;
   top: 0;
   right: 0;
   width: 0;
   height: 0;
   display: block;
   border-left: 55px solid transparent;
   /* border-bottom: 35px solid transparent; */
   border-top: 55px solid #0094bb;
   z-index:0;
}
.option.active {
    transition: all 0.5s 0s ease;
}

.block {
    color: #FFF;
    border: 1px solid #0082D2;
    background: #0082D2;
    position: relative;
    width: 300px;
    padding: 15px;
    margin: 10px;
    text-align: center;
  }

  .block .title {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 20px auto;
  }

  /** ラベル背景の共通スタイル **/
  .block:before {
    content: "";
    position: absolute;
  }

  /** ラベル文字の共通スタイル **/
  .block::after {
    content: "CLICK";
    position: absolute;
    font-weight: bold;
    color: #0082D2;

  }
  /** 右上のラベル背景 **/
  .block.top-right:before {
    top: 0;
    right: 0;
    border-bottom: 4.5em solid transparent;
    border-right: 4.5em solid #fff;
  }

  /** 右上のラベル文字 **/
  .block.top-right::after {
    top: 13px;
    right: 0;
    transform: rotate(45deg);
  }




.triangle {
     position: absolute;
   display: block;
	background-color: #003BDE;
	clip-path: polygon(0 0, 100% 100%, 100% 0);
	width: 70px;
	height: 70px;
  margin-left: 166px;
}

  .triangle.active {
    background-color: #003BDE;
    transition: background-color cubic-bezier(0.215, 0.61, 0.355, 1) .4s;
}
</style>
