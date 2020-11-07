<template>
  <div class="home">
    <section class="above-fold">
      <div class="tagline">
        <h1>
          Hollywood's quality,
          <br />Tulsa's personality.
        </h1>
        <p>Cinematography & Photography</p>
        <nuxt-link to="/contact">
          <Button icon-on-right icon="arrow-right">Contact Us</Button>
        </nuxt-link>
      </div>
      <img
        class="hero"
        src="@/assets/images/home-hero.png"
        alt="3D Render of the Taddei Productions logo"
      />

      <div v-scroll-to:portfolio class="scroll-prompt">
        <p>Our Story</p>
        <Icon name="chevrons-down" />
      </div>
    </section>
    <section id="portfolio">
      <img
        class="shutter"
        src="@/assets/images/shutter.svg"
        alt="camera shutter background decor"
      />
      <div class="videos">
        <h2>The Reel</h2>
        <div class="video-container">
          <div v-wave class="thumbnail">
            <img
              class="image"
              src="@/assets/images/video-thumbnail.png"
              alt="Taddei Production's Reel Thumbnail"
            />
            <div class="overlay"></div>
            <Icon name="play" />
          </div>
          <Button icon="video">More Videos</Button>
        </div>
      </div>
      <div class="photos">
        <h2>Still Photography</h2>
        <div class="photo-container">
          <Button icon="grid">Full Portfolio</Button>
          <div class="thumbnail">
            <img
              class="image"
              src="@/assets/images/photo-thumbnail.jpg"
              alt="Taddei Production's Reel Thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="film-strip"></div>
    <section class="lets-work-together">
      <div class="info">
        <h2>Let's work together</h2>
        <p>
          Rumor has it we're pretty fun and easy to work with, so don't stress
          about anything.
        </p>
        <p>
          We've created a small list of what to expect and tips to help you be
          prepared. Once you've finished reading, or if you have any questions,
          give us a call.
        </p>
        <div class="actions">
          <nuxt-link to="/getting-ready">
            <Button icon="droplet">Getting Ready</Button>
          </nuxt-link>
          <nuxt-link to="/contact">
            <Button icon="smartphone" look="flat">Contact Us</Button>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  directives: {
    'scroll-to': (el, { arg }) => {
      el.addEventListener('click', ({ target }) => {
        const { top } = document.getElementById(arg).getBoundingClientRect()

        window.scrollBy({
          top: top - 128,
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: -$total-header-height;
  position: relative;
  overflow: hidden;
}
.above-fold {
  position: relative;
  height: Max(840px, 100vh);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .tagline {
    position: absolute;
    left: 33.33%;

    transform: translate(-50%, 0);

    @media screen and (max-width: 1030px) {
      transform: none;
      left: 64px;
    }

    h1 {
      margin-bottom: 8px;
    }

    .button {
      margin-top: 24px;
    }
  }

  .hero {
    position: absolute;
    height: Min(35vw, 540px);
    left: 66.66%;
    transform: translate(-25%, 0);
    @media screen and (max-width: 1500px) {
      transform: none;
      left: auto;
      right: 32px;
    }
  }

  .scroll-prompt {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 96px;
    cursor: pointer;
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;

    .tagline,
    .hero {
      position: relative;
      left: auto;
      right: auto;
      transform: none;
    }

    .hero {
      order: -1;
      height: Max(35vw, 225px);
      margin-bottom: 32px;
    }

    .scroll-prompt {
      bottom: 32px;
    }
  }

  @media screen and (max-width: 550px) {
    height: Max(740px, 100vh);
  }
}

#portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .shutter {
    position: absolute;
    z-index: -1;
    right: -64px;
    top: 128px;
    width: 64vw;

    @media screen and (max-width: 850px) {
      right: 0;
      transform: translate(33.3%, 0);
      width: 100vw;
    }

    @media screen and (max-width: 550px) {
      width: 125vw;
    }
  }
  .videos {
    margin: 64px 0;
    position: relative;

    @media screen and (max-width: 550px) {
      width: calc(100% - 64px);
    }

    h2 {
      margin-bottom: 64px;
      @media screen and (max-width: 850px) {
        margin-bottom: 32px;
      }
    }
    .video-container {
      display: flex;
      align-items: center;

      .button {
        margin: 0 0 0 160px;
        @media screen and (max-width: 1200px) {
          margin: 0 0 0 10vw;
        }
      }

      @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: flex-end;
        .button {
          margin: 64px 0 0 0;
        }
      }
    }
    .thumbnail {
      position: relative;
      border-radius: 16px;
      overflow: hidden;

      width: 650px;
      height: 350px;

      @media screen and (max-width: 1200px) {
        width: 433px;
        height: 233px;
      }

      @media screen and (max-width: 550px) {
        width: 100%;
        height: auto;
        padding-top: calc(calc(100% - 64px) * 0.7);
      }

      box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.15);

      transition: box-shadow 1s ease;
      transition: transform 0.15s ease-out;
      cursor: pointer;

      .image,
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .image {
        object-fit: cover;
        object-position: center center;
        transition: transform 0.75s ease-out;
      }
      .overlay {
        background: rgba(0, 0, 0, 0.25);
      }

      .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        width: 128px;
        height: 128px;

        @media screen and (max-width: 1200px) {
          width: 96px;
          height: 96px;
        }
      }

      &:hover {
        box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.15);
        .image {
          transform: scale(1.1);
        }
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .photos {
    margin: 128px 0;
    position: relative;

    @media screen and (max-width: 550px) {
      width: calc(100% - 64px);
    }

    h2 {
      margin-bottom: 64px;
      text-align: right;
      @media screen and (max-width: 850px) {
        margin-bottom: 32px;
      }
    }
    .photo-container {
      display: flex;
      align-items: center;

      .button {
        margin: 0 160px 0 0;
        @media screen and (max-width: 1200px) {
          margin: 0 10vw 0 0;
        }
      }

      @media screen and (max-width: 850px) {
        flex-direction: column;
        align-items: flex-start;
        .button {
          margin: 64px 0 0 0;
          order: 2;
        }
      }
    }
    .thumbnail {
      position: relative;
      border-radius: 16px;
      overflow: hidden;

      width: 650px;
      height: 350px;
      @media screen and (max-width: 1200px) {
        width: 433px;
        height: 233px;
      }

      @media screen and (max-width: 550px) {
        width: 100%;
        height: auto;
        padding-top: calc(calc(100% - 64px) * 0.7);
      }

      box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.15);

      .image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        object-position: center center;
      }
    }
  }
}

.film-strip {
  width: 256px;
  height: calc(100vh + 100vw);
  background: url('~assets/images/film-strip.svg');
  background-size: 100% auto;
  background-repeat: repeat-y;
  transform: rotate(-40deg);
  transform-origin: 100% 100%;
  position: absolute;
  bottom: 0;
  right: 50%;
  z-index: -1;

  @media screen and (max-width: 850px) {
    right: 0;
  }

  @media screen and (max-width: 550px) {
    right: -50%;
  }
}
.lets-work-together {
  position: relative;
  padding: 64px 0 256px 0;

  @media screen and (max-width: 790px) {
    padding: 64px 0 96px 0;
  }

  .info {
    width: Max(470px, 33.33%);
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media screen and (max-width: 550px) {
      width: calc(100% - 64px);
    }
    position: relative;
    margin: auto;

    h2 {
      margin-bottom: 32px;
    }

    p {
      margin: 0 0 16px 0;
    }

    .actions {
      margin: 48px 0 0 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .button {
        margin: 0 16px 0 0;
      }
      @media screen and (max-width: 550px) {
        flex-direction: column;
        align-items: center;
        width: auto;

        .button {
          margin: 16px 0;
        }
      }
    }
  }
}
</style>
