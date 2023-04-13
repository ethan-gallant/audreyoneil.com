<template>
  <SocialButton
      link="https://www.instagram.com/audreyoneilart/"
      buttonClass="instagram"
      :icon="[ 'fab', 'instagram' ]"
      label="instagram"
  />
</template>

<script setup>
import SocialButton from './SocialButton.vue';
</script>

<style scoped lang="scss">
.instagram {
  color: rgb(227, 71, 160);

  &:hover {
    background-image: linear-gradient(to right, rgb(189, 19, 0) 0%, rgb(161, 3, 95) 100%);
  }
}
</style>