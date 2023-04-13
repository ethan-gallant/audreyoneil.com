<template>
  <a
      :href="link"
      class="btn"
      :class="buttonClass"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      ref="buttonElement"
  >
    <div class="icon-container" ref="iconContainer">
      <font-awesome-icon :icon="icon" />
    </div>
    <span ref="labelElement">{{ label }}</span>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const props = defineProps({
  link: String,
  buttonClass: String,
  icon: Array,
  label: String,
});

const iconContainer = ref(null);
const labelElement = ref(null);
const translateX = ref(null);
const buttonElement = ref(null);

onMounted(() => {
  doResize();
  window.addEventListener('resize', doResize);
});

const doResize = ()=> {
  const icon = iconContainer.value;
  const iconWidth = icon.offsetWidth;
  const button = buttonElement.value;
  const buttonWidth = button.offsetWidth;
  const iconCurrentX = icon.getBoundingClientRect().x;
  const buttonCurrentX = button.getBoundingClientRect().x;
  const translate = buttonCurrentX - iconCurrentX + (buttonWidth - iconWidth) / 2 + 5;
  translateX.value = translate;
}

const onMouseOver = () => {
  const icon = iconContainer.value;
  icon.style.transform = `translateX(${translateX.value}px)`;

  const label = labelElement.value;
  label.style.opacity = 0;
};

const onMouseOut = () => {
  const icon = iconContainer.value;
  if (icon) {
    icon.style.transform = '';
  }

  const label = labelElement.value;
  if (label) {
    label.style.opacity = 1;
  }
};
</script>

<style scoped lang="scss">
/* Common styles go here */
.btn {
  min-width: 110px;
  padding: 1rem 4rem;
  background-color: rgb(24, 26, 27);
  text-decoration: none;
  display: flex;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;

  .icon-container {
    display: flex;
    transition: all 0.3s ease-in-out;
    align-self: center;

    .svg-inline--fa {
      /*Increase font to be bigger than current font-size*/
      font-size: 1.3rem;
      padding-right: 10px
    }
  }

  span {
    font-family: "Roboto", sans-serif;
    align-self: center;
    transition: all 0.1s ease-in-out;
  }

  &:hover {
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>