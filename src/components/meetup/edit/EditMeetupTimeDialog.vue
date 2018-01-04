<template>
  <v-dialog width="350px" persistent v-model="editDialog">
    <v-btn accent slot="activator">
      Edit Time
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Meetup Time</v-card-title>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-time-picker v-model="editableTime" style="width: 100%" actions format="24hr">
              <template slot-scope="{save, cancel}">
                <v-btn class="blue--text darken-1" flat @click.native="editDialog = false">Close</v-btn>
                <v-btn class="blue--text darken-1" flat @click.native="onSaveChanges">Save</v-btn>
              </template>
            </v-time-picker>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['meetup'],
    data () {
      return {
        editDialog: false,
        editableTime: null
      }
    },
    methods: {
      onSaveChanges () {
        const newDate = new Date(this.meetup.date)
        const hours = this.editableTime.match(/^(\d+)/)[1]
        const minutes = this.editableTime.match(/:(\d+)/)[1]
        newDate.setHours(hours)
        newDate.setMinutes(minutes)
        this.$store.dispatch('updateMeetupData', {
          id: this.meetup.id,
          date: newDate
        })
      }
    },
    created () {
      let date = new Date(this.meetup.date) // set Date to the date of meetup
      let day = date.getUTCDate()  // +1 cuz the days are counted from 0-30
      let month = date.getUTCMonth() + 1 // +1 cuz the months are counted from 0 to 11
      let year = date.getUTCFullYear()
      this.editDate = year + '-' + month + '-' + day
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
