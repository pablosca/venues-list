<template>
  <div class="venue-card">
    <h3 class="venue-title" v-text="venue.name" />

    <ul>
      <li>{{ address }}</li>
      <li>
        {{ categories }}
      </li>
    </ul>
    
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

      return `${kms} kms`;
    },

    categories() {
      return this.venue.categories.map(c => c.pluralName).join(', ');
    },
  },
};
</script>
