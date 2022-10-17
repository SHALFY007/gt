<template>
    <div class="exclusive-part">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="775" height="386" viewBox="0 0 775 386"
                fill="none">
                <path d="M453.702 -260L-192.298 386H101.603L453.702 33.9009L805.801 386H1099.7L453.702 -260Z"
                    fill="url(#paint0_linear_1_62)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_62" x1="453.702" y1="-260" x2="453.702" y2="386"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="775" height="359" viewBox="0 0 775 359"
                fill="none">
                <path d="M453.702 0L-192.298 640H101.603L453.702 291.171L805.801 640H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_59)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_59" x1="453.702" y1="0" x2="453.702" y2="640"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-3" xmlns="http://www.w3.org/2000/svg" width="775" height="42" viewBox="0 0 775 42"
                fill="none">
                <path d="M453.702 0L-192.298 646H101.603L453.702 293.901L805.801 646H1099.7L453.702 0Z"
                    fill="url(#paint0_linear_1_58)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_58" x1="453.702" y1="0" x2="453.702" y2="646"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="background-4"></div>
            <div class="background-5"></div>
            <div class="background-6"></div>
            <div class="background-7"></div>
            <div class="background-8"></div>

        </div>
        <div class="top-card">
            <div class="left-card-part">
                <div class="card-stick"></div>
                <h3 class="category-card">категория</h3>
                <h1 class="premium-category">EXCLUSIVE PACK</h1>
                <h3 class="subtitle-card">В этом разделе у вас есть возможность
                    покупать одежду различного класса</h3>
            </div>
            <div class="right-cart-part">
                <div class="limited">
                    <span class="limited-text">255/500 осталось</span>
                </div>
            </div>
        </div>
        <div class="centre-card">
            <div class="pluses" v-for="item in pluses" :key="item.id">
                <h3 class="pluses-img">+</h3>
                <p class="pluses-text">{{item.text}}</p>

            </div>
        </div>
        <div class="bottom-card">
            <svg class="bottom-card-coin" xmlns="http://www.w3.org/2000/svg" width="88" height="88" viewBox="0 0 88 88"
                fill="none">
                <g filter="url(#filter0_d_1_161)">
                    <path
                        d="M69 44C69 57.8071 57.8071 69 44 69C30.1929 69 19 57.8071 19 44C19 30.1929 30.1929 19 44 19C57.8071 19 69 30.1929 69 44ZM20.7921 44C20.7921 56.8173 31.1827 67.2079 44 67.2079C56.8173 67.2079 67.2079 56.8173 67.2079 44C67.2079 31.1827 56.8173 20.7921 44 20.7921C31.1827 20.7921 20.7921 31.1827 20.7921 44Z"
                        fill="#5CFF80" />
                </g>
                <circle cx="44" cy="44" r="18" fill="white" fill-opacity="0.06" />
                <g filter="url(#filter1_d_1_161)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M42.8478 32.0297C37.7761 32.5551 33.5614 36.1966 32.3354 41.1127C32.0635 42.2033 32 42.7495 32 44.0004C32 44.8316 32.0211 45.2429 32.0857 45.6673C32.7649 50.1302 35.718 53.7422 39.9824 55.3259C40.5413 55.5334 41.6857 55.8128 42.3781 55.9106C43.2231 56.03 44.7767 56.0298 45.6193 55.9102C50.4869 55.2192 54.4762 51.6355 55.6623 46.8881C55.9192 45.8601 56 45.1688 56 44.0004C56 42.832 55.9192 42.1407 55.6623 41.1127C54.5864 36.8067 51.1669 33.3963 46.8641 32.3379C46.4895 32.2457 45.961 32.137 45.6898 32.0962C45.0976 32.0073 43.439 31.9685 42.8478 32.0297ZM44.898 34.8466C48.8905 35.2518 52.2085 38.2475 53.0142 42.1743C53.7707 45.8611 52.1788 49.6228 48.978 51.712C45.1011 54.2426 39.9685 53.4694 36.9707 49.9033C35.8751 48.6 35.22 47.1822 34.9049 45.4325C34.7906 44.798 34.7873 43.2345 34.8988 42.5918C35.1358 41.2258 35.6167 40.0074 36.3482 38.9199C38.2594 36.0787 41.5572 34.5076 44.898 34.8466ZM43.1379 36.2555C40.1367 36.6041 37.5553 38.702 36.6038 41.5657C35.8474 43.8422 36.1784 46.2936 37.5104 48.2804C39.369 51.0525 42.6885 52.3563 45.8601 51.5599C49.0329 50.7633 51.3734 48.0838 51.7474 44.8202C52.1387 41.4057 50.0811 38.032 46.8231 36.746C45.6914 36.2992 44.3257 36.1175 43.1379 36.2555ZM47.1472 40.5733C47.2665 40.6342 47.3663 40.7339 47.4272 40.8532C47.519 41.0331 47.5218 41.1246 47.5218 44.0004C47.5218 46.8763 47.519 46.9677 47.4272 47.1476C47.3663 47.2669 47.2665 47.3667 47.1472 47.4275C46.9672 47.5193 46.8757 47.522 43.9987 47.522C41.1217 47.522 41.0302 47.5193 40.8502 47.4275C40.7309 47.3667 40.6311 47.2669 40.5702 47.1476C40.4784 46.9677 40.4757 46.8763 40.4757 44.0004C40.4757 41.1258 40.4784 41.033 40.5701 40.8534C40.6279 40.7403 40.7329 40.6323 40.8402 40.5756C41.0096 40.4862 41.1217 40.4829 43.9888 40.4809C46.8779 40.4788 46.967 40.4815 47.1472 40.5733ZM41.8849 44.0004V46.1134H43.9987H46.1125V44.0004V41.8874H43.9987H41.8849V44.0004Z"
                        fill="#5CFF80" />
                </g>
                <defs>
                    <filter id="filter0_d_1_161" x="5" y="5" width="78" height="78" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="7" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix"
                            values="0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0 0.501961 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_161" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_161" result="shape" />
                    </filter>
                    <filter id="filter1_d_1_161" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="16" />
                        <feColorMatrix type="matrix"
                            values="0 0 0 0 0.360784 0 0 0 0 1 0 0 0 0 0.501961 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_161" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_161" result="shape" />
                    </filter>
                </defs>
            </svg>
            <div class="bottom-card-text-part">
                <h3 class="bottom-card-text">donation coin</h3>
                <h2 class="bottom-card-amount">750,000</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExclusiveCard',
    data() {
        return {
            pluses: [
                { id: 0, text: 'ОДИН ИЗ ЧЕТЫРЕХ СЕТОВ ОДЕЖДЫ' },
                { id: 1, text: 'УНИКАЛЬНЫЙ АВТОМОБИЛЬ' },
                { id: 2, text: 'ДЕНЬГИ' },
                { id: 3, text: 'И МНОГОЕ ДРУГОЕ' }
            ]
        }
    }
}
</script>

<style lang="scss">
.exclusive-part {
    width: 775px;
    height: 442px;
    border: 1px solid #171819;
    border-radius: 27px;
    position: relative;
    padding-top: 19px;
    padding-left: 35px;
    overflow: hidden;
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        left: 0px;
        top: 0px;
    }

    &-2 {
        position: absolute;
        left: 0px;
        top: 68px;
    }

    &-3 {
        position: absolute;
        left: 0px;
        top: 396px;

    }

    &-4 {
        position: absolute;
        width: 640px;
        height: 190px;
        left: 0px;
        top: 396px;
        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(89px);
    }

    &-5 {
        width: 591.01px;
        height: 277.08px;
        z-index: 99;
        position: absolute;
        top: 177px;
        left: 215px;
        background: url(../../../../../../public/img/Shop/audi1.png);
        background-repeat: no-repeat;

    }

    &-6 {
        width: 264px;
        height: 149px;

        position: absolute;
        top: 304px;
        left: 121px;
        background: url(../../../../../../public/img/Shop/feet_0321.png);
        background-repeat: no-repeat;
    }

    &-7 {
        width: 248.95px;
        height: 199.49px;

        position: absolute;
        top: 80px;
        left: 195px;
        background: url(../../../../../../public/img/Shop/shirt-1.png);
        background-repeat: no-repeat;
        filter: blur(1px);
        transform: rotate(-15deg);
    }

    &-8 {
        width: 394px;
        height: 311px;

        position: absolute;
        top: 0px;
        left: 357px;
        background: url(../../../../../../public/img/Shop/shirt-2.png);
        background-repeat: no-repeat;
    }

}

.top-card {
    display: flex;
}

.left-card-part {
    margin-right: 30px;
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

.premium-category {
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

.limited {
    width: 153px;
    height: 35px;
    margin-top: 27px;
    background: rgba(92, 255, 128, 0.25);
    border: 2px solid #5CFF80;
    border-radius: 18px;
    display: flex;
    align-items: center;

    &-text {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;

        color: #FFFFFF;
        margin: 0 auto;
    }
}

.pluses {
    height: 41px;
    display: flex;

    &-img {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 900;
        font-size: 48px;
        line-height: 58px;
        /* identical to box height */

        text-transform: uppercase;

        color: #5CFF80;

        text-shadow: 0px 0px 14px rgba(92, 255, 128, 0.25);
        margin-right: 12px;
    }

    &-text {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-transform: uppercase;

        color: rgba(255, 255, 255, 0.85);
        margin-top: 23px;
    }
}

.bottom-card {
    margin-top: 40px;
    display: flex;

    &-coin {
        margin-left: -16px;
    }

    &-text-part {
        align-self: center;
    }

    &-text {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-transform: uppercase;

        color: rgba(255, 255, 255, 0.25);
    }

    &-amount {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height */

        text-transform: uppercase;

        color: #5CFF80;
    }
}
</style>