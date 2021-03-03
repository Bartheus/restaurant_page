<template>
  <div class="home">
    <ul class="posts">
      <li v-for="burger in burgers" :key="burger.name" class="burger-item">
        <h1>{{ burger.name }}</h1>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    burgers() {
      return this.$store.state.burgers
    }
  }
}
</script>

<style></style>
