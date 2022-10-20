<template>
    <div class="modal">
        <div class="top-part-exclusive">
            <div class="exclusive-list" v-for="item in pictures" :key="item.id">
                <ExclusiveCardModal :pictures="item" :ref="item.title" @click.native="addBorder" />
            </div>
        </div>

        <div class="range">
            <div class="range-full"></div>
        </div>
    </div>
</template>

<script>
import ExclusiveCardModal from './commons/ExclusiveCardModal.vue';


export default {
    name: "ExclusiveModal",
    data() {
        return {
            pictures: [
                { id: 1, shirt: '/img/shirt-modal.png', sneacker: '/img/sneackers-modal.png', pants: '/img/pants-modal.png', title: 'first' },
                { id: 2, shirt: '/img/shirt-modal-2.png', sneacker: '/img/sneackers-modal-2.png', pants: '/img/pants-modal-2.png', title: 'second' },
                { id: 3, shirt: '/img/shirt-modal-3.png', sneacker: '/img/sneackers-modal-3.png', pants: '/img/pants-modal-3.png', title: 'third' },]
        }

    },
    components: { ExclusiveCardModal },
    mounted() {
        console.log('Com')
        console.log(this.$refs.second[0].$el)
        this.$refs.second[0].$el.classList.add('active')
    },
    methods: {
        addBorder() {
        }
    }

}
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    /*display: flex;*/
    top: -0.1rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: url("/img/optionsMenu/bg.png"), rgba(0, 0, 0, 0.96);
    background-blend-mode: overlay;
}

.active {
    border: 1px solid #5CFF80 !important
}

.top-part-exclusive {
    display: flex;
    margin-bottom: 25px;
    justify-content: space-between;
}

.exclusive-list {
    display: flex;
}

.range {
    width: 100%;
    height: 2px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);

    &-full {
        position: absolute;
        width: 283px;
        height: 2px;


        background: #5CFF80;
    }
}
</style>