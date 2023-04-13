<!-- Email.vue -->
<template>
  <SocialButton
      link="https://www.instagram.com/audreyoneilart/"
      buttonClass="portfolio"
      :icon="['fas', 'fa-images']"
      label="portfolio"
  />
</template>

<script setup>
import SocialButton from './SocialButton.vue';
</script>

<style scoped lang="scss">
.portfolio {
  color: rgb(166, 192, 223);
  background-color: rgb(24, 26, 27);;

  &:hover {
    background: linear-gradient(to right, rgb(55, 146, 58), rgb(103, 106, 18));
   }
}
</style>