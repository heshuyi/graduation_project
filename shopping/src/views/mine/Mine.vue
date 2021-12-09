<template>
  <div>
    <div @click="tuichu">tuichu</div>
  </div>
</template>
<script>
export default {
  name:'Mine',
  data(){
    return{
      calues:123
    }
  },
  methods:{
    tuichu(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>