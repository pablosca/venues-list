<template>
  <section class="venues-list" v-if="hasVenues">
    <venue-item
      v-for="(item, index) in list"
      :key="index"
      :info="item"
    />
  </section>
</template>

<script>
import VenueItem from '@/components/VenueItem';

export default {
  props: {
    list: Array,
  },

  components: { VenueItem },

  computed: {
    hasVenues() {
      return this.list.length;
    },
  },
};
</script>

