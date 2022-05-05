<template>
  <div id="app">
    <section>
      <vue-horizontal-list :items="items" :options="options">
        <template v-slot:default="{item}">
          <div class="item">
            <img :src="item.src">
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
          </div>
        </template>
      </vue-horizontal-list>
    </section>
  </div>
</template>

<script>

export default {
  name: 'sample',
  components: {
  },
  data () {
    return {
      items: [
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 1', content: 'Content item with description' },
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 2', content: 'Content item with description' },
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 3', content: 'Content item with description' },
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 4', content: 'Content item with description' },
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 5', content: 'Content item with description' },
        { src: 'https://pro-foto.jp/free/img/images_big/hnb0037-049.jpg', title: 'Item 6', content: 'Content item with description' }
      ]
    }
  }
}
</script>
<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 24px;
}
@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}
</style>
