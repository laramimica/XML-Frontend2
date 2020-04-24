<template>
  <div id="app">

    <div>

      <login-form></login-form>

      <router-view />

    </div>

  </div>

</template>

<script>

import LoginForm from "@/components/LoginForm.vue"

export default {
  components: {
    "login-form" : LoginForm
  } ,

data() {

    return {
    };
  },


}

</script>

<style>

</style>
