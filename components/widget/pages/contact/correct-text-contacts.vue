<template lang="pug">
  form#correct-text__section-form.correct-text__section-list(v-if="loading" :key="key")
    modal-gallery(@save="changeImage" :keyImage="keyImage")
    .correct-text__section(v-if="LANG === 'en' || LANG ===  ''")
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Fill in the fields
            .correct-text__label.correct-text__label_small Image
        .correct-text__column.correct-text__column_right
          part-replace-photo.correct-text__replace-photo(
            :key="imageKey"
          :id="background_images.background ? background_images.background.id : ''"
            keyImage="background"
            @key="(key) => this.keyImage = key"
            :img="background_images.background ? background_images.background.original_full_url : ''" imgDefault="support__img.jpg"
            name="pageBg"
            @delete="deleteImageModal(background_images.background)"
          )

    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__label.correct-text__label_small.tablet-hidden Phone
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 H1 header
              .correct-text__label.correct-text__label_small.min-tablet-hidden Phone
            form-input.correct-text__input(v-model="content.title")
    correct-text-contact-item(
      title="Phone"
      :correct="content.phone"
      @delete="(index) => deleteOne('phone',index)"
      @add="addNewOne('phone')"
      @change="(index,id)=>this.content.phone.list[index].label = id"
    )
    correct-text-contact-item(
      title="Email"
      :correct="content.email"
      @delete="(index) => deleteOne('email',index)"
      @add="addNewOne('email')"
      @change="(index,id)=>this.content.email.list[index].label = id"
    )
    correct-text-contact-item(
      title="Address"
      :correct="content.address"
      @delete="(index) => deleteOne('address',index)"
      @add="addNewOne('address')"
      @change="(index,id)=>this.content.address.list[index].label = id"
    )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__label.correct-text__label_small.tablet-hidden Map
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 H2 header
              .correct-text__label.correct-text__label_small.min-tablet-hidden  Map
            form-input.correct-text__input(v-model="content.map.title")
          .correct-text__box
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4   Latitude
              .correct-text__label.correct-text__label_small.min-tablet-hidden Phone
            form-input.correct-text__input(v-model="content.map.latitude")
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4   Longitude
              .correct-text__label.correct-text__label_small.min-tablet-hidden Phone
            form-input.correct-text__input(v-model="content.map.longitude")
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__label.correct-text__label_small.tablet-hidden Banner
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 H2 header
              .correct-text__label.correct-text__label_small.min-tablet-hidden Banner
            form-input.correct-text__input(v-model="content.banner.name")
          .correct-text__field
            .correct-text__field-title.h4 Description
            form-textarea.correct-text__input(v-model="content.banner.desc" placeholder="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem n")
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Button
            form-input.correct-text__input(v-model="content.banner.btn" )
          .correct-text__field(v-if="LANG === 'en' || LANG ===  ''")
            part-replace-photo.correct-text__replace-photo(
              :key="imageKey"
              :id="background_images.bannerBackground ? background_images.bannerBackground.id : ''"
              keyImage="bannerBackground"
              :img="background_images.bannerBackground ? background_images.bannerBackground.original_full_url : ''"
              @key="(key)=> this.keyImage = key"
              @delete="deleteImageModal(background_images.bannerBackground)"
              imgDefault="need-help__img2.svg" name="bannerBg")
    correct-text-save(@save="save()")
    modal-delete(@cancel="deleteImage = null" @deleteItem="deleteImageFromMedia")

</template>

<script>
import constructor from "@/mixins/constructor";

export default {
  mixins: [constructor]
}
</script>