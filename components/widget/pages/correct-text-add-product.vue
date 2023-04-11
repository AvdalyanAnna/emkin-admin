<template lang="pug">
  form#correct-text__section-form.correct-text__section-list(v-if="loading")
    h3.correct-text__label.h3.tablet-hidden Add Product
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Add Gallery
            .correct-text__label.correct-text__label_small  Add Gallery
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.addGallery.title"
              @input="$v.content.addGallery.title.$touch()"
              :error="$v.content.addGallery.title.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Skip text 1
            form-input.correct-text__input(
              v-model="content.addGallery.skip1"
              @input="$v.content.addGallery.skip1.$touch()"
              :error="$v.content.addGallery.skip1.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Skip text 2
            form-input.correct-text__input(
              v-model="content.addGallery.skip2"
              @input="$v.content.addGallery.skip2.$touch()"
              :error="$v.content.addGallery.skip2.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 skip step
            form-input.correct-text__input(
              v-model="content.addGallery.title"
              @input="$v.content.addGallery.title.$touch()"
              :error="$v.content.addGallery.title.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Description
            form-input.correct-text__input(
              v-model="content.addGallery.description"
              @input="$v.content.addGallery.description.$touch()"
              :error="$v.content.addGallery.description.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4  Description Hover
            form-input.correct-text__input(
              v-model="content.addGallery.subTitle"
              @input="$v.content.addGallery.subTitle.$touch()"
              :error="$v.content.addGallery.subTitle.$error"
            )

          .correct-text__field(v-for="(item,index) in content.addGallery.list" :key="'addGallery-'+index")
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Info item {{index + 1}}
            form-input.correct-text__input(
              v-model="item.text"
              @input="$v.content.addGallery.list.$each[index].text.$touch()"
              :error="$v.content.addGallery.list.$each[index].text.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Add Gallery Modal
            .correct-text__label.correct-text__label_small  Add Gallery Modal
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.addGalleryModal.title"
              @input="$v.content.addGalleryModal.title.$touch()"
              :error="$v.content.addGalleryModal.title.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Description
            form-input.correct-text__input(
              v-model="content.addGalleryModal.description"
              @input="$v.content.addGalleryModal.description.$touch()"
              :error="$v.content.addGalleryModal.description.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Checkbox
            form-input.correct-text__input(
              v-model="content.addGalleryModal.checkbox"
              @input="$v.content.addGalleryModal.checkbox.$touch()"
              :error="$v.content.addGalleryModal.checkbox.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Close
            form-input.correct-text__input(
              v-model="content.addGalleryModal.btnClose"
              @input="$v.content.addGalleryModal.btnClose.$touch()"
              :error="$v.content.addGalleryModal.btnClose.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Save
            form-input.correct-text__input(
              v-model="content.addGalleryModal.btnSave"
              @input="$v.content.addGalleryModal.btnSave.$touch()"
              :error="$v.content.addGalleryModal.btnSave.$error"
            )
    h3.correct-text__label.h3.tablet-hidden Form
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Title
            .correct-text__label.correct-text__label_small  Title
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.form.title.label"
              @input="$v.content.form.title.label.$touch()"
              :error="$v.content.form.title.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.form.title.placeholder"
              @input="$v.content.form.title.placeholder.$touch()"
              :error="$v.content.form.title.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Description
            .correct-text__label.correct-text__label_small  Description
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.form.description.label"
              @input="$v.content.form.description.label.$touch()"
              :error="$v.content.form.description.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.form.description.placeholder"
              @input="$v.content.form.description.placeholder.$touch()"
              :error="$v.content.form.description.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Price
            .correct-text__label.correct-text__label_small  Price
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.form.price.placeholder"
              @input="$v.content.form.price.placeholder.$touch()"
              :error="$v.content.form.price.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Checkbox
            .correct-text__label.correct-text__label_small  Checkbox
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Checkbox
            form-input.correct-text__input(
              v-model="content.form.checkbox"
              @input="$v.content.form.checkbox.$touch()"
              :error="$v.content.form.checkbox.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Nav
            .correct-text__label.correct-text__label_small  Nav
        .correct-text__column.correct-text__column_right
          .correct-text__field(v-for="(item,index) in content.form.nav" :key="'form-nav-'+index")
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Nav item {{index + 1}}
            form-input.correct-text__input(
              v-model="item.text"
              @input="$v.content.form.nav.$each[index].text.$touch()"
              :error="$v.content.form.nav.$each[index].text.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Gallery
            .correct-text__label.correct-text__label_small  Gallery
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Pin
            form-input.correct-text__input(
              v-model="content.form.gallery.pin"
              @input="$v.content.form.gallery.pin.$touch()"
              :error="$v.content.form.gallery.pin.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Main
            form-input.correct-text__input(
              v-model="content.form.gallery.main"
              @input="$v.content.form.gallery.main.$touch()"
              :error="$v.content.form.gallery.main.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Drop
            form-input.correct-text__input(
              v-model="content.form.gallery.drop"
              @input="$v.content.form.gallery.drop.$touch()"
              :error="$v.content.form.gallery.drop.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Error Length
            form-input.correct-text__input(
              v-model="content.form.gallery.error"
              @input="$v.content.form.gallery.error.$touch()"
              :error="$v.content.form.gallery.error.$error"
            )
    h3.correct-text__label.h3.tablet-hidden Category
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Title
            .correct-text__label.correct-text__label_small  Title
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.category.title"
              @input="$v.content.category.title.$touch()"
              :error="$v.content.category.title.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Form
            .correct-text__label.correct-text__label_small  Form
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Search
            form-input.correct-text__input(
              v-model="content.category.search"
              @input="$v.content.category.search.$touch()"
              :error="$v.content.category.search.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Back
            form-input.correct-text__input(back
              v-model="content.category.back"
              @input="$v.content.category.back.$touch()"
              :error="$v.content.category.back.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Cancel
            form-input.correct-text__input(
              v-model="content.category.cancel"
              @input="$v.content.category.cancel.$touch()"
              :error="$v.content.category.cancel.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Modal 2
            .correct-text__label.correct-text__label_small  Modal 2
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.mainCategory.title"
              @input="$v.content.mainCategory.title.$touch()"
              :error="$v.content.mainCategory.title.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Edit
            form-input.correct-text__input(
              v-model="content.mainCategory.edit"
              @input="$v.content.mainCategory.edit.$touch()"
              :error="$v.content.mainCategory.edit.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 All categories
            form-input.correct-text__input(
              v-model="content.mainCategory.all"
              @input="$v.content.mainCategory.all.$touch()"
              :error="$v.content.mainCategory.all.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Creat Advertise
            form-input.correct-text__input(
              v-model="content.mainCategory.create"
              @input="$v.content.mainCategory.create.$touch()"
              :error="$v.content.mainCategory.create.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Recommended
            form-input.correct-text__input(
              v-model="content.mainCategory.recommended"
              @input="$v.content.mainCategory.recommended.$touch()"
              :error="$v.content.mainCategory.recommended.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Selected
            form-input.correct-text__input(
              v-model="content.mainCategory.selected"
              @input="$v.content.mainCategory.selected.$touch()"
              :error="$v.content.mainCategory.selected.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Link
            .correct-text__label.correct-text__label_small  Link
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.mainCategory.link.label"
              @input="$v.content.mainCategory.link.label.$touch()"
              :error="$v.content.mainCategory.link.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.mainCategory.link.placeholder"
              @input="$v.content.mainCategory.link.placeholder.$touch()"
              :error="$v.content.mainCategory.link.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Address
            .correct-text__label.correct-text__label_small  Address
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.mainCategory.address.label"
              @input="$v.content.mainCategory.address.label.$touch()"
              :error="$v.content.mainCategory.address.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.mainCategory.address.placeholder"
              @input="$v.content.mainCategory.address.placeholder.$touch()"
              :error="$v.content.mainCategory.address.placeholder.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Map
            form-input.correct-text__input(
              v-model="content.mainCategory.address.map"
              @input="$v.content.mainCategory.address.map.$touch()"
              :error="$v.content.mainCategory.address.map.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Phone
            .correct-text__label.correct-text__label_small  Phone
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.mainCategory.phone.label"
              @input="$v.content.mainCategory.phone.label.$touch()"
              :error="$v.content.mainCategory.phone.label.$error"
            )
          .correct-text__field(v-for="(item,index) in content.mainCategory.phone.list" :key="'mainCategory-phone-'+index")
            .correct-text__field
              .correct-text__field-head.flex.flex_vertical.flex_justify
                .correct-text__field-title.h4 Phone list
              form-input.correct-text__input(
                v-model="item.text"
                @input="$v.content.mainCategory.phone.list.$each[index].text.$touch()"
                :error="$v.content.mainCategory.phone.list.$each[index].text.$error"
              )
            .correct-text__field
              .correct-text__field-head.flex.flex_vertical.flex_justify
                .correct-text__field-title.h4 Phone info
              form-input.correct-text__input(
                v-model="item.info"
                @input="$v.content.mainCategory.phone.list.$each[index].info.$touch()"
                :error="$v.content.mainCategory.phone.list.$each[index].info.$error"
              )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Renewal
            .correct-text__label.correct-text__label_small  Renewal
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.mainCategory.renewal.label"
              @input="$v.content.mainCategory.renewal.label.$touch()"
              :error="$v.content.mainCategory.renewal.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.mainCategory.renewal.placeholder"
              @input="$v.content.mainCategory.renewal.placeholder.$touch()"
              :error="$v.content.mainCategory.renewal.placeholder.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.mainCategory.renewal.info"
              @input="$v.content.mainCategory.renewal.info.$touch()"
              :error="$v.content.mainCategory.renewal.info.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Buttons
            .correct-text__label.correct-text__label_small  Buttons
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Cancel
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.cancel"
              @input="$v.content.mainCategory.buttons.cancel.$touch()"
              :error="$v.content.mainCategory.buttons.cancel.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Draft
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.draft"
              @input="$v.content.mainCategory.buttons.draft.$touch()"
              :error="$v.content.mainCategory.buttons.draft.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Save
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.save"
              @input="$v.content.mainCategory.buttons.save.$touch()"
              :error="$v.content.mainCategory.buttons.save.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Draft mobile
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.draft1"
              @input="$v.content.mainCategory.buttons.draft1.$touch()"
              :error="$v.content.mainCategory.buttons.draft1.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Create
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.create"
              @input="$v.content.mainCategory.buttons.create.$touch()"
              :error="$v.content.mainCategory.buttons.create.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Skip
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.skip"
              @input="$v.content.mainCategory.buttons.skip.$touch()"
              :error="$v.content.mainCategory.buttons.skip.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Next
            form-input.correct-text__input(
              v-model="content.mainCategory.buttons.next"
              @input="$v.content.mainCategory.buttons.next.$touch()"
              :error="$v.content.mainCategory.buttons.next.$error"
            )
    correct-text-save(@save="save()")

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {minLength, required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      loading: false,
      id: null,
      content: {
        addGallery:{
          title: 'What do you want to sell?',
          skip1: 'Upload images or',
          skip2: 'this step',
          subTitle: 'Click to upload or drop a photo',
          description: 'The first photo will be displayed in the search results, choose the most successful one',
          list:[
            {text:'You can upload up to 10 photos'},
            {text:'Format JPG or PNG format'},
            {text:'Only upload media you own the rights to'},
            {text:'The maximum photo size is 25MB.'},
          ]
        },
        addGalleryModal:{
          title: 'Add photos?',
          description: 'Are you sure you want to continue without photos? People view ads with a photo more often by 60%',
          checkbox: 'Don’t ask me again',
          btnClose:'Not now',
          btnSave:'Add a photo'
        },
        form:{
          title:{
            label:'Name advertise',
            placeholder:'Name of advertise'
          },
          description:{
            label:'Description',
            placeholder:'Tell us about the product'
          },
          price:{
            placeholder:'$ 0.00'
          },
          checkbox:'Availabale cost',
          nav: [
            {
              text: 'Cost',
              status:1,
            },
            {
              text: 'For free',
              status:0,
            },
            {
              text: 'Exchange',
              status:2,
            },
          ],
          gallery:{
            pin:'сделать главной',
            main:'main photo',
            drop:'Drag to change the cover',
            error:'Max photo length 10, delete images'
          }
        },
        category:{
          title:'Choose category',
          back:'Choose category',
          search:'Search',
          cancel:'Cancel',
        },
        mainCategory:{
          title:'Main category',
          edit:'Edit',
          all:'All categories',
          create:'Creat Advertise',
          recommended:'Recommended category*',
          selected:'Selected',
          link:{
            label:'Youtube link',
            placeholder:'Sent the url on video'
          },
          address:{
            label:'Enter the address',
            map:'Map',
            placeholder:'Baker street NY 3290# 20001'
          },
          phone:{
            label:'Enter the address',
            list:[
              {text:'Phone and message',status:0,info:'Choose the way for contact with you' },
              {text:'Only phone',status:1,info:'Choose the way for contact with you'},
              {text:'Only message',status:2,info:'Choose the way for contact with you'},
            ]
          },
          renewal:{
            label:'Auto-renewal',
            placeholder:'Turn on',
            info:'Choose the way for contact with you',
          },
          buttons:{
            cancel:'Cancel',
            draft:'Save as Draft',
            draft1:'Draft',
            create:'Create',
            save:'Publish now',
            skip:'Skip',
            next:'Next',
          }
        }
      },
    }
  },
  validations: {
    content: {
      addGallery:{
        title: {required, minLength: minLength(2)},
        subTitle: {required, minLength: minLength(2)},
        description: {required, minLength: minLength(2)},
        skip1: {required, minLength: minLength(2)},
        skip2: {required, minLength: minLength(2)},
        list:{
          $each:{
            text: {required, minLength: minLength(2)},
          }
        }
      },
      addGalleryModal:{
        title: {required, minLength: minLength(2)},
        description: {required, minLength: minLength(2)},
        checkbox: {required, minLength: minLength(2)},
        btnClose: {required, minLength: minLength(2)},
        btnSave: {required, minLength: minLength(2)},
      },
      form:{
        title:{
          label:{required, minLength: minLength(2)},
          placeholder:{required, minLength: minLength(2)}
        },
        description:{
          label:{required, minLength: minLength(2)},
          placeholder:{required, minLength: minLength(2)}
        },
        price:{
          placeholder:{required, minLength: minLength(2)},
        },
        checkbox:{required, minLength: minLength(2)},
        nav:{
          $each:{
            text: {required, minLength: minLength(2)},
          }
        },
        gallery:{
          pin:{required, minLength: minLength(2)},
          drop:{required, minLength: minLength(2)},
          error:{required, minLength: minLength(2)},
          main:{required, minLength: minLength(2)}
        },
      },
      category:{
        title:{required, minLength: minLength(2)},
        back:{required, minLength: minLength(2)},
        search:{required, minLength: minLength(2)},
        cancel:{required, minLength: minLength(2)},
      },
      mainCategory:{
        title:{required, minLength: minLength(2)},
        edit:{required, minLength: minLength(2)},
        all:{required, minLength: minLength(2)},
        create:{required, minLength: minLength(2)},
        recommended:{required, minLength: minLength(2)},
        selected:{required, minLength: minLength(2)},
        link:{
          label:{required, minLength: minLength(2)},
          placeholder:{required, minLength: minLength(2)}
        },
        address:{
          label:{required, minLength: minLength(2)},
          map:{required, minLength: minLength(2)},
          placeholder:{required, minLength: minLength(2)}
        },
        phone:{
          label:{required, minLength: minLength(2)},
          list:{
            $each:{
              text: {required, minLength: minLength(2)},
              info: {required, minLength: minLength(2)},
            }
          }
        },
        renewal:{
          label:{required, minLength: minLength(2)},
          placeholder:{required, minLength: minLength(2)},
          info:{required, minLength: minLength(2)},
        },
        buttons:{
          cancel:{required, minLength: minLength(2)},
          draft:{required, minLength: minLength(2)},
          draft1:{required, minLength: minLength(2)},
          create:{required, minLength: minLength(2)},
          skip:{required, minLength: minLength(2)},
          save:{required, minLength: minLength(2)},
          next:{required, minLength: minLength(2)},
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      PAGE: 'correctText/PAGE',
      LANG: 'correctText/LANG',
      TYPE: 'correctText/TYPE',
    })
  },
  watch: {
    LANG(val) {
      this.getInfo()
      this.loading = false
    }
  },
  async mounted() {
    await this.getInfo()
  },
  methods: {
    ...mapActions({
      SAVE_PAGE: 'correctText/SAVE_PAGE'
    }),
    async getInfo() {
      try {
        let key = this.PAGE
        const url = this.$getQuery({
          page_key: key,
          type: this.TYPE
        })
        this.$axios.setHeader('Accept-Language', this.LANG || 'en')
        const {data} = await this.$axios.$get(`${this.$api.page}?${url}`)
        this.id = data.id
        this.content = JSON.parse(data.content)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = true
      }
    },
    addNewOne(item) {
      const array = {
        label: 1,
        value: ''
      }
      this.content[item].list.push(array)
    },
    deleteOne(item, index) {
      if (this.content[item].list.length > 1) this.content[item].list.splice(index, 1)
    },
    save() {
      this.$v.content.$touch()
      if (!this.$v.content.$error) {
        this.SAVE_PAGE({content: this.content, id: this.id})
      }
    }
  }
}
</script>

<style scoped>
.commercial__field-rows {
  align-items: flex-end;
}
</style>
