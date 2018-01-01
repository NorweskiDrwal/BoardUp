<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Create a new Meetup</h2>
      </v-flex>
    </v-layout>

  <!-- meetup form -->  
    <v-layout row>
      <v-flex xs12>
        <form>
        <!-- meetup title -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field> 
            </v-flex>
          </v-layout>
        <!-- end meetup title -->

        <!-- meetup location -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="location" label="Location" id="location" v-model="location" required></v-text-field> 
            </v-flex>
          </v-layout>
        <!-- end meetup location -->

        <!-- meetup IMG -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="imageUrl" label="Image URL" id="imageUrl" v-model="imageUrl" required></v-text-field> 
            </v-flex>
          </v-layout>
        <!-- end meetup IMG -->

        <!-- meetup IMG preview -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl"> 
            </v-flex>
          </v-layout>
        <!-- end meetup IMG preview -->

        <!-- meetup description -->  
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="description" label="Description URL" id="description" v-model="description" multi-line required></v-text-field> 
            </v-flex>
          </v-layout>
        <!-- end meetup description -->
        </form>
      </v-flex>
    </v-layout>
  <!-- end meetup form -->
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="primary">Create Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'CreateMeetup',
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
