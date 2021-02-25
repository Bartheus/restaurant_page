<template>
  <v-card class="mx-auto about" color="rgba(0, 0, 0, 0.5)" dark>
    <v-card-text>
      <div>Thank you for visiting us !</div>
      <p class="display-1">
        Who we are...
      </p>
      <div color="#fff">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        asperiores, quibusdam minima odio, error labore consequuntur molestias
        accusamus et alias obcaecati vitae distinctio nostrum neque. Similique
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="#998100" @click="reveal = true">
        Expand
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        color="rgba(0, 0, 0, 0.5)"
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
      >
        <v-card-text class="pb-0">
          <p class="display-1">
            Our history
          </p>
          <p white--text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, ex
            pariatur quaerat porro atque dolorum. Assumenda, voluptates incidunt
            ipsa unde exercitationem explicabo nostrum modi, iste dignissimos
            tenetur magnam quasi hic? Est corporis perspiciatis iure
            accusantium, neque laboriosam repellendus, veritatis tempora id
            nobis numquam nihil voluptatem. Aperiam libero dolor numquam ullam,
            sequi vel quo cum provident fugit eum ducimus? Totam, ipsum?
            Assumenda, voluptates incidunt ipsa unde exercitationem explicabo
            nostrum modi, iste dignissimos tenetur magnam quasi hic? Est
            corporis perspiciatis iure accusantium, neque laboriosam
            repellendus, veritatis tempora id nobis numquam nihil voluptatem.
            Aperiam libero dolor numquam ullam, sequi vel quo cum provident
            fugit eum ducimus? Totam, ipsum? Assumenda, voluptates incidunt ipsa
            unde exercitationem explicabo nostrum modi.
          </p>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn text color="#998100" @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    reveal: false
  })
}
</script>

<style scoped>
.about {
  margin-top: 150px;
  width: 1000px;
  height: auto;
  color: aliceblue;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: relative;
  width: auto;
}
</style>
