<template>
    <div class="modal">

        <MainObjectCard class="object-modal-no-border"/>
        <div class="categories-object">
            <div class="category-object" v-for="item in categoryItems" :key="item.id" @click.native="addBorder">
                <CategoriesObjectCard :category="item" @modalClickCategory='addBorderCategory' class="object-modal-item"/>
            </div>

        </div>
        <div class="object-items">
            <div class="object-item" v-for="item in objectItems" :key="item.id">
                <ItemObjectCard :objectCard="item" @modalClick='addBorderItem' class="object-modal-item"/>
            </div>
        </div>


    </div>
</template>

<script>
import MainObjectCard from './commons/MainObjectCard.vue'
import CategoriesObjectCard from './commons/CategoriesObjectCard.vue';
import ItemObjectCard from './commons/ItemObjectCard.vue';
export default {
    name: 'ObjectModal',
    components: {
        MainObjectCard,
        CategoriesObjectCard,
        ItemObjectCard
    },
    data() {
        return {
            activeELItem: null,
            activeElCategory: null,
            categoryItems: [
                { id: 0, text: 'одежда' },
                { id: 1, text: 'категория' },
                { id: 2, text: 'категория' },
                { id: 3, text: 'категория' },
                { id: 4, text: 'категория' },
                { id: 5, text: 'категория' },
                { id: 6, text: 'категория' },
            ],
            objectItems: [
                {
                    id: 0, text: 'GUCCI СВИТ- ШОТ'
                },
                { id: 1, text: 'GUCCI СВИТ- ШОТ' },
                { id: 2, text: 'GUCCI СВИТ- ШОТ' },
                { id: 3, text: 'GUCCI СВИТ- ШОТ' },
                { id: 4, text: 'GUCCI СВИТ- ШОТ' },
                { id: 5, text: 'GUCCI СВИТ- ШОТ' },
            ]
        }
    },
    methods: {
        addBorderItem(id) {
            if (this.activeELItem == null) {
                console.log('asd')
                document.getElementById(id).classList.add('active')
                this.activeELItem = id
            } else {
                document.getElementById(this.activeELItem).classList.remove('active')
                this.activeELItem = id
                document.getElementById(this.activeELItem).classList.add('active')
            }
        },
        addBorderCategory(id) {
            if (this.activeElCategory == null) {
                console.log('asd')
                document.getElementById(id).classList.add('active')
                this.activeElCategory = id
            } else {
                document.getElementById(this.activeElCategory).classList.remove('active')
                this.activeElCategory = id
                document.getElementById(this.activeElCategory).classList.add('active')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: absolute;
    display: flex;
    top: -0.1rem;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: url("/img/optionsMenu/bg.png"), rgba(0, 0, 0, 0.96);
    background-blend-mode: overlay;
}

.active {
    border: 1px solid #5CFF80 !important;
}

.category-object {
    margin-bottom: 1.255rem;

}

.categories-object {
    display: flex;
    flex-direction: column;
    margin-right: 2.166rem;

  @media (max-width: 1728px) {
    margin-right: 1.166rem;
  }
}
.object-modal-no-border {
  transition: background-color 0.4s ease-out;

  &:hover {
    background-color: #1E1E1E;

  }
}
.object-items {
    display: flex;
    max-width: 60.77rem;
    max-height: 46.33rem;
    flex-wrap: wrap;
    justify-content: space-between;

  @media (max-width: 1728px) {
    max-width: 57.77rem;
  }
}
.object-modal-item {
  transition : border .4s ease-out;

  &:hover {
    //transform: scale(1.04);
    border: 1px solid #5CFF80 !important;


  }
}
</style>