<template>
  <div v-for="filter in photoFilters" :key="filter"
       :class="`${filter} filter-item`"
       :style="{backgroundImage : `url(${this.uploadImg})`}"
       > {{filter}}</div>
</template>

<script>
export default {
  name: "FilterBox.vue",
  data : () =>({

  }),
  props : {
    uploadImg : String,
    photoFilters : Object
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
  background-size: cover;
  background-position : center;
}

</style>