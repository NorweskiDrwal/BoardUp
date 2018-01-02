<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
              <!-- email -->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="email" label="Mail" id="email" v-model="email" type="email" required></v-text-field>  
                  </v-flex>
                </v-layout>
              <!-- end email -->

              <!-- password -->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>  
                  </v-flex>
                </v-layout>
              <!-- end password -->

              <!-- confirm password -->
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field name="confirmPassword" label="Confirm Password" id="confirmPassword" v-model="confirmPassword" type="password" :rules="[comparePasswords]"></v-text-field>  
                  </v-flex>
                </v-layout>
              <!-- end confirm password -->

              <!-- buttons -->
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit">Register</v-btn> 
                  </v-flex>
                </v-layout>
              <!-- end buttons -->
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  computed: {
    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    }
  },
  methods: {
    onRegister () {
      // Vuex
      console.log({email: this.email, password: this.password, confirmPassword: this.confirmPassword})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
