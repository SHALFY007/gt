<template>
    <div class="object-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 386"
                fill="none">
                <path d="M453.702 -260L-192.298 386H101.603L453.702 33.9009L805.801 386H1099.7L453.702 -260Z"
                    fill="url(#paint0_linear_1_19)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_19" x1="453.702" y1="-260" x2="453.702" y2="386"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 349"
                fill="none">
                <path d="M453.702 0L-192.298 640H101.603L453.702 291.171L805.801 640H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_18)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_18" x1="453.702" y1="0" x2="453.702" y2="640"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="background-3"></div>
<!--            <div class="background-4"></div>-->
<!--            <div class="background-5g"></div>-->
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="object-category" style="margin-bottom:-15px">магазин</h1>
            <h1 class="object-category">предметов</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
      <img class="object-img-main" src="/img/Shop/bag.png">
      <img class="object-img-mini" src="/img/Shop/gun.png">
    </div>
</template>

<script>
export default {
    name: "ObjectCard"
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.object-card {
    width: 18.88rem;
    height: 20.88rem;
    border: 0.0625rem solid #171819;
    border-radius: 1.6875rem;
    position: relative;
    overflow: hidden;
    /*transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);

    }*/
  @media (max-width: 1728px) {
    width: 16.88rem;
  }
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
      width: 19rem;
      height: 24.125rem;
        top: 0px;
        left: 2rem;
    }

    &-2 {
        position: absolute;
      width: 21.25rem;
      height: 21.8125rem;
        top: 3.5625rem;
        left: 0px;
    }

    &-3 {
        position: absolute;
      top: 17rem;
      left: 4.5rem;
        width: 11.875rem;
        height: 11.875rem;

        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(5.5625rem);
    }

    &-4 {
        //background: url("/img/Shop/bag.png");
        //filter: blur(0px);
        //opacity: 1;
        //background-repeat: no-repeat;
        //width: 249px;
        //height: 229px;
        //position: absolute;
        //top: 296px;
        //left: 13px;
    }

    &-5g {
        //background: url("/img/Shop/gun.png");
        //background-repeat: no-repeat;
        //width: 313px;
        //height: 153px;
        ///*transform: matrix(-1, 0, 0, 1, 0, 0);*/
        //position: absolute;
        //top: 196px;
        //left: 51px;
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
    font-size: 0.6667rem;
    line-height: 0.7778rem;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.55);


}

.object-category {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.1rem;
    line-height: 2.7222rem;
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
.object-img {
  &-main {
    filter: blur(0px);
    position: absolute;
    width: 6.5rem;
    height: 6.5rem;
    top: 14.5rem;
    left: 0.8125rem;
  }
  &-mini {
    /*transform: matrix(-1, 0, 0, 1, 0, 0);*/
    position: absolute;
    width: 17.388rem;
    height: 8.5rem;
    top: 9.25rem;
    left: 2.4rem;

    @media (max-width: 1728px) {
      width: 15.388rem;
      height: 7.5rem;
    }
  }
}
</style>