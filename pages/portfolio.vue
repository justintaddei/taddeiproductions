<template>
  <div ref="root" class="portfolio">
    <div class="film-strip"></div>
    <div class="content">
      <h1>Our Portfolio</h1>

      <div v-for="category in categories" :key="category" class="category">
        <h2>{{ category }}</h2>
        <div :ref="category" class="photos">
          <div class="spacer"></div>
          <img
            v-for="photo in photos[category]"
            :key="photo"
            :src="require(`~/assets/portfolio/${photo}`)"
            :data-photo="photo"
            alt="description unavailable"
            @click="selectedPhoto = photo"
          />
          <div class="spacer"></div>
        </div>
        <div class="arrow" @click="scroll(category)">
          <Icon name="arrow-right" />
        </div>
      </div>
    </div>
    <div
      v-if="selectedPhoto !== ''"
      class="large-view"
      @click="selectedPhoto = ''"
    >
      <img
        ref="selectedPhoto"
        :src="require(`~/assets/portfolio/${selectedPhoto}`)"
        alt="description unavailable"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      ...require('~/assets/portfolio.json'),
      selectedPhoto: ''
    }
  },
  watch: {
    selectedPhoto(value, oldValue) {
      const opts = { zIndex: 1001 }

      if (value) {
        this.$nextTick(() => {
          const smallPhoto = this.$refs.root.querySelector(
            `[data-photo="${value}"]`
          )

          const largePhoto = this.$refs.selectedPhoto

          this.$illusory(smallPhoto, largePhoto, opts).finished.then(() => {
            smallPhoto.style.opacity = 0
          })
        })
      } else {
        const smallPhoto = this.$refs.root.querySelector(
          `[data-photo="${oldValue}"]`
        )
        smallPhoto.style.opacity = 1

        const largePhoto = this.$refs.selectedPhoto

        this.$illusory(largePhoto, smallPhoto, opts)
      }
    }
  },
  methods: {
    scroll(category) {
      const el = this.$refs[category][0]
      el.scrollBy({
        left: 400,
        behavior: 'smooth'
      })
    }
  },
  head: {
    title: 'Photography Portfolio | Official Site of Taddei Productions',
    'og:title': 'Photography Portfolio | Official Site of Taddei Productions',
    'og:description':
      'Professional Cinematography & Photography studio located in Tulsa Oklahoma',
    'og:image': 'https://taddeiproductions.com/og/portfolio.jpg'
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  --portfolio-margin: 256px;

  @media screen and (max-width: 960px) {
    --portfolio-margin: 128px;
  }
  @media screen and (max-width: 550px) {
    --portfolio-margin: 64px;
  }
  @media screen and (max-width: 390px) {
    --portfolio-margin: 32px;
  }
}

.content {
  margin: 0;
  padding: 128px 0 0;
  position: relative;
  width: 100%;
  h1,
  h2 {
    margin-left: var(--portfolio-margin);
  }

  .category {
    margin: 64px 0;
    position: relative;
    .arrow {
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 128px;
      @media screen and (max-width: 550) {
        width: 96px;
      }
      background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 70%);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-right: 25px;
      cursor: pointer;
    }

    .photos {
      display: flex;
      flex: 0 0;
      overflow-x: auto;
      overflow-y: hidden;
      padding: 16px 0 32px 0;
      position: relative;

      .spacer {
        min-width: var(--portfolio-margin);
        width: var(--portfolio-margin);
      }

      img {
        height: 320px;
        margin: 16px 24px;
        border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        transition: box-shadow ease 0.15s, transform ease 0.15s;
        cursor: pointer;

        &:first-of-type {
          margin: 16px 24px 16px 0;
        }

        &:hover {
          box-shadow: 0 8px 48px rgba(0, 0, 0, 0.3);
          transform: scale(1.05);
        }
        &:active {
          box-shadow: none;
          transform: scale(0.98);
        }
      }
    }
  }
}

.large-view {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
  backdrop-filter: blur(15px) saturate(180%);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    position: relative;
    border-radius: 24px;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
    max-height: 90%;
    max-width: 90%;
  }
}

.film-strip {
  position: absolute;
  width: 256px;
  height: 100%;
  background: url('~assets/images/film-strip.svg');
  background-size: 100% auto;
  background-repeat: repeat-y;
  top: 0;
  bottom: 0;
  position: fixed;
  left: calc(var(--portfolio-margin) * 0.7);
  z-index: -1;
}
</style>
