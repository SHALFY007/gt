<template>
    <div class="modal-card" :id="pictures.id+'-card'" ref="modalCard" @click="modalClick">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="549" height="386" viewBox="0 0 549 386"
                fill="none">
                <path d="M453.703 -260L-192.297 386H101.604L453.703 33.9009L805.802 386H1099.7L453.703 -260Z"
                    fill="url(#paint0_linear_1_1116)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_1116" x1="453.703" y1="-260" x2="453.703" y2="386"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="549" height="640" viewBox="0 0 549 640"
                fill="none">
                <path d="M453.703 0L-192.297 640H101.604L453.703 291.171L805.802 640H1099.7L453.703 0Z"
                    fill="url(#paint0_linear_1_1113)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_1113" x1="453.703" y1="0" x2="453.703" y2="640"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <svg class="background-3" xmlns="http://www.w3.org/2000/svg" width="549" height="426" viewBox="0 0 549 426"
                fill="none">
                <path d="M453.703 0L-192.297 646H101.604L453.703 293.901L805.802 646H1099.7L453.703 0Z"
                    fill="url(#paint0_linear_1_1112)" fill-opacity="0.02" />
                <defs>
                    <linearGradient id="paint0_linear_1_1112" x1="453.703" y1="0" x2="453.703" y2="646"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div class="background-4"></div>
            <div class="background-5modal"></div>
            <div class="background-6modal" :style="{ background: 'url(' + pictures.shirt + ')' }"></div>
            <div class=" background-7modal" :style="{ background: 'url(' + pictures.pants + ')' }"></div>
            <div class="background-8modal" :style="{ background: 'url(' + pictures.sneacker + ')' }"></div>
        </div>
        <div class="top-card-part">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="premium-category">EXCLUSIVE PACK</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
        <div class="centre-card">
            <div class="pluses" v-for="item in pluses" :key="item.id">
                <h3 class="pluses-img">+</h3>
                <p class="pluses-text">{{item.text}}</p>
            </div>
        </div>
        <div class="bottom-card-modal">
            <button class="exclusive-button-buy">
                <span class="exclusive-button-text">Приобрести</span>

            </button>
            <button class="exclusive-button-try">
                <span class="exclusive-button-text">Примерить</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExclusiveCardModal',
    data() {
        return {
            pluses: [
                { id: 1, text: 'ОДИН ИЗ ЧЕТЫРЕХ СЕТОВ ОДЕЖДЫ' },
                { id: 2, text: 'УНИКАЛЬНЫЙ АВТОМОБИЛЬ' },
                { id: 3, text: 'ДЕНЬГИ' },
                { id: 4, text: 'И МНОГОЕ ДРУГОЕ' },
                { id: 5, text: 'УНИКАЛЬНЫЙ АВТОМОБИЛЬ' },
                { id: 6, text: 'ДЕНЬГИ' },
                { id: 7, text: 'И МНОГОЕ ДРУГОЕ' },]
        }
    },
    props: {
        pictures: Object
    },
    computed: {
        cssProps() {
            return {
                '--shirt': this.pictures.shirt
            }
        }
    },
    methods: {
        modalClick() {
            this.$emit('modalClickCard', `${this.pictures.id}-card`)
            /*console.log(this.$refs.modalCard)
            this.$refs.modalCard.classList.toggle('active')*/

        }
    },
    mounted() {
        console.log(this.pictures)
    }
}
</script>

<style lang="scss" scoped>
.modal-card {
    width: 549px;
    height: 806px;
    border-radius: 27px;
    border: 1px solid #171819;
    padding-top: 19px;
    padding-left: 32px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    /*transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);
        border: 1px solid #5CFF80;

    }*/
}

.active {
    /*border: 1px solid #5CFF80;
    ;*/
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        top: -19px;
    }

    &-2 {
        position: absolute;
        top: 50px;
    }

    &-3 {
        position: absolute;
    }

    &-4 {
        position: absolute;
        width: 386px;
        height: 206px;
        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(89px);
        top: 661px;
        left: 74px;
    }

    &-5modal {
        width: 532px;
        height: 248px;
        left: -32px;
        top: 401px;
        position: absolute;
        background: url("/img/Shop/audi2.png");
        background-repeat: no-repeat;
        z-index: 3;
    }

    &-6modal {
        position: absolute;
        z-index: 2;
        width: 366px;
        height: 363px;
        left: 168.16px;
        top: 38.16px;
        background: url("/img/Shop/shirt-modal.png");
        background: url("/img/Shop/shirt-modal-2.png");
        background: url("/img/Shop/shirt-modal-3.png");
        background-repeat: no-repeat;
    }

    &-7modal {
        position: absolute;
        width: 524px;
        height: 370px;
        left: 121px;
        top: 263.22px;
        background: url("/img/Shop/pants-modal.png");
        background: url("/img/Shop/pants-modal-2.png");
        background: url("/img/Shop/pants-modal-3.png");
        background-repeat: no-repeat;
    }

    &-8modal {
        position: absolute;
        width: 304px;
        height: 164px;
        left: 190px;
        z-index: 4;
        top: 539px;
        background: url("/img/Shop/sneackers-modal.png");
        background: url("/img/Shop/sneackers-modal-2.png");
        background: url("/img/Shop/sneackers-modal-3.png");
        background-repeat: no-repeat;
    }
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

.bottom-card-modal {
    display: flex;
    margin-top: 310px;
}

.exclusive-button-buy {
    width: 219.31px;
    height: 47px;
    left: 52px;
    top: 723px;
    margin-right: 7.69px;
    background: linear-gradient(180deg, rgba(92, 255, 128, 0.25) 0%, rgba(17, 90, 33, 0.25) 100%);
    border: 1px solid #5CFF80;
}

.exclusive-button-try {
    width: 219.31px;
    height: 47px;
    left: 279px;
    top: 723px;

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