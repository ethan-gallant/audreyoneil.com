<script setup>
import InfoCard from './components/LogoCard.vue'
import PhotoCard from './components/PhotoCard.vue'
</script>

<template>
  <main>
    <InfoCard class="card" id="info-card"/>
    <PhotoCard class="card"/>
  </main>
</template>

<style scoped lang="scss">
/* Two cards side-by-side consuming entire height & width of the screen */
main {
  display: flex;
  height: 100vh;
  width: 100vw;

  /* Center the cards */
  justify-content: center;
  align-items: center;
}

.card {
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow: hidden;
}

/* PhotoCard hidden on mobile */
@media (max-width: 1024px) {
  .card:nth-child(2) {
    display: none;
  }
}

#info-card {
  background: linear-gradient(to left, #da4453, #89216b);
}

/* On desktop info-card should be gradient */
@media (max-width: 1024px) {
  main {
    background-image: url("src/assets/audrey.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Tint the image */
  main::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  #info-card {
    background: none;
    font-size: 1.2rem;
  }
}


.audrey-image {
  background-image: url("src/assets/audrey.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Tint the image */
.audrey-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

</style>
