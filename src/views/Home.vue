<template>
  <div class="container">
    <div class="adress">
      58 8th Lane Los Angeles, CA 90044
    </div>
    <div class="quote">
      <h1>A little slice of heaven</h1>
      <h4 class="under-quote">
        We all need to make time for a burger once in a while.
      </h4>
    </div>
    <v-btn class="ma-7" outlined small color="#998100">
      Learn More
    </v-btn>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ballet&family=Dancing+Script&display=swap');
.container {
  position: relative;
  background: #000;
  background: rgba(0, 0, 0, 0.6);
  padding: 45px 35px 25px 35px;
  margin: 0 auto;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.quote {
  font-family: 'Dancing Script', cursive;
  letter-spacing: 0.5rem;
}
.under-quote {
  letter-spacing: 2px;
  margin-top: 7.5px;
}
.adress {
  margin-bottom: 7.5px;
  color: #998100;
}
</style>
