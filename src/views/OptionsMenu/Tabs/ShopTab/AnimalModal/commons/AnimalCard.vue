<template>
  <div class="item-card-object" :id="animalCard.id+'-animal-card'" @click="$emit('animalModalClick', `${animalCard.id}-animal-card`)">
    <div class="background">
      <svg class="background-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 439 386" fill="none">
        <path d="M453.703 -260L-192.297 386H101.604L453.703 33.9009L805.802 386H1099.7L453.703 -260Z" fill="url(#paint0_linear_1_652)" fill-opacity="0.02"/>
        <defs>
          <linearGradient id="paint0_linear_1_652" x1="453.703" y1="-260" x2="453.703" y2="386" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="background-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 439 323" fill="none">
        <path d="M453.703 0L-192.297 640H101.604L453.703 291.171L805.802 640H1099.7L453.703 0Z" fill="url(#paint0_linear_1_649)" fill-opacity="0.02"/>
        <defs>
          <linearGradient id="paint0_linear_1_649" x1="453.703" y1="0" x2="453.703" y2="640" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="background-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 439 237" fill="none">
        <g :opacity="animalCard.opacity" filter="url(#filter0_f_1_592)">
          <ellipse class="background-3-color" cx="213" cy="273" rx="226" ry="95" :fill="animalCard.color"/>
        </g>
        <defs>
          <filter id="filter0_f_1_592" x="-191" y="0" width="808" height="546" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="89" result="effect1_foregroundBlur_1_592"/>
          </filter>
        </defs>
      </svg>
<!--      <div class="background-4d" :style="{ background: 'url(' + animalCard.image + ')', width: animalCard.width, left: animalCard.left }"></div>-->
    </div>
    <div class="top-card">
      <div class="left-card-part">
        <div class="card-stick"></div>
        <h3 class="category-card">собачка</h3>
        <h1 class="premium-header">{{ animalCard.name }}</h1>
      </div>
      <img class="animal-img" :src="animalCard.image" :style="{left: animalCard.left, width: animalCard.width, height: animalCard.height}">
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimalCard",
  props: {
    animalCard: Object
  }
}
</script>

<style lang="scss" scoped>
.item-card-object {
  position: relative;
  width: 24.388rem;
  height: 21.44rem;
  border-radius: 1.5rem;
  border: 0.055rem solid #1E1E1E;
  padding-top: 1.055rem;
  padding-left: 1.944rem;
  overflow: hidden;
  margin-bottom: 1.44rem;
  /*transition: transform 0.4s ease;

  &:hover {
      transform: scale(1.04);
      border: 1px solid #5CFF80 !important;


  }*/
}

/*.active {
    border: 1px solid #5CFF80 !important;
    ;
}*/
.background {
  position: absolute;
  width: 100%;

&-1 {
  position: absolute;
  width: 24.388rem;
  height: 21.44rem;
  top: -1rem;
  left: -2.22rem;
}

&-2 {
  position: absolute;
  width: 24.388rem;
  height: 323rem;
  top: -148rem;
  left: -2.11rem;

}

&-3 {
  //position: absolute;
  //width: 190px;
  //height: 190px;
  //
  //background: #FC9B41;
  //opacity: 0.25;
  //filter: blur(89px);
  //top: 286px;
  //left: 49px;
  position: absolute;
  width: 24.388rem;
  height: 13.166rem;
  left: -1.944rem;
  top: 7.27rem;
  //&-color {
  //  fill: #FC9B41;
  //}

}

//&-4d {
//     position: absolute;
//  width: 267px;
//  height: 246px;
//    // background: url("/img/Shop/dog-modal.png");
//  top: 83px;
//  //left: 13%;
//   }
}

.top-card {
  display: flex;
}

.left-card-part {
  margin-right: 2.11rem;
}

.card-stick {
  width: 1.44rem;
  height: 0.11rem;
  position: absolute;
  top: 1.833rem;
  left: 0.33rem;
  background-color: #FFFFFF;
  border: 0.055rem solid rgba(255, 255, 255, 0.09);
  box-shadow: 0px 0px 0.77rem rgba(255, 255, 255, 0.55);
  transform: rotate(-90deg);

}

.category-card {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 0.66rem;
  line-height: 0.77rem;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);

}

.premium-header {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 2.66rem;
  line-height: 3.22rem;
  /* identical to box height */

  text-transform: uppercase;

  color: #FFFFFF;
  margin-top: -0.44rem;

}

.subtitle-card {

  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 0.66rem;
  line-height: 0.77rem;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);
  max-width: 11.33rem;
;
}

.animal-img {
  position: absolute;
  //width: 14.833rem;
  //height: 13.66rem;
  top: 4.611rem;
}
</style>