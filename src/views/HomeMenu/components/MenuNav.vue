<template>
  <div class="menu-nav">
    <div class="heading">
      <div class="category">дом</div>
      <div class="title">#{{houseId}}</div>
    </div>
    <div class="nav-list">
      <div :class="[{'item-lock' : !houseLocked}, {'item-unlock' : houseLocked}, 'nav-list__item']">
        <div v-if="houseLocked" class="category">закрыт</div>
        <div v-else class="category">открыт</div>
        <div class="title">дом</div>
        <div class="img">
          <img :src="`/img/homeMenu/${houseLocked ? 'lock' : 'key'}.png`">
        </div>
        <button v-if="houseLocked" class="item__btn" @click="toggleHouseLocked(!houseLocked)">открыть</button>
        <button v-else class="item__btn" @click="toggleHouseLocked(!houseLocked)">закрыть</button>
      </div>
      <div class="nav-list__item">
        <div class="category">улучшить</div>
        <div class="title">гараж</div>
        <div class="img">
          <img src="/img/homeMenu/garage.png">
        </div>
        <button class="item__btn" @click="setCurrentPage('GaragePage')">посмотреть</button>
      </div>
      <div class="nav-list__item">
        <div class="category">продать</div>
        <div class="title">дом</div>
        <div class="subtitle">${{houseCost}}</div>
        <div class="img">
          <img src="/img/HomeMenu/house.png">
        </div>
        <button class="item__btn" @click="sellHouse">продать</button>
      </div>
      <div class="nav-list__item">
        <div class="category">изменить</div>
        <div class="title">мебель</div>
        <div class="img">
          <img src="/img/HomeMenu/furniture.png">
        </div>
        <button class="item__btn" @click="setCurrentPage('FurniturePage')">посмотреть</button>
      </div>
      <div class="nav-list__item">
        <div class="category">всего</div>
        <div class="title">жильцов</div>
        <div class="subtitle">{{occupiers.length}}</div>
        <div class="img">
          <img src="/img/HomeMenu/residants.png">
        </div>
        <button class="item__btn" @click="setCurrentPage('ResidentsPage')">посмотреть</button>
      </div>
      <div class="nav-list__item">
        <div class="category">налог <span v-if="paidBefore">до {{paidBefore}}</span></div>
        <div v-if="paidBefore" class="title" style="color: #5CFF80;">оплачен</div>
        <div v-else class="title">не оплачен</div>
        <div class="img tax-img">
          <img src="/img/HomeMenu/tax.png">
        </div>
        <button class="item__btn" :disabled="paidBefore">оплатить</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'MenuNav',

  components: {

  },

  computed: {
    ...mapState('homeMenu', ['houseLocked', 'houseType', 'houseCost', 'houseId', 'occupiers', 'paidBefore']),
    ...mapGetters('localization', ['loc'])
  },

  methods: {
    ...mapMutations('homeMenu', ['setCurrentPage', 'setHouseLocked']),
    sellHouse: function() {
      window.mp.trigger('homeMenu:sellHouse', this.houseId)
    },
    toggleHouseLocked: function(toggle) {
      this.locked = toggle;
      //this.setHouseLocked();
      window.mp.trigger('homeMenu:toggleHouseLocked', this.houseId, toggle);
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-nav{
  height: 100%;
  position: relative;
  margin: 0 2.5rem 0 0.7rem;
  min-width: 38rem;
  max-width: 39rem;

  .nav-list{
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
    &__item{
      position: relative;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      height: 11rem;
      padding: 1rem 2rem 1.5rem 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255,255,255,0.02) url("/img/homeMenu/nav_bg.png") bottom right / contain no-repeat;

      .category {
        font-size: 0.75rem;
      }
      .title {
        font-size: 1.7rem;
        letter-spacing: 0.03em;
        line-height: 2rem;
      }
      .subtitle {
        font-size: 1rem;
        font-weight: 600;
        color: #33FF60;
      }
      .img{
        position: absolute;
        max-width: 9rem;
        height: 9rem;
        bottom: 0;
        right: 0;
        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .tax-img {
        top: 0;
      }
      .item__btn {
        margin-top: auto;
      }
    }
  }
}
</style>
