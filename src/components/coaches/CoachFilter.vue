<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="frontend" checked @change="setFilter">
      <label for="frontend">Frontend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="backend" checked @change="setFilter">
      <label for="backend">Backend</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="career" checked @change="setFilter">
      <label for="career">Career</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  methods: {
    // taking the event as an argument
    setFilter(event) {
      // getting the id of the checkbox that was clicked
      const inputId = event.target.id
      // setting isActive when the checkbox is selected
      const isActive = event.target.checked
      const updatedFilters = {
        // using the spread operator to access the filters data object
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters
      this.$emit('change-filter', updatedFilters)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>