<template>
  <div class="contains-area">
    <!-- <div class="squeez-area"> -->
    <div
      class="select-catalog-photo-area"
      :style="{ height: areaHeight + 'px', width: areaWidth + 'px' }"
    >
      <div
        class="select-catalog-photo"
        :style="{ height: imgHeight + 'px', width: imgWidth + 'px' }"
      >
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg" />
      </div>
    </div>
    <!-- </div> -->
    <div
      id="box"
      class="grab-bing"
      v-dragscroll.y="true"
      @dragscrollmove="dragscrollmove"
    >
      <h2>アーサー王物語</h2>
      <p>
        我等が尊ふとむ王は我等の良心、<br />
        我等が重んずる良心は我等の王。<br />
        邪教を挫き、基督を奉じ。<br />
        出でゝ人の寃苦を救ひ。<br />
        誣言を語らず、誣言に聽かず。<br />
        神の言の如く我言を守り。<br />
        一人の少女を愛して心移さず、<br />
        其愛を得るまで、義勇の功幾年を積んで、<br />
        我戀人に奉ずべし。<br />
        To reverence the King より as their King
        まで文字通りにすれば、王が彼等の良心なるが如く王を尊重し、又彼等の良心が彼等の王なる如く良心を尊重すべし<br />
        To break より the Christ
        まで譯文の如く別に字解を要せざるが、是れ所謂破邪顯正の誓ひを表明したるもの。<br />
        To ride より human wrongs
        までは文字通りには、人の寃苦を救濟しつゝ遠く騎り出づべし、也。我封建時代と同じく諸侯各所に割據して戰を常とし、治安下に布かず、野武士強盜の類横行して良民堵に安んぜず、殊に老幼婦女の奇禍に罹かるもの頗る多し、武者修行と稱して諸國を遍歴し其の難を救ふを以て心ある武士の務めとなしたり、是れ所謂強きを挫き弱を助くる義侠の精神を表明するもの。
        To speak……listen to it
        は字義の解釋を要せざるべきも、是れ佛教の所謂不妄語戒に含有するものにて、英語に謂ふ
        justice（不十分ながら、公正とか正義とか譯すべきもの）の精神を表明せるもの也。<br />
        To honor より God's に至る一行は、武士に二言なしの精神也。<br />
        To love……won her の三行の中、cleave to her
        は愛する女に我愛を傾けて變わらざるの意、worship her by years of noble
        deeds
        は幾年高義の行爲を以て戀人に誠を表すと云ふの義也。此三行は武士の婦人を尊敬する精神且つ一夫一婦の主義を表明したるもの、英詩人
        Dryden の Alexander's Feast なる詩中に<br />
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { dragscroll } from "vue-dragscroll";

Vue.directive("dragscroll", dragscroll);
export default {
  name: "dragAndScroll",
  data() {
    return {
      areaHeight: 0,
      imgHeight: 0,
      areaWidth: 0,
      imgWidth: 0,
      scrollTop: 0,
      scrollX: 0,
      directives: {
        dragscroll: dragscroll,
      },
    };
  },
  mounted() {
    // window.addEventListener("scroll", this.getScroll)
    this.areaHeight = 200;
    this.imgHeight = 194;
    this.areaWidth = 176;
    this.imgWidth = 170;
  },
  computed: {
    // selectCatalogStyle: {
    //   get() {
    //     return `height: ${this.height} + "px";`;
    //   },
    // },
  },
  methods: {
    //   getScroll() {
    //     this.scrollX = window.scrollX
    // },
    dragscrollmove(param) {
      console.log(param.target.scrollTop);
      // if(param.target.scrollTown < 200) {
      //   this.height = this.height - param.target.scrollTop;

      // } else {
      //   this.height = param.target.scrollTop - this.height ;
      // }
      if (param.target.scrollTop === 276) {
        this.areaHeight = 0;
        this.imgHeight = 0;
        this.areaWidth = 0;
        this.imgWidth = 0;
      } else {
        this.areaHeight = 276 - param.target.scrollTop;
        this.imgHeight = 270 - param.target.scrollTop;

        this.areaWidth = 276 - param.target.scrollTop;
        this.imgWidth = 270 - param.target.scrollTop;
      }
    },
    getTitleMonthFormat(date) {
      if (date === "") return date;
      let m = date.substr(5, 2).replace(/^0+/, "");
      return m;
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split("-");
      this.text = `${year}${month}${day}`;
      return;
    },
  },
};
</script>

<style scoped>
.contains-area {
  display: block;
  position: fixed;
  width: 50%;
  height: 100%;
  left: 300px;
  background-color: black;
}
.squeez-area {
  display: inline-block;
  position: absolute;
  left: 0px;
  width: 100%;
  height: 215px;
}
.select-catalog-photo-area {
  display: inline-block;
  position: absolute;
  top: 15px;
  width: 176px;
  height: 200px;
  max-height: 200px;
  max-width: 176px;
  left: 0px;
  background-color: rgb(8, 244, 244);
}
.select-catalog-photo {
  display: flex;
  position: absolute;
  width: 170px;
  height: 194px;
  max-height: 194px;
  max-width: 170px;
  left: 3px;
  top: 3px;
}
.grab-bing {
  /* cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab; */
  /* width: 200px;
  height: 200px; */
  display: block;
  position: absolute;
  top: 230px;
  background-color: aqua;
  height: 400px;
  width: 600px;
  overflow-y: hidden;
}

/* .grab-bing:active {
  /* cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
} */
/* >>> div.main_container {
  width: 684px !important;
} */

>>> .v-btn::before {
  background-color: transparent;
}
>>> .v-window__next,
>>> .v-window__prev {
  top: 0%;
  height: 400px;
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  border-bottom-left-radius: 0%;
  margin: 0%;
}
>>> .v-window__next .v-btn,
>>> .v-window__prev .v-btn {
  top: calc(50% - 20px);
}
>>> .v-date-picker-header {
  display: none;
}
>>> .v-date-picker-title__date {
  font-size: 14px;
}

/* >>> .v-picker__title {
  background: #424242;
} */
>>> .v-date-picker-title {
  width: 41.5px;
  align-items: center;
}

>>> .v-date-picker-table {
  /* padding: 0px; */
  /* height: 226px; */
  height: 356px;
}

/* >>> .v-date-picker-title,
>>> .v-date-picker-table--date th:nth-child(1),
>>> .v-date-picker-table--date td:nth-child(1) {
  background-color: lightgray;
} */

>>> .v-date-picker-table table {
  border-spacing: 0px !important;
}
>>> .v-date-picker-title {
  pointer-events: none;
}
>>> .v-date-picker-title::before,
>>> .v-picker__body::before {
  height: 438px;
  width: 70px;
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  background-color: #1e1e1e;
}
>>> .v-picker__title,
>>> .v-picker__body {
  background-color: black;
}
>>> .v-picker__body {
  border-radius: 0px !important;
}
.fix_cal_wh {
  width: 439px;
  height: 438px;
}
.v-picker {
  font-size: 2.2em;
}
.v-divider {
  border-color: #ffffff !important;
  margin: 25px 25px 0 25px;
}
>>> .v-date-picker-table th,
>>> .v-date-picker-table .v-btn {
  font-size: 15px !important;
}
>>> .v-date-picker-title__year {
  font-size: 16px !important;
}
>>> .v-date-picker-title__date {
  font-size: 18px !important;
}
>>> .v-slide-group__next,
>>> .v-slide-group__prev {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 250px 15px 0 15px;
  background-color: #3d3d3d;
}
>>> .v-sheet {
  background-color: black;
}
</style>
