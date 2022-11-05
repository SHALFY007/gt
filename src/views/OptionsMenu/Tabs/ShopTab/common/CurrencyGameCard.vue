<template>
    <div class="current-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 640"
                fill="none">
                <path d="M453.702 0L-192.298 640H101.603L453.702 291.171L805.801 640H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_43)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_43" x1="453.702" y1="0" x2="453.702" y2="640"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 481"
                fill="none">
                <path d="M453.702 0L-192.298 646H101.603L453.702 293.901L805.801 646H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_42)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_42" x1="453.702" y1="0" x2="453.702" y2="646"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 448 481"
                fill="none">
                <path d="M453.702 0L-192.298 646H101.603L453.702 293.901L805.801 646H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_42)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_42" x1="453.702" y1="0" x2="453.702" y2="646"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="background-4"></div>
            <div class="background-5r"></div>
            <div class="background-6r"></div>
<!--            <div class="background-7r"></div>-->
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="current-category" style="margin-bottom:-15px">игровая</h1>
            <h1 class="current-category">валюта</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
      <img class="current-center-img" src="/img/Shop/gold.png">
        <div class="bottom-card-c">
            <button class="buy-button">
                <span class="buy-button-text">
                    Подробнее внутри
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CurrencyGameCard"
}
</script>

<style lang="scss" scoped>
$hd: 1280px;
* {
  box-sizing: border-box;
}
.current-card {
  width: 24.8889rem;
  height: 44.8333rem;
    border: 0.0625rem solid #171819;
    border-radius: 1.6875rem;
    position: relative;
    overflow: hidden;
    /*transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);

    }*/
  @media (max-width: 1728px) {
    width: 21.8889rem;
  }
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
      width: 24.88rem;
      height: 35.55rem;
        top: -15.9375rem;
        left: 6rem;
    }

    &-2 {
        position: absolute;
      width: 24.88rem;
      height: 26.722rem;
        top: 5.1875rem;
        left: 6rem;
    }

    &-3 {
        position: absolute;
      width: 24.88rem;
      height: 26.722rem;
        top: 28.5rem;
        left: 6rem;
    }

    &-4 {
        background: #FFBC10;
        opacity: 0.25;
        filter: blur(10rem);
        width: 35rem;
        height: 29.56rem;
    }

    &-5r {
        background: url("/img/Shop/cur-left.png");
        position: absolute;
        width: 32.75rem;
        height: 35.625rem;
        left: -21.0625rem;
        top: 28.375rem;
        filter: blur(0.9687rem);
        transform: matrix(0, 1, 1, 0, 0, 0);
      background-size: contain;
    }

    &-6r {
        background: url("/img/Shop/cur-right.png");
        position: absolute;
        width: 32.75rem;
        height: 35.687rem;
        left: 17rem;
        top: 6.4375rem;
      background-size: contain;
        filter: blur(0,25rem);

    }

    &-7r {
        //background: url("/img/Shop/gold.png");
        //position: absolute;
        //width: 322px;
        //height: 218px;
        //top: 330px;
        //left: 56px;
    }
}

.top-card {
    display: block;
    padding-top: 1.1875rem;
    padding-left: 1.875rem;
}

.card-stick {
    width: 1.625rem;
    height: 0.125rem;
    background: #FFFFFF;
    border: 0.0625rem solid rgba(255, 255, 255, 0.09);
    box-shadow: 0px 0px 0.875rem rgba(255, 255, 255, 0.55);
    transform: rotate(-90deg);
    position: absolute;
    top: 2.5rem;
    left: 0px;
}

.category-card {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.875rem;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.55);


}

.current-category {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.625rem;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
}

.subtitle-card {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.875rem;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.55);
    max-width: 12.75rem;
}
.current-center-img {
  position: absolute;
  width: 20.125rem;
  height: 13.625rem;
  top: 16.625rem;
  left: 2rem;

  @media (max-width: 1728px) {
    width: 18.125rem;
    height: 11.625rem;
    top: 16.625rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }
}
.buy-button {
  z-index: 99;
  position: absolute;
    margin-top: 28.75rem;
    background: linear-gradient(180deg, rgba(255, 170, 92, 0.25) 0%, rgba(92, 53, 17, 0.25) 100%);
    border: 0.0625rem solid #FFAA5C;
    width: 20rem;
    height: 4.125rem;
    //margin-left: 2.3125rem;
    margin-left: auto;
     margin-right: auto;
    left: 0;
     right: 0;
    //text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
    &-text {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 600;
        font-size: 0.875rem;
        line-height: 0.0625rem;
        /* identical to box height */

        text-align: center;
        text-transform: uppercase;

        color: #FFFFFF;

    }
}
</style>