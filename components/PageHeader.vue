<template>
  <header :class="{ open, filled }">
    <nuxt-link to="/"
      ><div class="logo-container">
        <Logo />
        <h4>Taddei Productions</h4>
      </div></nuxt-link
    >

    <Icon
      v-if="mobile"
      class="open-button"
      name="menu"
      @click.native="open = true"
    />
    <nav ref="nav">
      <Icon
        v-if="mobile"
        class="close-button"
        name="x"
        @click.native="open = false"
      />
      <div
        :style="{
          transform
        }"
        class="indicator"
      ></div>
      <nuxt-link v-wave exact to="/">Home</nuxt-link>
      <nuxt-link v-wave to="/about">About</nuxt-link>
      <nuxt-link v-wave to="/portfolio">Portfolio</nuxt-link>
      <nuxt-link v-wave to="/contact">Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
import Icon from './Icon.vue'
export default {
  name: 'PageHeader',
  components: { Icon },
  data() {
    return {
      indicatorX: 0,
      indicatorSize: 0,
      mobile: false,
      filled: false,
      open: false
    }
  },
  computed: {
    transform() {
      if (this.mobile)
        return `translate(0, ${this.indicatorX}px) scale(1, ${this.indicatorSize})`
      else
        return `translate(${this.indicatorX}px, 0) scale(${this.indicatorSize}, 1)`
    }
  },
  watch: {
    async $route(route) {
      await this.$nextTick()
      this.updateIndicatorPosition()

      this.open = false
    }
  },
  mounted() {
    this.mobile = window.innerWidth <= 960

    this.updateIndicatorPosition()

    let usesSmallerMargin = window.innerWidth <= 1200

    window.addEventListener('resize', () => {
      this.mobile = window.innerWidth <= 960
      usesSmallerMargin = window.innerWidth <= 1200

      this.updateIndicatorPosition()
    })

    let debounce = false

    window.addEventListener('scroll', () => {
      if (!debounce)
        requestAnimationFrame(() => {
          debounce = false
          this.filled = window.scrollY > (usesSmallerMargin ? 32 : 64)
        })

      debounce = true
    })
  },
  methods: {
    updateIndicatorPosition() {
      const link = this.$refs.nav.querySelector('.nuxt-link-active')

      if (!link) return

      const containerRect = this.$refs.nav.getBoundingClientRect()
      const linkRect = link.getBoundingClientRect()

      if (this.mobile) {
        this.indicatorX = linkRect.top - containerRect.top
        this.indicatorSize = linkRect.height
      } else {
        this.indicatorX = linkRect.left - containerRect.left
        this.indicatorSize = linkRect.width
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  margin-top: $header-margin-top;

  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 128px;
  @media screen and (max-width: 1200px) {
    padding: 0 64px;
    margin-top: 32px;
  }
  z-index: 1000;

  &.filled {
    background: fade-out(#fff, 0.3);
    backdrop-filter: blur(50px) brightness(130%) saturate(180%);
  }

  .logo-container {
    display: flex;
    align-items: center;
    .logo {
      margin-right: 16px;
    }

    h4 {
      color: #000;
    }

    @media screen and (max-width: 550px) {
      .logo {
        height: 48px;
        width: 48px;
      }
      h4 {
        font-size: var(--font-size--normal);
      }
    }
  }

  nav {
    position: relative;
    .indicator {
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 2px;
      transform-origin: 0 0;
      background: currentColor;

      transition: transform 0.2s ease-out;
    }
    a {
      color: inherit;
      text-decoration: none;
      padding: 18px 32px;
      float: left;
      &:hover {
        background: rgba(128, 128, 128, 0.03);
      }
    }
  }

  @media screen and (max-width: 960px) {
    position: sticky;
    padding: 0 32px;
    overflow-x: hidden;
    backdrop-filter: none;
    &.filled {
      background: #fff;
      backdrop-filter: none;
    }
    .open-button {
      cursor: pointer;
    }
    &::before {
      content: '';

      position: fixed;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.32);

      backdrop-filter: grayscale(100%);

      z-index: 1;
      opacity: 0;
      transition: opacity 0.1s linear;
      pointer-events: none;
    }

    nav {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 350px;
      max-width: 90%;
      z-index: 2;

      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 128px 0 0 0;

      background: #fff;
      pointer-events: none;

      transform: translate(100%, 0);
      transition: transform 0.15s ease-out;

      .indicator {
        width: 3px;
        height: 1px;
      }

      a {
        width: 100%;
      }

      .close-button {
        position: absolute;
        top: 32px;
        right: 32px;
        cursor: pointer;
      }
    }

    &.open {
      nav {
        transform: none;
        pointer-events: all;
      }
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
