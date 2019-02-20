<template>
  <div id="app" :class="['app', { 'has-results': hasResults }]">
    <header class="header">
      <h1 class="title">Venues List</h1>

      <button
        :class="['btn', { loading }]"
        :disabled="isBtnDisabled"
        v-text="buttonText"
        @click="onSeeVenues"
      />
    </header>

    <venues-list :list="list" />
  </div>
</template>

<script>
import { getVenues } from '@/utils/api';
import VenuesList from '@/components/VenuesList';

export default {
  name: 'app',

  components: { VenuesList },

  data() {
    return {
      list: [],
      loading: false,
    };
  },

  computed: {
    buttonText() {
      return !this.loading ? 'See venues around me' : 'Loading...';
    },

    hasResults() {
      return this.list.length;
    },

    isBtnDisabled() {
      return this.hasResults || this.loading; 
    },
  },

  methods: {
    getPosition() {
      return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },

    async onSeeVenues() {
      this.loading = true;

      try {
        const { coords } = await this.getPosition();
        const { data } = await getVenues(coords);

        this.list = data.response.groups[0].items;

        this.loading = false;
      }
      catch(error) {
        console.log(error);

        this.loading = false;
      }
    },
  },
};
</script>
