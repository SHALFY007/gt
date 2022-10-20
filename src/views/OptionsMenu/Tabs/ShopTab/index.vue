<template>
    <div class="shop-page">
        <div class="shop-page-left">
            <PremiumCard />
        </div>
        <div class="shop-page-centre">
            <ExclusiveCard @click.native="openExclusive" />
            <div class="shop-page-centre-bottom">
                <AnimalsCard />
                <ObjectCard @click.native="openObject" />
            </div>
        </div>
        <div class="shop-page-right">
            <CurrencyGameCard />>
        </div>
        <transition-group tag="div" name="modal">
            <ExclusiveModal :key="1" v-if="isExclusive" @close="close" />
            <ObjectModal :key="2" v-if="isObject" />
            <!--<transport-modal :key="1" v-if="isTransportModal" @close="isTransportModal = false" />
            <business-modal :key="2" v-if="isBusinessModal" @close="isBusinessModal = false" />-->
        </transition-group>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import PremiumCard from './common/PremiumCard.vue';
import ExclusiveCard from './common/ExclusiveCard.vue';
import AnimalsCard from './common/AnimalsCard.vue';
import ObjectCard from './common/ObjectCard.vue';
import CurrencyGameCard from './common/CurrencyGameCard.vue';
import ExclusiveModal from './ExclusiveModal/index.vue';
import ObjectModal from './ObjectModal/index.vue'

export default {
    name: "ShopTab",
    data() {
        return {
            isExclusive: false,
            isObject: false
        }
    },
    computed: {
        ...mapState("newDonateShop", ["currentPage"]),
    },
    methods: {
        openExclusive() {
            this.isExclusive = true
        },
        openObject() {
            this.isObject = true
        },
        close() {
            this.isExclusive = false
        }
    },
    mounted() {
        console.log("Loaded");
    },
    components: { PremiumCard, ExclusiveCard, AnimalsCard, ObjectCard, CurrencyGameCard, ExclusiveModal, ObjectModal }
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