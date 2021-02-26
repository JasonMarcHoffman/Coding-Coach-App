<template>
  <section>
    Filter Section
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register As Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        <p>{{ coach.firstName }} {{ coach.lastName }}</p>
        <!-- <p>{{ coach.description }}</p>
        <p>{{ coach.hourlyRate }}</p>
        <p v-for="area in coach.areas" :key="area">{{ area }}</p> -->
      </li>
    </ul>
    <h3 v-else>There are currently no coaches available...</h3>
  </section>
</template>
<script>
export default {
  props: ['id', 'firstName', 'lastName', 'areas', 'description', 'hourlyRate'],
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches']
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches']
    }
  }
}
</script>
<style>
  
</style>