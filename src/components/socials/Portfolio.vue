<!-- Email.vue -->
<template>
  <SocialButton
      link="https://www.instagram.com/audreyoneilart/"
      buttonClass="portfolio"
      icon="fas fa-images"
      label="portfolio"
  />
</template>

<script setup>
import SocialButton from './SocialButton.vue';
</script>

<style scoped lang="scss">
.portfolio {
  color: #1F2C56;
  background-color: #fff;

  &:hover {
    background: linear-gradient(to right, #45B649, #DCE35B);
   }
}
</style>