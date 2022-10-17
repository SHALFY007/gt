<template>
    <div class="current-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="448" height="640" viewBox="0 0 448 640"
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
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="448" height="481" viewBox="0 0 448 481"
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
            <svg class="background-3" xmlns="http://www.w3.org/2000/svg" width="448" height="481" viewBox="0 0 448 481"
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
            <div class="background-7r"></div>
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="current-category" style="margin-bottom:-15px">игровая</h1>
            <h1 class="current-category">валюта</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
        <div class="bottom-card">
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
.current-card {
    width: 448px;
    height: 861px;
    border: 1px solid #171819;
    border-radius: 27px;
    position: relative;
    overflow: hidden;
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        top: -255px;
        left: 0px;
    }

    &-2 {
        position: absolute;
        top: 83px;
        left: 0px;
    }

    &-3 {
        position: absolute;
        top: 456px;
        left: 0px;
    }

    &-4 {
        background: #FFBC10;
        opacity: 0.25;
        filter: blur(161.5px);
        width: 560px;
        height: 473px;
    }

    &-5r {
        background: url(../../../../../../public/img/Shop/cur-left.png);
        position: absolute;
        width: 524.04px;
        height: 570.91px;
        left: -337px;
        top: 454px;
        filter: blur(15.5px);
        transform: matrix(0, 1, 1, 0, 0, 0);
    }

    &-6r {
        background: url(../../../../../../public/img/Shop/cur-right.png);
        position: absolute;
        width: 524.04px;
        height: 570.91px;
        left: 257px;
        top: 103px;
        filter: blur(4px);

    }

    &-7r {
        background: url(../../../../../../public/img/Shop/gold.png);
        position: absolute;
        width: 322px;
        height: 218px;
        top: 330px;
        left: 56px;
    }
}

.top-card {
    display: block;
    padding-top: 19px;
    padding-left: 30px;
}

.card-stick {
    width: 26px;
    height: 2px;
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.09);
    box-shadow: 0px 0px 14px rgba(255, 255, 255, 0.55);
    transform: rotate(-90deg);
    position: absolute;
    top: 40px;
    left: 0px;
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

.current-category {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
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
}

.buy-button {
    margin-top: 540px;
    background: linear-gradient(180deg, rgba(255, 170, 92, 0.25) 0%, rgba(92, 53, 17, 0.25) 100%);
    border: 1px solid #FFAA5C;
    width: 321px;
    height: 66px;
    margin-left: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &-text {
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
}
</style>