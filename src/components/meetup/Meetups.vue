<template>
  <v-container>
    <v-layout row wrap v-for="meetup in meetups" :key="meetup.id" class="mb-2">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="info">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media :src="meetup.imageUrl" height="130px"></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div class="white--text">
                    <h4 class="headline">{{ meetup.title}}</h4>
                    <p>{{ meetup.date | date }}</p>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="white" :to="'/meetups/' + meetup.id">
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Meetup',
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
