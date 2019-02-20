<template>
  <div id="app" :class="['app', { 'has-results': hasResults }]">
    <header class="header">
      <h1 class="title">Venues List</h1>

      <button
        :class="['btn', { 'loading': isBtnLoading }]"
        :disabled="isBtnDisabled"
        @click="onSeeVenues"
      >
        <span v-if="!loading" v-text="buttonText" />
        <icon
          icon="spinner"
          spin
          v-else
        />
      </button>
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
      waiting: false,
    };
  },

  computed: {
    buttonText() {
      return this.waiting ? 'Getting Location...' : 'See venues around me';
    },

    hasResults() {
      return this.list.length;
    },

    isBtnLoading() {
      return this.waiting || this.loading;
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
      this.waiting = true;

      try {
        const { coords } = await this.getPosition();
        this.waiting = false;
        this.loading = true;

        const { data } = await getVenues(coords);
        this.list = data.response.groups[0].items;

        this.loading = false;
      }
      catch(error) {
        this.waiting = false;
        this.loading = false;

        alert(error);
      }
    },
  },
};
</script>
