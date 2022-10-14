<template>
  <button :style="{ background: `center / cover no-repeat url(/img/optionsMenu/statisticsTab/backs/${item.bg}.png)`}"
          class="item" :disabled="!property[item.key]" @click="item.event">
    <div class="item__info">
      <div class="category">категория</div>
      <div class="title">{{ loc(item.title) }}</div>
      <div v-if="item.key === 'house'" class="subtitle">
        <div v-if="property[item.key]" class="item-info">
          <div class="item-property">класс <span>premium</span></div>
          <div class="item-property">гаражных мест <span>8</span></div>
          <div class="item-id">ID {{ property[item.key].number }}</div>
        </div>
        <div v-else class="item-empty">отсутствует</div>
      </div>
      <div v-else-if="item.key === 'business'" class="subtitle">
        <div v-if="property[item.key]" class="item-info">
          <div class="item-property">название <span>{{ property[item.key].name }}</span></div>
          <div class="item-property">крыша <span>крышанейм</span></div>
          <div class="item-id">ID {{ property[item.key].number }}</div>
        </div>
        <div v-else class="item-empty">отсутствует</div>
      </div>
      <div v-else-if="item.key === 'transport'" class="subtitle">
        <div class="item-property">количество <span>{{ property[item.key] ? property[item.key].length : 0 }}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'ActionsItem',

  props: {
    item: Object
  },

  computed: {
    ...mapState('optionsMenu', ['property']),
    ...mapGetters('localization', ['loc'])
  }
}
</script>
<style lang="scss" scoped>
.item-property {
  display: flex;
  flex-flow: column nowrap;
  & span {
    font-weight: 600;
    color: #fff;
    font-size: 1.2rem;
    line-height: 1.45rem;
    margin-bottom: 0.5rem;
  }
}
.item-id {
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  line-height: 1.2rem;
  &:after {
    content: "";
    position: absolute;
    right: -1.5rem;
    width: 1.1rem;
    height: 100%;
    background: url("/img/optionsMenu/statisticsTab/icons/location.svg") center / contain no-repeat;
  }
}
</style>