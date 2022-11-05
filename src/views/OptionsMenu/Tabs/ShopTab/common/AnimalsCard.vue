<template>
    <div class="animals-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 408 386"
                fill="none">
                <path d="M453.702 -260L-192.298 386H101.603L453.702 33.9009L805.801 386H1099.7L453.702 -260Z"
                    fill="url(#paint0_linear_1_32)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_32" x1="453.702" y1="-260" x2="453.702" y2="386"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 349"
                fill="none">
                <path d="M453.702 0L-192.298 640H101.603L453.702 291.171L805.801 640H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_31)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_31" x1="453.702" y1="0" x2="453.702" y2="640"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="background-3"></div>
<!--            <div class="background-4"></div>-->
<!--            <div class="background-5c"></div>-->
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="animal-category">животные</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
        <img class="animal-dog" src="/img/Shop/dog.png">
        <img class="animal-cat" src="/img/Shop/cat.png">
    </div>
</template>

<script>
export default {
    name: "AnimalsCard"
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.animals-card {
    width: 22.66rem;
    height: 20.88rem;
    border: 1px solid #171819;
    border-radius: 1.6875rem;
    position: relative;
    overflow: hidden;
    margin-right: 1.6875rem;
    /*transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);

    }*/
  @media (max-width: 1728px) {
    width: 20.66rem;
  }
}

.background {
    position: absolute;
  width: 100%;

    &-1 {
        position: absolute;
        width: 25.5rem;
        height: 24.125rem;
        top: 0rem;
        left: -2.1875rem;
    }

    &-2 {
        position: absolute;
      width: 25.5rem;
      height: 21.8125rem;
        top: 3.68rem;
        left: -0.1875rem;
    }

    &-3 {
        position: absolute;
        width: 31.375rem;
        height: 21.125rem;
        background: #E09968;
        top: 17rem;
        opacity: 0.25;
        filter: blur(5.56rem);
    }

    //&-4 {
    //    background: url("/img/Shop/dog.png");
    //    filter: blur(0px);
    //    opacity: 1;
    //    width: 249px;
    //    height: 229px;
    //    position: absolute;
    //    top: 191px;
    //    left: 0px;
    //}
    //
    //&-5c {
    //    background: url("/img/Shop/cat.png");
    //    background-repeat: no-repeat;
    //    width: 249px;
    //    height: 229px;
    //    position: absolute;
    //    top: 175px;
    //    left: 201px;
    //}
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

.animal-category {
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
.animal {
  &-dog {
    filter: blur(0rem);
    position: absolute;
    width: 13.83rem;
    height: 12.722rem;
    top: 7.93rem;
    left: 0px;

    @media (max-width: 1728px) {
      width: 12.83rem;
      height: 11.722rem;
      top: 8.93rem;
    }
  }
  &-cat {
    position: absolute;
    width: 10.77rem;
    height: 13.83rem;
    top: 6.93rem;
    left: 11.56rem;

    @media (max-width: 1728px) {
      width: 9.77rem;
      height: 12.83rem;
      top: 7.93rem;
    }
  }
}
</style>