<script setup>
  import TheNavigation from './components/TheNavigation.vue'
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <!-- sidebar -->
    <router-view v-slot="{ Component }" class="view left-sidebar" name="LeftSidebar">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
    <!-- main -->
    <router-view v-slot="{ Component }" class="main-view">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  }

  .container {
    display: flex;
  }

  .left-sidebar {
    width: 20%;
  }

  .main-view {
    width: 100%;
  }
</style>

