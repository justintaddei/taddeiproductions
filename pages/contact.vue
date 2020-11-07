<template>
  <div class="contact">
    <div class="film-strip"></div>
    <div class="contact-info">
      <div class="tagline">
        <h1>Let's talk <br />about you.</h1>
        <p>We always look forward to another exciting project.</p>
      </div>
      <div class="info">
        <div class="info-container">
          <h3>Give us a call.</h3>
          <a href="tel:+19187070308"
            ><Button icon="smartphone">(918) 707-0308</Button></a
          >
          <h3>Or, send us an email.</h3>
          <a href="mailto:info@taddeiproductions.com"
            ><Button class="email" icon="send"
              >info@taddeiproductions.com</Button
            ></a
          >
        </div>
      </div>
      <div class="social-media">
        <Button icon="youtube" icon-color="#f00">/taddeiproductions</Button>
        <Button icon="facebook" icon-color="#2D88FF"
          >/taddeiproductions.llc</Button
        >
        <Button icon="instagram" icon-color="#AF3498"
          >@taddeiproductions</Button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
.contact {
  position: absolute;
  width: 100%;
  overflow: hidden;
  top: 0;
  padding: 208px 256px 72px 256px;
  min-height: 100vh;

  @media screen and (max-width: 1480px) {
    padding: 208px 128px 72px 128px;
  }

  @media screen and (max-width: 1200px) {
    padding: 208px 64px 72px 64px;
  }

  @media screen and (max-width: 1080px) {
    padding: 208px 32px 72px 32px;
  }
  @media screen and (max-width: 790px) {
    padding: 208px 0 72px 0;
  }
}

.contact-info {
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  place-items: center;

  @media screen and (max-width: 1080px) {
    grid-template: auto 1fr / 1fr 1fr;
    place-items: normal;
    justify-items: center;
  }

  @media screen and (max-width: 790px) {
    grid-template: auto auto auto / 1fr;
  }

  $left-column-width: 500px;

  .tagline {
    width: $left-column-width;
    margin-bottom: 48px;

    @media screen and (max-width: 1080px) {
      grid-column: 1/3;
      grid-row: 1/2;
      width: auto;
    }
    @media screen and (min-width: 791px) and (max-width: 1080px) {
      margin-bottom: 64px;
    }

    @media screen and (max-width: 790px) {
      margin: 0 32px 48px 32px;
    }

    h1 {
      margin-bottom: 16px;
    }
  }

  .social-media {
    width: $left-column-width;

    @media screen and (max-width: 1080px) {
      grid-row: 2/3;
      grid-column: 1/2;
      width: auto;
    }

    .button {
      margin-bottom: 24px;

      @media screen and (max-width: 1080px) {
        margin: 0 auto 24px auto;
      }
    }
  }

  .info {
    grid-row: 1/3;
    grid-column: 2/3;

    @media screen and (max-width: 1080px) {
      grid-row: 2/3;
    }

    .info-container {
      padding: 48px;
      border-radius: 32px;
      background: #fff;
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);

      @media screen and (min-width: 791px) and (max-width: 1080px) {
        padding: 0;
        background: transparent;
        box-shadow: none;
      }

      @media screen and (max-width: 790px) {
        padding: 32px;
        margin-bottom: 64px;
      }

      h3 {
        margin-bottom: 48px;
      }

      a:first-of-type .button {
        margin-bottom: 72px;
      }

      @media screen and (max-width: 470px) {
        width: calc(100vw - 64px); // 32px margin
        .email {
          font-size: var(--font-size--small);
        }
      }
    }
  }

  @media screen and (max-width: 790px) {
    .tagline,
    .social-media,
    .info {
      grid-row: auto;
      grid-column: auto;
    }
  }
}

.film-strip {
  position: absolute;
  width: 512px;
  height: calc(100vh + 100vw);
  background: url('~assets/images/film-strip.svg');
  background-size: 100% auto;
  background-repeat: repeat-y;
  bottom: 0;
  left: 20%;
  transform: rotate(24deg);
  transform-origin: 0 100%;
  z-index: -1;

  @media screen and (max-width: 790px) {
    left: -50%;
  }
}
</style>
