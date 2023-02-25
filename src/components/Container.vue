<template>
  <Post v-if="this.tabIndex === 0" :instagram="this.instagram" :uploadImg="this.uploadImg" />

  <!-- 필터 선택 화면  -->
  <div v-if="this.tabIndex === 1">
    <div class=" upload-image" :style="{backgroundImage : `url(${this.uploadImg})`}"></div>
    <div class="filters">
      <FilterBox :uploadImg="this.uploadImg"
                 :photoFilters="this.photoFilters"/>
    </div>
  </div>

  <!-- 글 작성 화면  -->
  <div v-if="tabIndex === 2">
    <div class="upload-image" :style="{backgroundImage : `url(${this.uploadImg})`}"></div>
    <div class="write">
      <textarea class="write-box" placeholder="글 작성하기"
                @input="$emit('write', $event.target.value)" />
    </div>
  </div>


</template>
<script>

import Post from '../components/Post.vue'
import FilterBox from "@/components/FilterBox.vue";

export default {
  data : () =>({
    newContent : null,
    photoFilters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
      "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
      "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
  }),
  methods : {},
  props : {
    instagram : Object,
    tabIndex : Number,
    uploadImg : String
  },
  components : {
    Post,
    FilterBox
  },
  watch : {
    uploadImg () {
      console.log("Container Get Image : ", this.uploadImg)
    }
  },
}

</script>

<style scoped>

.upload-image{
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size : cover;
}
.filters{
  overflow-x:scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}

</style>