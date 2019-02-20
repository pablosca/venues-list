<template>
  <nav class="sort-nav">
    Sort by:
    <button
      v-for="filter in filters"
      :key="filter"
      :class="{ 'selected': filter === selected }"
      v-text="filter"
      @click="select(filter)"
    />
  </nav>
</template>

<script>
export default {
  props: {
    value: String,
  },

  data() {
    return {
      filters: ['relevance', 'distance'],
      selected: this.value,
    };
  },

  methods: {
    select(filter) {
      this.selected = filter;
      this.$emit('input', filter);
    },
  },
};
</script>

