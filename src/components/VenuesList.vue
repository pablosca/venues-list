<template>
  <section class="venues-section">
    <div class="bar">
      <span>
        <strong>{{sortedList.length}} venues</strong>
      </span>
      <sort-nav v-model="selectedFilter" />
    </div>

    <div class="venues-list">
      <venue-item
        v-for="(item, index) in sortedList"
        :key="index"
        :info="item"
      />
    </div>
  </section>
</template>

<script>
import SortNav from '@/components/SortNav';
import VenueItem from '@/components/VenueItem';

export default {
  props: {
    list: Array,
  },

  components: {
    SortNav,
    VenueItem,
  },

  data() {
    return {
      selectedFilter: 'relevance',
    };
  },

  computed: {
    sortedList() {
      let filtered = this.list;

      if (this.selectedFilter === 'distance') {
        filtered = [...this.list].sort((a, b) => {
          return a.venue.location.distance - b.venue.location.distance;
        });
      }

      return filtered;
    },
  },
};
</script>
