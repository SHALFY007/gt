<template>
  <div class="information-tab">
    <div class="category">раздел</div>
    <div class="title">{{ loc("mm_info_tittle") }}</div>
    <div class="information-tab__content">
      <div class="information-tab__side">
        <div class="navigation">
          <navigation-item
              v-for="(item, index) in navItems"
              :key="index"
              :item="item"
          />
        </div>
      </div>
      <div class="information-tab__main">
        <component :is="currentSection"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import NavigationItem from './common/NavigationItem'
import WorksSection from './sections/WorksSection'

export default {
  name: 'InformationTab',

  components: {
    NavigationItem,
    WorksSection
  },
  computed: {
    ...mapGetters('localization', ['loc'])
  },
  data: function () {
    return {
      currentSection: 'WorksSection',
      navItems: [
        {title: 'mm_info_title', subtitle: 'mm_info_sub'},
        {title: 'mm_info_title', subtitle: 'mm_info_sub'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.information-tab {
  padding: 2.5rem 9.5rem 0;

  .subtitle:before {
    left: -0.66rem;
  }

  &__content {
    margin-top: 1rem;
    display: flex;
  }

  &__side {
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0 1.27rem 0 0;

    .navigation {
      display: flex;
      flex-direction: column;
    }
  }

  &__main {
    width: 47rem;
  }
}
</style>
