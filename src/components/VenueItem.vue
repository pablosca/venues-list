<template>
  <div class="venue-card">
    <h3 class="venue-title" v-text="venue.name" />

    <p class="venue-address">
      <icon icon="map-marker-alt" />
      {{ address }}
    </p>

    <p class="venue-address">
      <icon icon="map" />
      {{ distance }} away
    </p>

    <p class="venue-categories">
      Categories: {{ categories }}
    </p>
    
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },

  computed: {
    venue() {
      return this.info.venue;
    },

    address() {
      const { address, city } = this.venue.location;

      return address || city;
    },

    distance() {
      const kms = this.venue.location.distance / 1000; // distance from FourSquare is in meteres

      return `${kms.toFixed(2)} kms`;
    },

    categories() {
      return this.venue.categories.map(c => c.pluralName).join(', ');
    },
  },
};
</script>
