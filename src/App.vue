<template>
  <div id="app">

    <div>

      <!-- <login-form></login-form> -->
      <agent-registration></agent-registration>
      
      <router-view />

    </div>

  </div>

</template>

<script>

// import LoginForm from "@/components/LoginForm.vue"
import AgentRegistrationForm from "@/components/AgentRegistrationForm.vue"

export default {
  components: {
    // "login-form" : LoginForm,
    "agent-registration" : AgentRegistrationForm
  } ,

data() {

    return {
    };
  },


}

</script>

<style>

</style>
