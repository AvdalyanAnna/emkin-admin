+
<template lang="pug">
  div
    .correct-text__box.pt-0
      .correct-text__row.flex.flex_vertical
        .correct-text__column.correct-text__column_left
          .correct-text__label.h3 Part of web site
        .correct-text__column.correct-text__column_right
          .correct-text__column-buttons.flex.mobile-hidden
            button-primary.correct-text__column-btn(
              v-for="item in types" :key="item.id" border medium
            :active="type === item.code"
              @click.native.prevent="changeType(item.code)"
            ) {{item.name }}
          form-select.correct-text__select.mobile-visible(
            default
            :items="['Front design','Back design','Menu','Contact','Popup']"
            value="Front design"
          )
    .correct-text__body
      component(:is="showComponent" v-if="showComponent")

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {minLength, required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      types: [
        {
          "id": 1,
          "name": "Reset",
          "code": "reset"
        },
        {
          "id": 2,
          "name": "Confirm",
          "code": "confirm"
        },
        {
          "id": 3,
          "name": "Recovery",
          "code": "recovery"
        },
        {
          "id": 4,
          "name": "Register done",
          "code": "register-done"
        },
        {
          "id": 5,
          "name": "Password error",
          "code": "password-error"
        },
        // {
        //   "id": 3,
        //   "name": "Mobile Menu",
        //   "code": "mobile"
        // },
      ],
      type: 'reset',
    }
  },
  computed: {
    ...mapGetters({
      CORRECT: 'correctText/CORRECT',
      PAGE: 'correctText/PAGE'
    }),
    showComponent() {
      return `correct-text-other-${this.type}`
    }
  },
  methods: {
    changeType(item) {
      this.type = item
    }
  }
}
</script>

<style scoped>
.commercial__field-rows {
  align-items: flex-end;
}
</style>
