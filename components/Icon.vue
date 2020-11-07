<template>
  <svg class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
svg.icon {
  fill: none;
  height: 24px;
  margin-bottom: 0.125em;
  vertical-align: middle;
  width: 24px;
}
</style>
