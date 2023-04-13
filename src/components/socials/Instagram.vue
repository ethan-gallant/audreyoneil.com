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
  color: #c71e7e;
  background-color: #fff;

  &:hover {
    background: linear-gradient(to right, #ff3019 0%, #c90477 100%);
  }
}
</style>