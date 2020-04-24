<template>
    <b-jumbotron bg-variant="light" text-variant="dark">
      <template v-slot:header>Log In</template>

      <template v-slot:lead>
        <b-form @submit="onSubmit">
          
          <b-form-group id="input-group-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-button type="submit" variant="primary" style="width: 320px">Log In</b-button>
          </b-form-group>

          <hr>

        </b-form>
      </template>

      <b-form-group style="margin-left: 10%;">
        <label style="margin-right: 2%">Don't have an account?</label>
        <b-link href="#foo">Sign Up!</b-link>
        <br/>
        <label style="margin-right: 2%">or</label>
        <b-link href="#foo">Skip!</b-link>
      </b-form-group>

    </b-jumbotron>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
    }
}
</script>

<style>

form {
    display: block;
    margin-top: 10%;
    margin-left: 10%;
    width: 320px;
}

.jumbotron {
    margin-top: 3%;
    margin-left: 6%;
    width: 460px;
    height: 460px;
}

.display-3 {
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
    margin-left: 25%;
}

body {
    background-image: url('https://scontent.fbeg3-1.fna.fbcdn.net/v/t1.15752-9/s2048x2048/95128562_2496483293999445_6954627335941259264_n.jpg?_nc_cat=110&_nc_sid=b96e70&_nc_eui2=AeHjiGhPQZnFxMvGVnAfpJOwFbohUj9Lh9oVuiFSP0uH2hgx1XgRnwpjRCSxZs8FILg&_nc_ohc=NP0OMrvCMIIAX87brWQ&_nc_ht=scontent.fbeg3-1.fna&_nc_tp=7&oh=143d7cf76e8012b9f082de4cb6719a6f&oe=5EC88FA8');
    background-repeat: no-repeat;
}

</style>