<template>
  <div>
    <form @submit.prevent="onSignin">
    <input type="email" v-model="email" placeholder="email">
    <input type="password" placeholder="pass" v-model="password">
    <input type="submit" value="signin">
      <span slot="loader" class="custom-loader"></span>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      loading () {
        return this.$store.getters.loading
      },
      userIsAuthenticated () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/todo')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      }
    }
  }
</script>

