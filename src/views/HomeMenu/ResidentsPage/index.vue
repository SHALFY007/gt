<template>
  <div class="residents-page">
    <div class="header">
      <div class="header__info">
        <div class="heading">
          <div class="category">арендаторов</div>
          <div class="title">{{occupiers.length}}</div>
        </div>
        <div class="heading">
          <div class="category">цена аренды</div>
          <div class="title" style="color: #33FF60; max-width: 5rem; overflow: hidden">${{rentCost}}</div>
        </div>
        <div class="btn-edit" @click="setModal('rentCost')">изменить</div>
      </div>
      <div class="header__nav">
        <div class="item__btn" @click="setModal('addOccupier')">заселить</div>
        <div class="item__btn" @click="deleteAllOccupiers">выселить всех</div>
      </div>
    </div>
    <div class="main">
      <span v-if="occupiers.length === 0">{{ loc('HomeMenu_5') }}</span>
      <div class="billet-item" v-for="(item) in occupiers" :key="item.id">
        <div class="item-text">
          <div class="title">{{ item.name }}</div>
          <div class="subtitle">живет n дней</div>
        </div>
        <div class="item__btn" @click="deleteOccupier(item.uuid)">убрать</div>
      </div>
    </div>
    <Modal v-if="dataModal.show" :type="dataModal.type" :closeModal="closeModal" />
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Modal from '../components/Modal'

export default {
  name: 'ResidentsPage',

  components: {
    Modal
  },

  data: function () {
    return {
      dataModal: {
        show: false,
        type: null
      }
    }
  },

  computed: {
    ...mapState('homeMenu', ['occupiers', 'rentCost', 'houseId']),
    ...mapGetters('localization', ['loc'])
  },

  methods: {
    ...mapMutations('homeMenu', ['setSafe', 'setGarage', 'deleteOccupier', 'deleteAllOccupiers']),
    buyGarage: function (key) {
      window.mp.trigger('homeMenu:buyGarage', this.houseId, key)
    },
    setModal: function (type) {
      this.dataModal.type = type
      this.dataModal.show = true
    },
    closeModal: function () {
      this.dataModal.show = false
      this.dataModal.type = null
    },
  }
}
</script>

<style lang="scss" scoped>
.residents-page {
  .item-text {
    .title {
      width: 11rem;
    }

    .subtitle {
      margin-left: 1rem;
    }
  }

  .btn-edit {
    font-size: 0.7rem;
    line-height: 1.5;
    align-self: end;
    color: #fff;
    opacity: 0.55;
    margin-left: 0.5rem;
    transition: 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
