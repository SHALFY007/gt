<template>
  <div class="modal">
      <MainAnimalCard class="object-modal-item"/>
    <div class="centre-animal-part">
      <div class="animal-stick">
        <div class="animal-stick-active"></div>
      </div>
    </div>
    <div class="animals-cente-cards">
      <div class="animal-centre-card" v-for="item in animalsList" :key="item.id">
        <AnimalCard :animalCard="item" class="animal-card-modal"/>
      </div>
    </div>
    <div class="animals-right-cards">
      <div class="animal-right-card" v-for="item in animalsDescription" :key="item.id">
        <AnimalDescription :animalsDescription="item"/>
      </div>

    </div>


  </div>
</template>

<script>
import MainAnimalCard from "@/views/OptionsMenu/Tabs/ShopTab/AnimalModal/commons/MainAnimalCard";
import AnimalCard from "@/views/OptionsMenu/Tabs/ShopTab/AnimalModal/commons/AnimalCard";
import AnimalDescription from "@/views/OptionsMenu/Tabs/ShopTab/AnimalModal/commons/AnimalDescription";
export default {
  name: "AnimalModal",
  components: {AnimalDescription, AnimalCard, MainAnimalCard},
  data() {
    return {
      animalsList: [{id:1, name:'кирюха', color: '#FC9B41', opacity: '0.25', image: '/img/Shop/dog-modal.png', width: '267px', left: '44px'},
                    {id:2, name:'анжелика', color: '#A582A5', opacity: '0.55', image: '/img/Shop/cat-modal.png', width: '220px', left: '68px'}],
      animalsDescription: [{id:1, name:'кирилл', buyName: 'кирилла'},
        {id:2, name:'анжелика', buyName: 'анжелику'}]
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

.object-modal-item {
  //transition: transform 0.4s ease;
  margin-right: 74px;

  &:hover {
    background-color: #1E1E1E;

    //transform: scale(1.04);
    //border: 1px solid #5CFF80 !important;


  }
}
.animal-stick {
  position: relative;
  height: 810px;
  width: 2px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
  margin-right: 16px;
  &-active {
    position: absolute;
    background: #5CFF80;
    width: 2px;
    height: 133.04px;
  }
}
.animals-cente-cards {
  margin-right: 58px;
}
.animal-card-modal {
  &:hover {
    border: 1px solid #5CFF80 !important;
  }
}
.animal-right-card {
  margin-bottom: 25px;
}
</style>