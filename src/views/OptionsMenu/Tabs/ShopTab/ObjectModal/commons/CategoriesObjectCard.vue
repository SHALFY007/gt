<template>
    <div class="categories-card" ref="categoryObject" @click="modalClick">
        <div class="background">
            <div class="background-1"></div>
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="27" height="40" viewBox="0 0 27 40"
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4.75523 0.668993V1.33799H13.5195H22.2837V0.668993V0H13.5195H4.75523V0.668993ZM4.18454 5.81187C3.94542 7.53662 3.77078 8.96935 3.79647 8.99569C3.8784 9.07973 5.57149 7.82696 5.6129 7.6516C5.63467 7.55962 5.78085 6.58121 5.93771 5.47738C6.20308 3.61047 6.23757 3.45727 6.43128 3.28224C6.65841 3.07695 7.00442 3.04091 7.20816 3.2013C7.5496 3.47015 7.54911 3.56464 7.19438 5.99961C6.9701 7.53871 6.81128 8.38649 6.7229 8.51611C6.64961 8.62365 5.89254 9.20785 5.04058 9.81437L3.49155 10.9172L3.10813 13.8419C1.60777 25.2879 -0.0747978 38.9002 0.00257199 38.9676C0.114999 39.0654 6.08307 40.0659 6.14104 39.9966C6.17145 39.9603 7.70931 33.9096 9.55852 26.5506C11.4077 19.1917 12.9734 13.0868 13.0377 12.984C13.2795 12.5976 13.8756 12.6987 14.0425 13.1542C14.0795 13.2553 15.6063 19.3213 17.4355 26.6343C19.2646 33.9472 20.7856 39.9598 20.8156 39.9958C20.8597 40.0485 26.9032 39.0785 26.9993 39.0034C27.0421 38.9697 25.2154 24.3814 23.902 14.2689L23.469 10.935L21.896 9.80986C21.0309 9.19104 20.2733 8.60283 20.2126 8.50264C20.1519 8.40255 19.9489 7.27304 19.7615 5.99275C19.4426 3.81426 19.4292 3.65178 19.5521 3.45936C19.8252 3.03179 20.3675 2.99157 20.6159 3.3805C20.6944 3.50335 20.8612 4.38909 21.048 5.67506C21.2154 6.82699 21.3693 7.78431 21.39 7.80254C21.6693 8.04781 23.1292 9.02831 23.1631 8.99343C23.1884 8.96759 23.0122 7.53553 22.7717 5.8112L22.3343 2.67597H13.4768H4.61932L4.18454 5.81187Z"
                    fill="white" />
            </svg>
        </div>
        <div class="text-part">
            <span class="text-category">{{category.text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoriesObjectCard',
    props: {
        category: Object
    },
    methods: {
        modalClick() {
            this.$refs.categoryObject.classList.toggle('active')
        }
    }
}

</script>

<style lang="scss" scoped>
.categories-card {
    width: 104px;
    height: 104px;
    border-radius: 27px;
    border: 1px solid #1E1E1E;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

}

.active {
    border: 1px solid #5CFF80 !important;
    ;
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        width: 190px;
        height: 190px;
        left: 74px;
        top: 100px;

        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(89px);
    }

    &-2 {
        position: absolute;
        width: 27px;
        height: 40px;
        top: 27px;
        left: 37px;
    }
}

.text-part {
    margin: 0 auto;
    margin-top: 76px;
}

.text-category {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;

    color: #FFFFFF;

}
</style>