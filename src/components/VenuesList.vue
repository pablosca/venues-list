<template>
  <section class="venues-list">
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
};
</script>

