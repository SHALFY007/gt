<template>
  <div class="item-card-object">
    <div class="background">
      <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="439" height="386" viewBox="0 0 439 386" fill="none">
        <path d="M453.703 -260L-192.297 386H101.604L453.703 33.9009L805.802 386H1099.7L453.703 -260Z" fill="url(#paint0_linear_1_652)" fill-opacity="0.02"/>
        <defs>
          <linearGradient id="paint0_linear_1_652" x1="453.703" y1="-260" x2="453.703" y2="386" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="439" height="323" viewBox="0 0 439 323" fill="none">
        <path d="M453.703 0L-192.297 640H101.604L453.703 291.171L805.802 640H1099.7L453.703 0Z" fill="url(#paint0_linear_1_649)" fill-opacity="0.02"/>
        <defs>
          <linearGradient id="paint0_linear_1_649" x1="453.703" y1="0" x2="453.703" y2="640" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
          </linearGradient>
        </defs>
      </svg>
      <svg class="background-3" xmlns="http://www.w3.org/2000/svg" width="439" height="237" viewBox="0 0 439 237" fill="none">
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
      <div class="background-4d" :style="{ background: 'url(' + animalCard.image + ')', width: animalCard.width, left: animalCard.left }"></div>
    </div>
    <div class="top-card">
      <div class="left-card-part">
        <div class="card-stick"></div>
        <h3 class="category-card">собачка</h3>
        <h1 class="premium-header">{{ animalCard.name }}</h1>
      </div>

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
  width: 439px;
  height: 386px;
  border-radius: 27px;
  border: 1px solid #1E1E1E;
  padding-top: 19px;
  padding-left: 35px;
  overflow: hidden;
  margin-bottom: 26px;
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
  top: -18px;
  left: -40px;
}

&-2 {
  position: absolute;
  top: 40px;
  left: -38px;

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
  left: -35px;
  top: 131px;
  //&-color {
  //  fill: #FC9B41;
  //}

}

&-4d {
     position: absolute;
  width: 267px;
  height: 246px;
    // background: url("/img/Shop/dog-modal.png");
  top: 83px;
  //left: 13%;
   }
}

.top-card {
  display: flex;
}

.left-card-part {
  margin-right: 38px;
}

.card-stick {
  width: 26px;
  height: 2px;
  position: absolute;
  top: 33px;
  left: 6px;
  background-color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.09);
  box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.55);
  transform: rotate(-90deg);

}

.category-card {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);

}

.premium-header {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;

  color: #FFFFFF;
  margin-top: -8px;

}

.subtitle-card {

  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.55);
  max-width: 204px;
;
}

.right-card-part {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
}

.right-card-text {
  position: absolute;
  left: 223px;
  top: 20px;
}

.subtitle-donate {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 11.2836px;
  line-height: 14px;
  /* identical to box height */

  text-align: right;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.25);
}

.count-premium {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height */

  text-transform: uppercase;

  color: #5CFF80;
}

.right-coin {
  position: absolute;
  top: 4px;
  left: 275px;
}

.bottom-card-modal {
  display: flex;
  margin-top: 210px;
  margin-left: 14px;
}

.exclusive-button-buy {
  width: 119px;
  height: 47px;

  margin-right: 4px;
  background: linear-gradient(180deg, rgba(92, 255, 128, 0.25) 0%, rgba(17, 90, 33, 0.25) 100%);
  border: 1px solid #5CFF80;
}

.exclusive-button-try {
  width: 119px;
  height: 47px;

  background: linear-gradient(180deg, rgba(255, 229, 92, 0.25) 0%, rgba(90, 70, 17, 0.25) 100%);
  border: 1px solid #FFE55C;

}

.exclusive-button-text {
  font-family: 'Akrobat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;

}
</style>