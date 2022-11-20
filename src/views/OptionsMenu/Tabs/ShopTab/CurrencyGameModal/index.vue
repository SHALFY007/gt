<template>
  <div class="modal">
    <div class="currency-left-card">
      <MainCurrencyModalCard  class="currency-hover"/>
    </div>
    <div class="currency-cards" >
      <div class="currency-card" v-for="item in currencyCard" :key="item.id">
        <MiniCurrencyCard :currencyCard="item" class="currency-hover-border" @currencyModalClick="currencyModalClick"/>
      </div>

    </div>

  </div>
</template>

<script>
import MainCurrencyModalCard from "@/views/OptionsMenu/Tabs/ShopTab/CurrencyGameModal/commons/MainCurrencyModalCard";
import MiniCurrencyCard from "@/views/OptionsMenu/Tabs/ShopTab/CurrencyGameModal/commons/MiniCurrencyModalCard";
export default {
  name: "CurrencyGameModal",
  data() {
    return {
      activeEl: null,
      currencyCard: [{id:1, path: '/img/Shop/cash-1.png', width: '10.22rem', height: '8.33rem'},
        {id:2, path: '/img/Shop/cash-2.png', width: '12.88rem', height: '8.77rem'},
        {id:3, path: '/img/Shop/cash-3.png', width: '12.277rem', height: '10.055rem'},
        {id:4, path: '/img/Shop/cash-4.png', width: '11.388rem', height: '10.166rem'},
        {id:5, path: '/img/Shop/cash-4.png', width: '11.388rem', height: '10.166rem'},
        {id:6, path: '/img/Shop/cash-4.png', width: '11.388rem', height: '10.166rem'},]
    }
  },
  methods: {
    currencyModalClick(id) {
      if (this.activeEl == null) {
        console.log('asd')
        document.getElementById(id).classList.add('active')
        this.activeEl = id
      } else {
        document.getElementById(this.activeEl).classList.remove('active')
        this.activeEl = id
        document.getElementById(this.activeEl).classList.add('active')
      }
    }
  },
  components: {MiniCurrencyCard, MainCurrencyModalCard}
}
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  display: flex;
  top: -0.1rem;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: url("/img/optionsMenu/bg.png"), rgba(0, 0, 0, 0.96);
  background-blend-mode: overlay;
}
.currency-left-card {
  margin-right: 4.444rem;

}
.currency-hover {
  transition: background-color .4s ease-out;
  &-border {
    transition: border .4s ease-out;
  }
  &-border:hover {
      border: 0.055rem solid #5CFF80 !important;

  }
  &:hover {
    background-color: #1E1E1E;
  }
}
.currency-cards {
  display: flex;
  flex-wrap: wrap;
  max-width: 60.8rem;
  max-height: 46rem;
  justify-content: space-between;
}
.active {
  border: 1px solid #5CFF80 !important
}
</style>