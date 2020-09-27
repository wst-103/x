<template>
  <div class="home"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      let value = {
        username: "sesp2",
        password: "1"
      }
      this.$eiAxios.post('/login/checklogin',value).then(resp =>{
        console.log(resp)
      })
    },
  },
};
</script>

<style scoped>
</style>