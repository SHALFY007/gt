<template>
    <div class="shop-page">
        <div class="shop-page-left">
            <PremiumCard class="card-hover"/>
        </div>
        <div class="shop-page-centre">
            <ExclusiveCard @click.native="openExclusive" class="card-hover"/>
            <div class="shop-page-centre-bottom">
                <AnimalsCard @click.native="openAnimal" class="card-hover"/>
                <ObjectCard @click.native="openObject" class="card-hover"/>
            </div>
        </div>
        <div class="shop-page-right">
            <CurrencyGameCard class="card-hover"/>>
        </div>
        <transition-group tag="div" name="modal">
            <ExclusiveModal :key="1" v-if="isExclusive" @close="close" />
            <ObjectModal :key="2" v-if="isObject" />
            <AnimalModal :key="3" v-if="isAnimal"/>
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
import AnimalModal from "@/views/OptionsMenu/Tabs/ShopTab/AnimalModal";

export default {
    name: "ShopTab",
    data() {
        return {
            isExclusive: false,
            isObject: false,
            isAnimal: false
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
      openAnimal() {
        this.isAnimal = true
      },
        close() {
            this.isExclusive = false
        }
    },
    mounted() {
        console.log("Loaded");
    },
    components: {AnimalModal, PremiumCard, ExclusiveCard, AnimalsCard, ObjectCard, CurrencyGameCard, ExclusiveModal, ObjectModal }
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


.card-hover {
  //transition: background-color 0.1s;
  &:hover {
    //transform: scale(1.04);
    background-color: #1E1E1E;

  }
}
</style>