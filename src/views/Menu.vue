<template>
  <div class="home">
    <ul class="burgers">
      <li v-for="burger in burgers" :key="burger" class="burger-item">
        <p class="name">{{ burger.name }}</p>
        <p class="description">{{ burger.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    burgers() {
      return this.$store.state.burgers
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Stint+Ultra+Condensed&display=swap');
.burgers {
  list-style: none;
  text-align: left;
}
.name {
  font-family: 'Stint Ultra Condensed', cursive;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.3rem;
}
.description {
  font-size: 1.2rem;
  font-weight: 600;
}
.burger-item {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
