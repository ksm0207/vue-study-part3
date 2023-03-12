<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li @click="this.tabIndex = 2" v-if="tabIndex === 1"> Next</li>
      <li @click="publish($event)" v-if="tabIndex === 2"> 글발행</li>
    </ul>
    <img @click="moveHome()" src="../assets/logo.png" class="logo"  alt=""/>
  </div>

  <Container
      :instagram="this.instagram"
      :tabIndex="this.tabIndex"
      :uploadImg="this.uploadImg"
      @write="write"
      @getFilterOption="getFilterOption"/>
  <button v-if="this.tabIndex === 0" @click="getMoreData()">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="imageUpload"  type="file" id="file" class="inputfile" />
      <label v-if="this.tabIndex === 0" for="file" class="input-plus">+</label>
    </ul>

  </div>
</template>

<script lang="javascript">

import Container from '../components/Container.vue'
import SampleData from '../assets/datas/InstagramData'
import axios from "axios";
export default {
  name : 'home',
  data : () => ({
    instagram : SampleData,
    btnCount : 0,
    tabIndex : 0,
    uploadImg : "",
    newContent: "",
    filterOption : ""
  }),
  methods : {
    async getMoreData(){
      console.log("getMoreData Ready...")
      await axios.get(`https://codingapple1.github.io/vue/more${this.btnCount}.json`)
          .then((response)=>{
            if(response !== null) {
              this.btnCount +=1
              // 새로운 데이터 Push
              this.instagram.push(response.data)
            }
          })
          .catch((error)=>{
            console.log("Error : " , error);
            alert("마지막 게시물 입니다.");
          })
    },
    imageUpload : function (event){
      console.log("Image Upload ...")
      const image = event.target.files
      let url = null
      if (image.length > 0) {
        url = URL.createObjectURL(image[0])
        this.uploadImg = url
        this.tabIndex ++;
      }
    },
    publish : function (e){
      let sendData = {
        name: "아이언맨",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.newContent,
        filter: this.filterOption
      }
      this.instagram.unshift(sendData)
      this.tabIndex = 0
    },
    write : function (data) {
      return this.newContent = data
    },
    getFilterOption : function (data) {
      this.filterOption = data
    },

    moveHome : function () {
      this.$router.go(0)
    }

  },
  components : {
    Container
  },


}

</script>

<style scoped>

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}

</style>