<template>
  <div class="home-menu" v-if="isHome">
    <div class="home-menu-body">
      <close-button :styles="{ position: 'absolute', top: '1rem', right: '1rem' }" @click.native="closeHomeMenu" />
      <menu-nav />
      <component :is="currentPage" style="flex: 1 1 100%" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuNav from './components/MenuNav'
import FurniturePage from './FurniturePage'
import GaragePage from './GaragePage'
import ResidentsPage from './ResidentsPage'
import CloseButton from '../OptionsMenu/common/CloseButton.vue'

export default {
  name: 'HomeMenu',

  data() {
    return {
      isHome: true
    }
  },

  components: {
    MenuNav,
    FurniturePage,
    GaragePage,
    ResidentsPage,
    CloseButton
  },

  computed: {
    ...mapState('homeMenu', ['currentPage'])
  },

  methods: {
    closeHomeMenu: function () {
      this.isHome = false
      window.mp.trigger('homeMenu:closeHomeMenu')
    }
  }
}
</script>

<style lang="scss">
.home-menu {
  position: absolute;
  display: flex;
  top: -0.1rem;
  left: 0;
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  background: url("/img/homeMenu/bg.png"), rgba(0, 0, 0, 0.96);
  background-blend-mode: overlay;
  overflow: hidden;
  color: #fff;
  padding-top: 1.5rem;

  &-body {
    display: flex;
    position: relative;
    margin: auto;
    width: 96rem;
    height: 100vh;
    padding: 3rem 5.5rem 0 5.5em;
  }

  .header {
    display: flex;
    align-items: center;
    margin: 1.15rem 0 1rem 0.7rem;

    &__info {
      display: flex;

      .heading:not(.heading:first-child) {
        margin-left: 2.7rem;
      }

      .title {
        font-size: 1.3rem;
        line-height: 1.3;
      }
    }

    &__nav {
      display: flex;
      margin: 0 1rem 0 auto;

      .item__btn:not(.item__btn:first-child) {
        margin-left: 0.5rem;
      }
    }
  }

  .main {
    padding-right: 1.5rem;
    max-height: 34rem;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #5cff80 #444444;

    &::-webkit-scrollbar {
      display: block;
      width: 0.1rem;
      height: 0;
    }

    &::-webkit-scrollbar-track {
      background: #444444;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #5cff80;
    }

    .billet-item {
      padding: 0.7rem 0rem 0.7rem 2rem !important;

      .item-text {
        display: flex;
        align-items: center;

        .title {
          font-size: 1.05rem;
          line-height: 1;
        }

        .subtitle {
          margin-top: 0;
          color: #5CFF80;
        }
      }
    }
  }


  /* general */
  .title {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    letter-spacing: 0.05em;
    color: #fff;
  }

  .subtitle {
    display: flex;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
    line-height: 0.9rem;
    letter-spacing: 0.05em;
    margin-top: 0.5rem;
  }

  .category {
    position: relative;
    font-size: 0.65rem;
    line-height: 0.8rem;
    letter-spacing: 0.06em;
    color: rgba(255, 255, 255, 0.5);

    &:before {
      content: '';
      position: absolute;
      height: 1.44rem;
      top: 0;
      left: -0.7rem;
      color: #fff;
      background: #fff;
      border: 1px solid #fff;
      box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.55);
    }
  }

  .billet-item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem 1rem 2rem;
    letter-spacing: 0.03em;
    border: 1px solid;
    border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0) 100%) 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.03) 35%, rgba(12, 16, 10, 0) 100%);

    .title {
      font-weight: 600;
    }

    &:before {
      content: '';
      position: absolute;
      height: 1.44rem;
      top: 50%;
      left: 0.7rem;
      transform: translateY(-50%);
      color: #fff;
      background: #fff;
      border: 1px solid #fff;
      box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.55);
      transition: 0.4s ease;
    }

    &:not(&:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  .item__btn {
    text-align: center;
    cursor: pointer;
    letter-spacing: 0.03em;
    font-size: 0.9rem;
    white-space: nowrap;
    color: #fff;
    padding: 0.33rem 1.66rem;
    background: linear-gradient(180deg, rgba(219, 18, 27, 0.25) 0%, rgba(123, 9, 14, 0.25) 100%);
    border: 1px solid #DB121B;
    box-shadow: inset 0px 0px 15px rgba(220, 32, 40, 0.86);
    transition: 0.5s ease;

    &:not(&:disabled):hover {
      box-shadow: inset 0px 0px 7.5rem #DB121B;
      filter: drop-shadow(0px 0px 15px rgba(219, 18, 27, 0.5));
    }

    &:disabled {
      background: linear-gradient(180deg, rgba(217, 217, 217, 0.25) 0%, rgba(100, 100, 100, 0.25) 100%);
      border: 1px solid #a9a9a9;
      box-shadow: inset 0px 0px 15px rgba(127, 127, 127, 0.8);
      color: #d9d9d9;
    }
  }
}
</style>
