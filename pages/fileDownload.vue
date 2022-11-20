<template>
  <div class="full-screen">
    <div class="file-download-btn-area" @click="downloadFile">Download</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textData: "aaaaaa",
    };
  },
  mounted() {
    this.downloadFile();
  },
  methods: {
    downloadFile() {
      console.log("Click Download Button");
      //this.download();
      let url = window.URL.createObjectURL(
        new Blob([this.textData], { type: "text/plain" })
      );
      let link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "output.txt"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },
  },
  download() {
    // let textblob = new Blob([this.textData], { type: "text/plain" }); // where textData refers to the retrieved text value of a form input
    // let dwnlnk = document.createElement("a");
    // dwnlnk.download = "output.txt";
    // if (window.webkitURL != null) {
    //   dwnlnk.href = window.webkitURL.createObjectURL(textblob);
    // } else {
    //   dwnlnk.href = window.URL.createObjectURL(textblob);
    // }
    // dwnlnk.click();
    let url = window.URL.createObjectURL(
      new Blob([this.textData], { type: "text/plain" })
    );
    let link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "output.txt"); //or any other extension
    document.body.appendChild(link);
    link.click();
  },
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
.file-download-btn-area {
  display: block;
  position: absolute;
  width: 100px;
  height: 50px;
  top: 200px;
  left: 200px;
  background-color: black !important;
  border-radius: 20px;
  text-align: center;
  font: bold 16px Noto Sans JP;
  color: #ffffff;

  /* center */
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
</style>
