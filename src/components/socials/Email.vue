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
  color: #F5A962;
  background-color: #fff;

  &:hover {
    background: linear-gradient(to right, #FC5185, #F5A962);
  }
}
</style>