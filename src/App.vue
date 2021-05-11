<template>
  <div id="app" class="min-h-screen">
    <transition name="slide" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity .25s, transform .25s; 
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-20%);
}
</style>
