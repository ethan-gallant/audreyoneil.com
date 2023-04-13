<template>
  <div class="social-buttons">
    <InstagramButton class="button" />
    <PortfolioButton class="button" />
    <EmailButton class="button" />
  </div>
</template>

<style scoped>
.social-buttons {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: nowrap;
}

/* Mobile column */
@media (max-width: 1024px) {
  .social-buttons {
    flex-direction: column;
  }

  .button {
    margin: 0.2rem 0;
    width: 100%;
  }
}
</style>

<script setup>
import InstagramButton from "@/components/socials/Instagram.vue";
import EmailButton from "@/components/socials/Email.vue";
import PortfolioButton from "@/components/socials/Portfolio.vue";
</script>