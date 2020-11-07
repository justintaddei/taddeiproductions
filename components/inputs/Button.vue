<template>
  <button v-wave :disabled="disabled" :class="['button', look]">
    <Icon
      v-if="!iconOnRight"
      :style="{ color: $props.iconColor || 'currentColor' }"
      class="icon-left"
      :name="icon"
    />
    <span><slot /></span>
    <Icon
      v-if="iconOnRight"
      :style="{ color: $props.iconColor || 'currentColor' }"
      class="icon-right"
      :name="icon"
    />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: String,
    iconOnRight: Boolean,
    iconColor: String,
    disabled: Boolean,
    look: String
  }
}
</script>

<style lang="scss" scoped>
.button {
  background: $color--background;
  color: $color--text;
  outline: none;

  user-select: none;
  color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 12px 32px;

  background: #fff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  cursor: pointer;

  vertical-align: middle;

  transition: background-color 0.2s ease, box-shadow 0.2s ease,
    transform 0.15s ease-out;

  &:hover,
  &:active {
    box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }

  .icon-left {
    margin: 0 16px 0 0;
  }

  .icon-right {
    margin: 0 0 0 16px;
  }

  span {
    line-height: 32px;
    font-size: inherit;
  }

  &[disabled] {
    background: $color--background_disabled !important;
    box-shadow: none !important;
    color: $color--text_disabled !important;
    pointer-events: none;
  }
}

.button.flat {
  box-shadow: none;
  background: transparent;
  &:hover,
  &:active {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.05);
  }
}
</style>
