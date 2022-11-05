<template>
  <div class="animal-description-card">
    <div class="card-stick"></div>
    <div class="animal-description-info">
      <h3 class="category-card">описание животного</h3>
      <h1 class="premium-header">{{ animalsDescription.name }}</h1>
      <h3 class="subtitle-card">Вот вам яркий пример современных тенденций — постоянное информационно-пропагандистское
        обеспечение нашей деятельности напрямую зависит от распределения внутренних резервов и ресурсов! И нет сомнений,
        что тщательные исследования конкурентов в равной степени</h3>
      <div class="pluses-part">
        <div class="pluse-card" v-for="item in pluses" :key="item">
          <h3 class="pluse">+</h3>
          <h3 class="pluse-title">{{ item }}</h3>
        </div>
      </div>

      <div class="purchase-part">
        <button class="button-animal-buy-btn">
          <span class="buy-btn-text">приобрести {{ animalsDescription.buyName }}</span>
        </button>
        <div class="purchase-price">
          <div class="background">
            <div class="background-1"></div>
          </div>
          <div class="purchase-card-stick"></div>
          <svg class="purchase-coin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" fill="none">
            <g filter="url(#filter0_d_1_161)">
              <path d="M69 44C69 57.8071 57.8071 69 44 69C30.1929 69 19 57.8071 19 44C19 30.1929 30.1929 19 44 19C57.8071 19 69 30.1929 69 44ZM20.7921 44C20.7921 56.8173 31.1827 67.2079 44 67.2079C56.8173 67.2079 67.2079 56.8173 67.2079 44C67.2079 31.1827 56.8173 20.7921 44 20.7921C31.1827 20.7921 20.7921 31.1827 20.7921 44Z" fill="#5CFF80"/>
            </g>
            <circle cx="44" cy="44" r="18" fill="white" fill-opacity="0.06"/>
            <g filter="url(#filter1_d_1_161)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8478 32.0297C37.7761 32.5551 33.5614 36.1966 32.3354 41.1127C32.0635 42.2033 32 42.7495 32 44.0004C32 44.8316 32.0211 45.2429 32.0857 45.6673C32.7649 50.1302 35.718 53.7422 39.9824 55.3259C40.5413 55.5334 41.6857 55.8128 42.3781 55.9106C43.2231 56.03 44.7767 56.0298 45.6193 55.9102C50.4869 55.2192 54.4762 51.6355 55.6623 46.8881C55.9192 45.8601 56 45.1688 56 44.0004C56 42.832 55.9192 42.1407 55.6623 41.1127C54.5864 36.8067 51.1669 33.3963 46.8641 32.3379C46.4895 32.2457 45.961 32.137 45.6898 32.0962C45.0976 32.0073 43.439 31.9685 42.8478 32.0297ZM44.898 34.8466C48.8905 35.2518 52.2085 38.2475 53.0142 42.1743C53.7707 45.8611 52.1788 49.6228 48.978 51.712C45.1011 54.2426 39.9685 53.4694 36.9707 49.9033C35.8751 48.6 35.22 47.1822 34.9049 45.4325C34.7906 44.798 34.7873 43.2345 34.8988 42.5918C35.1358 41.2258 35.6167 40.0074 36.3482 38.9199C38.2594 36.0787 41.5572 34.5076 44.898 34.8466ZM43.1379 36.2555C40.1367 36.6041 37.5553 38.702 36.6038 41.5657C35.8474 43.8422 36.1784 46.2936 37.5104 48.2804C39.369 51.0525 42.6885 52.3563 45.8601 51.5599C49.0329 50.7633 51.3734 48.0838 51.7474 44.8202C52.1387 41.4057 50.0811 38.032 46.8231 36.746C45.6914 36.2992 44.3257 36.1175 43.1379 36.2555ZM47.1472 40.5733C47.2665 40.6342 47.3663 40.7339 47.4272 40.8532C47.519 41.0331 47.5218 41.1246 47.5218 44.0004C47.5218 46.8763 47.519 46.9677 47.4272 47.1476C47.3663 47.2669 47.2665 47.3667 47.1472 47.4275C46.9672 47.5193 46.8757 47.522 43.9987 47.522C41.1217 47.522 41.0302 47.5193 40.8502 47.4275C40.7309 47.3667 40.6311 47.2669 40.5702 47.1476C40.4784 46.9677 40.4757 46.8763 40.4757 44.0004C40.4757 41.1258 40.4784 41.033 40.5701 40.8534C40.6279 40.7403 40.7329 40.6323 40.8402 40.5756C41.0096 40.4862 41.1217 40.4829 43.9888 40.4809C46.8779 40.4788 46.967 40.4815 47.1472 40.5733ZM41.8849 44.0004V46.1134H43.9987H46.1125V44.0004V41.8874H43.9987H41.8849V44.0004Z" fill="#5CFF80"/>
            </g>
            <defs>
              <filter id="filter0_d_1_161" x="5" y="5" width="78" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="7"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0 0.501961 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_161"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_161" result="shape"/>
              </filter>
              <filter id="filter1_d_1_161" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="16"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0 0.501961 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_161"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_161" result="shape"/>
              </filter>
            </defs>
          </svg>
          <div class="purchase-text-part">
            <div class="valute">РУБ.</div>
            <div class="count">750,000</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalDescription",
  data() {
    return {
      pluses: ['умеет гавкать', "просит еду, но мало", "умный, но не очень"]
    }
  },
  props: {
    animalsDescription: Object
  }
}
</script>

<style lang="scss" scoped>
.animal-description-card {
  position: relative;
  width: 36.388rem;
  height: 21.5rem;
  //border: 1px solid red;

}

.background {
  position: absolute;
  &-1 {
    width: 8.33rem;
    height: 0.833rem;
    left: 4.833rem;
    top: 3.722rem;

    background: #FFFFFF;
    opacity: 0.25;
    filter: blur(4.9444rem);
  }
}
.card-stick {
  width: 1.44rem;
  height: 0.111rem;
  background: #FFFFFF;
  border: 0.055rem solid rgba(255, 255, 255, 0.09);
  box-shadow: 0px 0px 0.77rem rgba(255, 255, 255, 0.55);
  transform: rotate(-90deg);
  position: absolute;
  top: 0.7222rem;
  left: -0.7222rem;

}
.animal-description-info {
  margin-left: 0.88rem;
}
.category-card {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 0.666rem;
  line-height: 0.777rem;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);
}
.premium-header {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 2.666rem;
  line-height: 2.555rem;
  /* identical to box height */

  text-transform: uppercase;

  color: #FFFFFF;
}
.subtitle-card {
  max-width: 35.5rem;
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 600;
  font-size: 0.8333rem;
  line-height: 1.944rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}
.pluses-part {
  display: flex;
  margin-bottom: 3.777rem;
}
.pluse-card {
  display: flex;
  margin-right: 1.11rem;
}
.pluse {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 900;
  font-size: 2.666rem;
  line-height: 3.22rem;
  /* identical to box height */

  text-transform: uppercase;
  margin-right: 0.66rem;

  color: #5CFF80;

  text-shadow: 0px 0px 0.777rem rgba(92, 255, 128, 0.25);

  &-title {
    font-family: 'Akrobat';
    font-style: normal;
    padding-top: 1.277rem;
    font-weight: 700;
    font-size: 0.888rem;
    line-height: 1.055rem;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.85);

  }
}
.purchase-part {
  display: flex;
}
.button-animal-buy-btn {

  display: flex;
  width: 19.66rem;
  height: 4.712rem;
  background: linear-gradient(180deg, rgba(219, 18, 27, 0.25) 0%, rgba(123, 9, 14, 0.25) 100%);
  border: 0.055rem solid #DB121B;
  box-shadow: inset 0px 0px 0.833rem rgba(220, 32, 40, 0.86);
  justify-content: center;
  margin-right: 0.88rem;
 // transition: opacity 0.4s ease;
  &:hover {
    opacity: 0.6;
  }
  //&:hover {
  //  background: #ccc;
  //}
  //&:hover .buy-btn-text{
  //  color: #DB121B;
  //}
}
.buy-btn-text {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 600;
  font-size: 0.77rem;
  line-height: 0.944rem;
  /* identical to box height */

  align-self: center;
  text-transform: uppercase;

  color: #FFFFFF;
}
.purchase-price {
  position: relative;
  width: 11.5rem;
  height: 4.722rem;
  border: 0.055rem solid #171819;
  overflow: hidden;
}
.purchase-card-stick {
  width: 1.44rem;
  height: 0.11rem;
  background: #FFFFFF;
  border: 0.055rem solid rgba(255, 255, 255, 0.09);
  box-shadow: 0px 0px 0.77rem rgba(255, 255, 255, 0.55);
  transform: rotate(-90deg);
  position: absolute;
  top: 2rem;
  left: 0.055rem;
}
.purchase-coin {
  position: absolute;
  width: 4.88rem;
  height: 4.88rem;
  left: .555rem;
  top: 0;
  bottom: 0;
}
.purchase-text-part {
  margin-top: 1.277rem;
  margin-left: 5.33rem;
}
.valute {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 0.77rem;
  line-height: 0.944rem;
  /* identical to box height */

  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.25);

}
.count {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 1.11rem;
  line-height: 1.33rem;
  /* identical to box height */

  text-transform: uppercase;

  color: #5CFF80;
}
</style>