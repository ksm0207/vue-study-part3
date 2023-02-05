<template>
  <div>
    Test : {{this.data1}}
  </div>
</template>

<script lang="javascript">

export default {
  name : 'home',
  data : () => ({
      data1 : "Hello"
  }),
  methods : () =>({
    getName : function (){
      return ""
    }
  })
}

</script>

<style scoped>

</style>