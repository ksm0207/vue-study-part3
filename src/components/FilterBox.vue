<template>
  <div @click="selectedFilterImage($event)"
       v-for="filter in photoFilters" :key="filter"
       :class="`${filter} filter-item`"
       :style="{backgroundImage : `url(${this.uploadImg})`}"
       >
  <span>{{filter}}</span>
  </div>
</template>

<script>
export default {
  name: "FilterBox.vue",
  data : () =>({
    selectIdx : 0
  }),
  props : {
    uploadImg : String,
    photoFilters : Object
  },
  methods : {
    selectedFilterImage : function (e) {
      // 선택한 Filter Class Name 가져오기
      const filterClass = e.target.className
      // 메인이미지에 필터를 적용해준다
      const changedClass = document.getElementsByClassName("upload-image")[0]
      changedClass.className = `upload-image ${filterClass}`
      // 클래스를 파라미터를 넘겨라
      return changedClass
    },
  },

  mounted() {
    console.log("FilterBox : " , this.photoFilters)
  }

}
</script>

<style scoped>

.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  cursor: pointer;
  background-size: cover;
  background-position : center;
}

</style>