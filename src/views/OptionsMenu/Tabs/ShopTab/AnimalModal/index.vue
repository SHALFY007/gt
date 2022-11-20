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
        <AnimalCard :animalCard="item" class="animal-card-modal" @animalModalClick="animalModalClick"/>
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
      activeEl: null,
      animalsList: [{id:1, name:'кирюха', color: '#FC9B41', opacity: '0.25', image: '/img/Shop/dog-modal.png', left: '4.22rem', width: '14.833rem', height: '13.66rem'},
                    {id:2, name:'анжелика', color: '#A582A5', opacity: '0.55', image: '/img/Shop/cat-modal.png', left: '5.33rem', width: '12.22rem', height: '15.722rem'}],
      animalsDescription: [{id:1, name:'кирилл', buyName: 'кирилла'},
        {id:2, name:'анжелика', buyName: 'анжелику'}]
    }
  },
  methods: {
    animalModalClick(id) {
        if (this.activeEl == null) {
          console.log('asd')
          document.getElementById(id).classList.add('active')
          this.activeEl = id
        } else {
          document.getElementById(this.activeEl).classList.remove('active')
          this.activeEl = id
          document.getElementById(this.activeEl).classList.add('active')
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
  border: 0.055rem solid #5CFF80 !important;
}
.object-modal-item {
  transition:  background-color .1s ease-out;
  margin-right: 4.11rem;

  @media (max-width: 1728px) {
    margin-right: 1.11rem;
  }

  &:hover {
    background-color: #1E1E1E;

    //transform: scale(1.04);
    //border: 1px solid #5CFF80 !important;


  }
}
.animal-stick {
  position: relative;
  height: 45rem;
  width: 0.11rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%);
  margin-right: 0.88rem;
  &-active {
    position: absolute;
    background: #5CFF80;
    width: 0.11rem;
    height: 7.3911rem;
  }
}
.animals-cente-cards {
  margin-right: 3.22rem;
}
.animal-card-modal {
  transition: border .4s ease-out;
  &:hover {
    border: 0.055rem solid #5CFF80 !important;
  }
}
.animal-right-card {
  margin-bottom: 1.388rem;
}
</style>