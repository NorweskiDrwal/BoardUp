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
              <img :src="imageUrl" height="300"> 
            </v-flex>
          </v-layout>
        <!-- end meetup IMG preview -->

        <!-- meetup description -->  
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="description" label="Description" id="description" v-model="description" multi-line required></v-text-field> 
            </v-flex>
          </v-layout>
        <!-- end meetup description -->
        </form>
      </v-flex>
    </v-layout>
  <!-- end meetup form -->

  <!-- date picker -->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>Choose Date and Time</h2>
      </v-flex>
    </v-layout> 
    <v-layout row class="mb-2">
      <v-flex xs12 sm6 offset-sm3>
        <v-date-picker v-model="date"></v-date-picker>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-time-picker v-model="time" format="24hr"></v-time-picker>
      </v-flex>
    </v-layout>  
  <!-- end date picker -->

  <!-- submit button -->
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-btn class="primary" :disabled="!formIsValid" @click="onCreateMeetup">Create Meetup</v-btn>
        {{ submittableDateTime }}
      </v-flex>
    </v-layout>
  <!-- end submit button -->
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
      description: '',
      date: new Date().toISOString(),
      time: new Date().toISOString()
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== ''
    },
    submittableDateTime () {
      const date = new Date(this.date)
      if (typeof this.time === 'string') {
        const hours = this.time.match(/^(\d+)/)[1]
        const minutes = this.time.match(/:(\d+)/)[1]
        date.setHours(hours)
        date.setMinutes(minutes)
      } else {
        date.setHours(this.time.getHours())
        date.setMinutes(this.time.getMinutes())
      }
      console.log(date)
      return date
    }
  },
  methods: {
    onCreateMeetup () {
      if (!this.formIsValid) {
        return
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
