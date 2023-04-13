<script setup>
import SocialList from "./socials/SocialList.vue";
</script>

<template>
  <div class="container">
    <img src="@/assets/logo.svg" id="logo" alt="Audrey O'Neil Art Logo" />
    <SocialList id="socials"/>
  </div>
</template>


<style scoped>

.container {
  background-color: #0d47a1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


#logo {
  height: 20%;
  width: 90%;
  padding: 1rem;
  border-radius: .5rem;
  background-color: #222;
}

#socials {
  height: 20%;
}
</style>
