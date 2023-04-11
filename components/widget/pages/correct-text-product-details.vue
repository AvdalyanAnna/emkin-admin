<template lang="pug">
  form#correct-text__section-form.correct-text__section-list(v-if="loading" :key="key")
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden show
            .correct-text__label.correct-text__label_small  show
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Number
            form-input.correct-text__input(
              v-model="content.show.number"
              @input="$v.content.show.number.$touch()"
              :error="$v.content.show.number.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 More
            form-input.correct-text__input(
              v-model="content.show.more"
              @input="$v.content.show.more.$touch()"
              :error="$v.content.show.more.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Message
            form-input.correct-text__input(
              v-model="content.message"
              @input="$v.content.message.$touch()"
              :error="$v.content.message.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Send Message
            form-input.correct-text__input(
              v-model="content.sendMessage"
              @input="$v.content.sendMessage.$touch()"
              :error="$v.content.sendMessage.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Registered
            form-input.correct-text__input(
              v-model="content.registered"
              @input="$v.content.registered.$touch()"
              :error="$v.content.registered.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 ID
            form-input.correct-text__input(
              v-model="content.id"
              @input="$v.content.id.$touch()"
              :error="$v.content.id.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 description
            form-input.correct-text__input(
              v-model="content.description"
              @input="$v.content.description.$touch()"
              :error="$v.content.description.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 openModalBtn
            form-input.correct-text__input(
              v-model="content.openModalBtn"
              @input="$v.content.openModalBtn.$touch()"
              :error="$v.content.openModalBtn.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 onMap
            form-input.correct-text__input(
              v-model="content.onMap"
              @input="$v.content.onMap.$touch()"
              :error="$v.content.onMap.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 hideMap
            form-input.correct-text__input(
              v-model="content.hideMap"
              @input="$v.content.hideMap.$touch()"
              :error="$v.content.hideMap.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 more
            form-input.correct-text__input(
              v-model="content.more"
              @input="$v.content.more.$touch()"
              :error="$v.content.more.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 recommend
            form-input.correct-text__input(
              v-model="content.recommend"
              @input="$v.content.recommend.$touch()"
              :error="$v.content.recommend.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Show More Product
            form-input.correct-text__input(
              v-model="content.showMoreProduct"
              @input="$v.content.showMoreProduct.$touch()"
              :error="$v.content.showMoreProduct.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Close modal
            form-input.correct-text__input(
              v-model="content.close"
              @input="$v.content.close.$touch()"
              :error="$v.content.close.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Description show
            form-input.correct-text__input(
              v-model="content.moreDesc"
              @input="$v.content.moreDesc.$touch()"
              :error="$v.content.moreDesc.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Description hide
            form-input.correct-text__input(
              v-model="content.hideDesc"
              @input="$v.content.hideDesc.$touch()"
              :error="$v.content.hideDesc.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Km
            form-input.correct-text__input(
              v-model="content.km"
              @input="$v.content.km.$touch()"
              :error="$v.content.km.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Available cost
            form-input.correct-text__input(
              v-model="content.available_cost"
              @input="$v.content.available_cost.$touch()"
              :error="$v.content.available_cost.$error"
            )
    correct-text-save(@save="save()")

</template>

<script>
import constructorPage from "@/mixins/constructorPage";
import productDetails from "@/mixins/pages/product-details";
export default {
  mixins:[constructorPage,productDetails],
}
</script>

<style scoped>
.commercial__field-rows {
  align-items: flex-end;
}
</style>
