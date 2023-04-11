<template lang="pug">
  .correct-text__box
    .correct-text__row.flex.flex_vertical
      .correct-text__column.correct-text__column_left
        .correct-text__label.h3 Pages
      .correct-text__column.correct-text__column_right
        .correct-text__column-buttons.flex.mobile-hidden
          button-primary.correct-text__column-btn(
            v-for="(item,index) in PAGES" :key="index" border medium
            :active="PAGE === item.code"
            @click.native.prevent="changePage(item.code)"
            ) {{item.name}}
        form-select.correct-text__select.mobile-visible(
          default
          :items="['Home page','Login','Register','Catalog','Contacts','Support','Other','Menu']"
          value="Contacts"
        )
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      PAGES: 'correctText/PAGES',
      PAGE: 'correctText/PAGE'
    }),
  },
  mounted() {
    const query = this.$route.query.page
    if (query) this.CHANGE_PAGES(query);
  },
  methods: {
    ...mapActions({
      CHANGE_PAGES: 'correctText/SET_PAGES'
    }),
    changePage(code) {
      this.CHANGE_PAGES(code)
      this.$changeRouteQuery({page: code})
    }
  }
}
</script>