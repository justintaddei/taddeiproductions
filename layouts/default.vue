<template>
  <div>
    <icon-sprite />
    <div class="container">
      <PageHeader />
      <Nuxt />
    </div>
    <PageFooter />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/index.scss';

.container {
  min-height: 100vh;
}
</style>
