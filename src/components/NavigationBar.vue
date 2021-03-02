<template>
  <v-app-bar app color="transparent" dark>
    <div class="d-flex align-center">
      <!-- restaurant logo -->
      <v-icon class="main-icon" large color="white">
        mdi-silverware-fork-knife
      </v-icon>
      <!-- restaurant name -->
      <v-toolbar-title>Beef Smelter </v-toolbar-title>
    </div>

    <v-spacer></v-spacer>

    <v-btn href="/Home" to="/home" text>
      <span class="mr-2">Home</span>
      <!-- <v-icon>mdi-home-circle-outline</v-icon> -->
    </v-btn>
    <v-btn href="/About" to="/about" text>
      <span class="mr-2">About</span>
      <!-- <v-icon>mdi-information-outline</v-icon> -->
    </v-btn>
    <v-btn href="/Menu" to="/menu" text>
      <span class="mr-2">Menu</span>
      <!-- <v-icon>mdi-food</v-icon> -->
    </v-btn>
    <v-btn href="/Gallery" to="/gallery" text>
      <span class="mr-2">Gallery</span>
      <!-- <v-icon>mdi-image-multiple</v-icon> -->
    </v-btn>
  </v-app-bar>
</template>

<style>
.main-icon {
  margin-right: 25px;
}
</style>
