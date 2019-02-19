<template>
  <div id="app">

    <header class="header">
      <h1 class="title">Find the closest venues to you</h1>

      <button class="btn" @click="onSeeVenues">
        See venues close to me
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
    };
  },

  methods: {
    getPosition() {
      return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },

    async onSeeVenues() {
      try {
        const { coords } = await this.getPosition();
        const { data } = await getVenues(coords);

        this.list = data.response.groups[0].items;
      }
      catch(error) {
        console.log(error);
      }
    },
  },
};
</script>
