<template>
    <div class="animals-card">
        <div class="background">
            <svg class="background-1" xmlns="http://www.w3.org/2000/svg" width="408" height="386" viewBox="0 0 408 386"
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
            <svg class="background-2" xmlns="http://www.w3.org/2000/svg" width="408" height="349" viewBox="0 0 408 349"
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
            <div class="background-4"></div>
            <div class="background-5c"></div>
        </div>
        <div class="top-card">
            <div class="card-stick"></div>
            <h3 class="category-card">категория</h3>
            <h1 class="animal-category">животные</h1>
            <h3 class="subtitle-card">В этом разделе у вас есть возможность
                покупать одежду различного класса</h3>
        </div>

    </div>
</template>

<script>
export default {
    name: "AnimalsCard"
}
</script>

<style lang="scss" scoped>
.animals-card {
    width: 408px;
    height: 412px;
    border: 1px solid #171819;
    border-radius: 27px;
    position: relative;
    overflow: hidden;
    margin-right: 27px;
    /*transition: transform 0.4s ease;

    &:hover {
        transform: scale(1.04);

    }*/
}

.background {
    position: absolute;

    &-1 {
        position: absolute;
        top: 0px;
        left: -3px;
    }

    &-2 {
        position: absolute;
        top: 59px;
        left: -3px;
    }

    &-3 {
        position: absolute;
        width: 502px;
        height: 338px;
        background: #E09968;
        top: 273px;
        opacity: 0.25;
        filter: blur(89px);
    }

    &-4 {
        background: url("/img/Shop/dog.png");
        filter: blur(0px);
        opacity: 1;
        width: 249px;
        height: 229px;
        position: absolute;
        top: 191px;
        left: 0px;
    }

    &-5c {
        background: url("/img/Shop/cat.png");
        background-repeat: no-repeat;
        width: 249px;
        height: 229px;
        position: absolute;
        top: 175px;
        left: 201px;
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

.animal-category {
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