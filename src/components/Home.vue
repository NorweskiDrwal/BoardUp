<template>
  <v-container>
  <!-- meetups buttons -->
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large to='/meetups' class="purple lighten-3">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large to='/meetup/new' class="purple lighten-3">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>
  <!-- end meetup buttons -->

  <!-- carousel -->
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel hide-delimiters style="cursor:pointer">
          <v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
            <div class="title pa-3">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout> 
  <!-- end carousel -->

  <!-- meetups buttons -->
    <v-layout row wrap class="mt-2">
      <v-flex xs12 sm12 class="text-xs-center">
        <p>Join our awesome meetups</p>
      </v-flex>
    </v-layout>
  <!-- end meetup buttons -->  
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    background: rgba(0,0,0,0.5);
    border-radius: 10px;
    color: #fff;
    font-size: 40px !important;
  }
</style>
