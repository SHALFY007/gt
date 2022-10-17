<template>
    <div class="shop-page">
        <div class="shop-page-left">
            <PremiumCard />
        </div>
        <div class="shop-page-centre">
            <ExclusiveCard />
            <div class="shop-page-centre-bottom">
                <AnimalsCard />
                <ObjectCard />
            </div>
        </div>
        <div class="shop-page-right">
            <CurrencyGameCard />>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex'
import PremiumCard from './common/PremiumCard.vue';
import ExclusiveCard from './common/ExclusiveCard.vue';
import AnimalsCard from './common/AnimalsCard.vue';
import ObjectCard from './common/ObjectCard.vue';
import CurrencyGameCard from './common/CurrencyGameCard.vue';

export default {
    name: "ShopTab",
    computed: {
        ...mapState("newDonateShop", ["currentPage"]),
    },
    mounted() {
        console.log("Loaded");
    },
    components: { PremiumCard, ExclusiveCard, AnimalsCard, ObjectCard, CurrencyGameCard }
}
</script>

<style lang="scss" scoped>
.shop-page {
    display: flex;
    margin-top: 2.5rem;
}

.shop-page-left {
    margin-right: 27px;
}

.shop-page-centre {
    margin-right: 27px;

    &-bottom {
        display: flex;
        margin-top: 13px;
    }
}
</style>