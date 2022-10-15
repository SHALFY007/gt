<template>
  <div class="garage-page">
    <div class="header">
      <div class="header__info">
        <div class="heading">
          <div class="category">автомобилей</div>
          <div class="title">{{ totalVehicles }}</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main__item" v-for="item in typeOfGarages" :key="item.id">
        <div class="title">{{ loc(item.desc) }}</div>
        <div :class="[{'bought': item.type === currentGarage.type}, 'img']">
          <img src="/img/homeMenu/garage_bg.png">
        </div>
        <button v-if="item.type === currentGarage.type" class="item__btn" disabled>куплено</button>
        <button v-else class="item__btn" @click="buyGarage(item.type)">купить ${{ item.cost }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'GaragePage',

  components: {},

  computed: {
    ...mapState('homeMenu', ['totalVehicles', 'typeOfGarages', 'currentGarage', 'houseId']),
    ...mapGetters('localization', ['loc']),
  },

  methods: {
    buyGarage: function (key) {
      window.mp.trigger('homeMenu:buyGarage', this.houseId, key);
    }
  }
}
</script>

<style lang="scss" scoped>
.garage-page {
  margin-left: -1.5rem;

  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    padding-right: 0.5rem;

    &__item {
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: url("/img/homeMenu/nav_bg.png") bottom right / cover no-repeat;
      height: 15rem;
      padding: 1rem 1rem 0.6rem 1.4rem;

      &:hover {
        background: rgba(255, 255, 255, 0.1) url("/img/homeMenu/nav_bg.png") bottom right / cover no-repeat;

        & .item__btn {
          opacity: 1;
        }
      }
    }

    .title {
      position: relative;
      align-self: start;
      font-size: 1.4rem;
      line-height: 1.1;

      &:before {
        content: '';
        position: absolute;
        height: 100%;
        top: 50%;
        left: -0.7rem;
        transform: translateY(-50%);
        color: #fff;
        background: #fff;
        border: 1px solid #fff;
        box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.55);
        transition: 0.4s ease;
      }
    }

    .img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: 10rem;
      padding: 1rem 0 0.25rem;

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &.bought {
        filter: drop-shadow(0 0 0 #ffd700);
      }
    }

    .item__btn {
      opacity: 0;
    }
  }
}
</style>
