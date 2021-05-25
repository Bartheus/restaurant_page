<template>
  <section class="gallery-section">
    <v-carousel v-model="model" class="carousel" height="100%">
      <v-carousel-item v-for="photo in photos" :key="photo.id">
        <v-sheet color="transparent">
          <v-row justify="center" class="background">
            <img :src="photo.urls.regular" alt="photo" class="burger-photos" />
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    model: 0,
    photos: [],
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
      'purple'
    ]
  }),
  mounted() {
    this.fetchPhotos()
  },
  methods: {
    fetchPhotos() {
      axios
        .get(
          'https://api.unsplash.com/search/photos?query=burgers&client_id=NQ5onRBY_hrTzoWyHcP2dgGSfkwZLttDpWlUiK5q8Eo'
        )
        .then(response => {
          this.photos = response.data.results
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  }
}
</script>
<style scoped>
.background {
  background: rgba(140, 140, 140, 0.2);
}
.carousel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130vh;
  padding-top: 3rem;
}
.burger-photos {
  height: 100vh;
  width: auto;
}
</style>
