<template>
    <div class="modal-card" :id="pictures.id+'-card'" ref="modalCard" @click="modalClick">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 549 386"
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
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 549 640"
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
            <svg class="background-3" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 549 426"
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
<!--            <div class="background-6modal" :style="{ background: 'url(' + pictures.shirt + ')' }"></div>-->
<!--            <div class=" background-7modal" :style="{ background: 'url(' + pictures.pants + ')' }"></div>-->
<!--            <div class="background-8modal" :style="{ background: 'url(' + pictures.sneacker + ')' }"></div>-->
        </div>
        <div class="top-card-part">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="premium-category">EXCLUSIVE PACK</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
        <div class="centre-card">
          <img class="center-shirt" :src="pictures.shirt">
          <img class="center-pants" :src="pictures.pants">
          <img class="center-sneacker" :src="pictures.sneacker">
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
    width: 30.5rem;
    height: 42.77rem;
    border-radius: 1.5rem;
    border: 0.055rem solid #171819;
    padding-top: 1.055rem;
    padding-left: 1.77rem;
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
      width: 30.5rem;
      height: 21.44rem;
        top: -1.055rem;
    }

    &-2 {
        position: absolute;
      width: 30.5rem;
      height: 35.55rem;
        top: 2.77rem;
    }

    &-3 {
        position: absolute;
      width: 30.5rem;
      height: 23.66rem;
    }

    &-4 {
        position: absolute;
        width: 21.44rem;
        height: 11.44rem;
        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(4.944rem);
        top: 36.72rem;
        left: 4.11rem;
    }

    &-5modal {
        width: 24.55rem;
        height: 11.77rem;
        left: -1.77rem;
        top: 22.27rem;
        position: absolute;
        background: url("/img/Shop/audi2.png");
        background-repeat: no-repeat;
      background-size: cover;
        z-index: 3;
    }

    &-6modal {
        position: absolute;
        z-index: 2;
        width: 20.33rem;
        height: 20.1666rem;
        left: 9.3422rem;
        top: 2.12rem;
        background-repeat: no-repeat;
    }

    &-7modal {
        position: absolute;
        width: 29.11rem;
        height: 20.55rem;
        left: 6.7222rem;
        top: 14.6233rem;
        background-repeat: no-repeat;
    }

    &-8modal {
        position: absolute;
        width: 16.88rem;
        height: 9.111rem;
        left: 10.55rem;
        z-index: 4;
        top: 29.944rem;
        background-repeat: no-repeat;
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
    top: 2.22rem;
    left: 0px;
}

.category-card {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 0.66rem;
    line-height: 0.777rem;
    text-transform: uppercase;

    color: rgba(255, 255, 255, 0.55);


}

.premium-category {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.666rem;
    line-height: 3.22rem;
    /* identical to box height */

    text-transform: uppercase;

    color: #FFFFFF;
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
}
.center {
  &-shirt {
    position: absolute;
    width: 21.33rem;
    height: 22rem;
    z-index: 2;
    left: 9.3422rem;
    top: 2.12rem;
  }
  &-pants {
    position: absolute;
    width: 21.11rem;
    height: 21.388rem;
    left: 6.722rem;
    top: 16.6233rem;
  }
  &-sneacker {
    position: absolute;
    left: 10.9444rem;
    width: 15.88rem;
    height: 8.66rem;
    z-index: 4;
    top: 30.611rem;
  }
}
.pluses {
    height: 2.277rem;
    display: flex;

    &-img {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 900;
        font-size: 2.66rem;
        line-height: 3.22rem;
        /* identical to box height */

        text-transform: uppercase;

        color: #5CFF80;

        text-shadow: 0px 0px 0.77rem rgba(92, 255, 128, 0.25);
        margin-right: 0.666rem;
    }

    &-text {
        font-family: 'Akrobat';
        font-style: normal;
        font-weight: 700;
        font-size: 0.88rem;
        line-height: 1.0555rem;
        text-transform: uppercase;

        color: rgba(255, 255, 255, 0.85);
        margin-top: 1.277rem;
    }
}

.bottom-card-modal {
    display: flex;
  margin-left: 1.111rem;
    margin-top: 16.22rem;
}

.exclusive-button-buy {
    z-index: 999;
    width: 12.18388rem;
    height: 2.611rem;
    left: 2.88rem;
    top: 40.1666rem;
    margin-right: 0.427222rem;
    background: linear-gradient(180deg, rgba(92, 255, 128, 0.25) 0%, rgba(17, 90, 33, 0.25) 100%);
    border: 0.055rem solid #5CFF80;
  // transition: opacity 0.4s ease;
    &:hover {
    opacity: 0.6;
    }
}

.exclusive-button-try {
  z-index: 999;
  width: 12.18388rem;
  height: 2.611rem;
    left: 15.5rem;
    top: 40.166rem;
    //transition: opacity 0.4s ease;
    background: linear-gradient(180deg, rgba(255, 229, 92, 0.25) 0%, rgba(90, 70, 17, 0.25) 100%);
    border: 0.055rem solid #FFE55C;

  &:hover {
    opacity: 0.6;
  }

}

.exclusive-button-text {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 600;
    font-size: 0.77rem;
    line-height: 0.944rem;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;

}
</style>