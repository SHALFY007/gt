<template>
    <div class="object-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="340" height="386" viewBox="0 0 340 386"
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
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="340" height="349" viewBox="0 0 340 349"
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
            <div class="background-4"></div>
            <div class="background-5g"></div>
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="object-category" style="margin-bottom:-15px">магазин</h1>
            <h1 class="object-category">предметов</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "ObjectCard"
}
</script>

<style lang="scss" scoped>
.object-card {
    width: 340px;
    height: 412px;
    border: 1px solid #171819;
    border-radius: 27px;
    position: relative;
    overflow: hidden;
    transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);

    }
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        top: 0px;
        left: 0px;
    }

    &-2 {
        position: absolute;
        top: 57px;
        left: 0px;
    }

    &-3 {
        position: absolute;
        top: 182px;
        left: 61px;
        width: 190px;
        height: 190px;

        background: #FFFFFF;
        opacity: 0.25;
        filter: blur(89px);
    }

    &-4 {
        background: url(../../../../../../public/img/Shop/bag.png);
        filter: blur(0px);
        opacity: 1;
        background-repeat: no-repeat;
        width: 249px;
        height: 229px;
        position: absolute;
        top: 296px;
        left: 13px;
    }

    &-5g {
        background: url(../../../../../../public/img/Shop/gun.png);
        background-repeat: no-repeat;
        width: 313px;
        height: 153px;
        /*transform: matrix(-1, 0, 0, 1, 0, 0);*/
        position: absolute;
        top: 196px;
        left: 51px;
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

.object-category {
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
</style>