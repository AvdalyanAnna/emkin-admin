<template lang="pug">
  .correct-text__box
    .correct-text__row.flex.flex_vertical
      .correct-text__column.correct-text__column_left
        .correct-text__label.h3 Part of web site
      .correct-text__column.correct-text__column_right
        .correct-text__column-buttons.flex.mobile-hidden
          button-primary.correct-text__column-btn(
            v-for="item in TYPES" :key="item.id" border medium
            :active="TYPE === item.code"
            @click.native.prevent="changeType(item.code)"
          ) {{item.name }}
        form-select.correct-text__select.mobile-visible(
          default
          :items="['Front design','Back design','Menu','Contact','Popup']"
          value="Front design"
        )
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      TYPES: 'correctText/TYPES',
      TYPE: 'correctText/TYPE',
    }),
  },
  mounted() {
    const query = this.$route.query.type
    if (query) this.CHANGE_TYPE(query);
  },
  methods: {
    ...mapActions({
      CHANGE_TYPE: 'correctText/SET_TYPE'
    }),
    changeType(code) {
      this.CHANGE_TYPE(code)
      this.$changeRouteQuery({type: code})
    }
  }
}
</script>