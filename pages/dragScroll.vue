<template>
<div class="grid-container">
  <main class="grid-item main">
    <div class="items">
      <div class="item item1"></div>
      <div class="item item2"></div>
      <div class="item item3"></div>
      <div class="item item4"></div>
      <div class="item item5"></div>
      <div class="item item6"></div>
      <div class="item item7"></div>
      <div class="item item8"></div>
      <div class="item item9"></div>
      <div class="item item10"></div>
    </div>
  </main>
</div>
</template>

<script>
  export default {
    name: 'dragScroll'

  }
</script>

<style lang="scss" scoped>
//VARIABLES BECAUSE CSS PREPROCESSORS ARE COOL
$gray: #555;
$yellow: #f2e968;
$white: #efefef;


.grid-container {
  background: $white;
  font-family: 'Rubik', sans-serif;
}

//ENABLE CSS GRID FOR LIFT OFF  🚀
@supports(display: grid) {

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;

    //Let the craziness begin!!!
    grid-template-areas:
      "header header header"
      "title title footer"
      "main main main";
    @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: 0.3fr 1fr auto 1fr;
      grid-template-areas:
        "header"
        "title"
        "main"
    }
  }

  .grid-item {
    color: #fff;
    background: skyblue;
    padding: 3.5em 1em;
    font-size: 1em;
    font-weight: 700;
  }

  .main {
    color: lighten($gray, 25%);
    background-color: lighten(skyblue, 60%);
    grid-area: main;
    padding: 0;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .items {
    position: relative;
    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    transition: all 0.2s;
    transform: scale(0.98);
    will-change: transform;
    user-select: none;
    cursor: pointer;
  }


  .item {
    display: inline-block;
    background: skyblue;
    min-height: 250px;
    min-width: 400px;
    margin: 2em 1em;
    @media screen and (max-width: 500px) {
      min-height: 200px;
      min-width: 200px;
    }
  }
}


a {
  display: block;
  color: lighten(skyblue, 15%);
  text-decoration: underline;
  margin: 1em auto;
  &:hover {
    cursor: pointer;
  }
}

i {
  color: skyblue;
}
</style>
