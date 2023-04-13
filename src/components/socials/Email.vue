<template>
  <SocialButton
      link="mailto:me@audreyoneil.com"
      buttonClass="email"
      :icon="[ 'fas', 'envelope' ]"
      label="email"
  />
</template>

<script setup>
import SocialButton from './SocialButton.vue';
</script>

<style scoped lang="scss">
.email {
  color: rgb(245, 169, 97);;
  background-color: rgb(24, 26, 27);;
  &:hover {
    background-image: linear-gradient(to right, rgb(155, 3, 49), rgb(142, 73, 9));
  }
}
</style>