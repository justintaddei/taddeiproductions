<template>
  <footer>
    <div class="logoWrapper">
      <Logo />
      <h2>Taddei Productions</h2>
    </div>

    <div class="webmaster">
      Website by
      <a rel="noopener" target="_blank" href="https://justintaddei.com">
        Justin Taddei
      </a>
    </div>

    <ul class="contact">
      <li><a href="tel:+19189607803">(918) 960-7803</a></li>
      <li>
        <a href="mailto:info@taddeiproductions.com">
          info@taddeiproductions.com
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
import Logo from './Logo.vue'
export default {
  name: 'PageFooter',
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  min-height: 256px;
  padding: 32px;
  display: grid;
  background: $color--background-element;

  grid-template: 1fr / 1fr 1fr 1fr;
  grid-template-areas: 'logo webmaster contact';

  @media screen and (max-width: 850px) {
    grid-template: 1fr 1fr 64px / 1fr;
    grid-template-areas:
      'logo'
      'contact'
      'webmaster';
  }

  .logoWrapper {
    place-self: center start;
    display: flex;
    align-items: center;
    grid-area: 'logo';
    .logo {
      flex-shrink: 0;
      margin-right: 24px;
    }
  }

  .webmaster {
    place-self: end center;
    margin-bottom: -8px;
    grid-area: webmaster;
    a {
      text-decoration: none;
      color: inherit;
      padding: 4px 0;
      border-bottom: 1px solid currentColor;
      &:hover {
        opacity: 0.7;
      }
    }
  }

  .contact {
    place-self: center end;
    list-style: none;
    text-align: right;
    grid-area: contact;
    li {
      margin: 24px 0;
      a {
        text-decoration: none;
        color: inherit;
        padding: 4px 0;
        border-bottom: 1px solid currentColor;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
