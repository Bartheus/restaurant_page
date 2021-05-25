<template>
  <section class="home-section">
    <v-row justify="center">
      <v-col align="center" class="main-content ml-4">
        <div class="adress">{{ adress }}</div>
        <div class="quote">{{ title }}</div>
        <div class="sub-quote">{{ subtitle }}</div>
        <v-btn outlined color="#998100" to="/about">Learn More</v-btn>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data() {
    return {
      adress: '58 8th Lane Los Angeles, CA 90044',
      title: 'A little slice of heaven',
      subtitle: 'We all need to have time for a burger once in a while.'
    }
  }
}
</script>
<style scoped>
.home-section {
  font-size: 1.6rem;
  min-height: 100%;
}
.main-content {
  position: absolute;
  top: 40%;
  left: 42%;
  transform: translate(-50%, -50%);
}
.adress {
  font-size: 18px;
  color: #998100;
}
.quote {
  font-size: 30px;
}
.sub-quote {
  font-size: 18px;
}
</style>
