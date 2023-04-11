<template lang="pug">
  form#correct-text__section-form.correct-text__section-list(v-if="loading" :key="key")
    h3.correct-text__label.h3.tablet-hidden Modal
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Global
            .correct-text__label.correct-text__label_small  Global
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Edit
            form-input.correct-text__input(
              v-model="content.edit"
              @input="$v.content.edit.$touch()"
              :error="$v.content.edit.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Close
            form-input.correct-text__input(
              v-model="content.close"
              @input="$v.content.close.$touch()"
              :error="$v.content.close.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Save
            form-input.correct-text__input(
              v-model="content.save"
              @input="$v.content.save.$touch()"
              :error="$v.content.save.$error"
            )
    correct-text-save(@save="save()")

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {minLength, required} from "vuelidate/lib/validators";
import constructorPage from "@/mixins/constructorPage";

export default {
  data() {
    return {
      loading: false,
      id: null,
      content: {
        edit: 'Edit',
        close: 'Close',
        save: 'Save',
      },
    }
  },
  validations: {
    content: {
      edit: {required, minLength: minLength(2)},
      close: {required, minLength: minLength(2)},
      save: {required, minLength: minLength(2)}
    }
  },
  mixins:[constructorPage],
}
</script>

<style scoped>
.commercial__field-rows {
  align-items: flex-end;
}
</style>
