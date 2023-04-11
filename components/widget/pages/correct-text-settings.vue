<template lang="pug">
  form#correct-text__section-form.correct-text__section-list(v-if="loading" :key="key")
    h3.correct-text__label.h3.tablet-hidden Modal
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Modal
            .correct-text__label.correct-text__label_small  Modal
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.title"
              @input="$v.content.title.$touch()"
              :error="$v.content.title.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Nav
            .correct-text__label.correct-text__label_small  Nav
        .correct-text__column.correct-text__column_right
          .correct-text__field(v-for="(item,index) in content.nav" :key="'new'+index")
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 {{item.label}}
            form-input.correct-text__input(
              v-model="item.text"
              @input="$v.content.nav.$each[index].text.$touch()"
              :error="$v.content.nav.$each[index].text.$error"
            )
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
              .correct-text__field-title.h4 Cancel
            form-input.correct-text__input(
              v-model="content.cancel"
              @input="$v.content.cancel.$touch()"
              :error="$v.content.cancel.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Save
            form-input.correct-text__input(
              v-model="content.save"
              @input="$v.content.save.$touch()"
              :error="$v.content.save.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Username
            .correct-text__label.correct-text__label_small  Username
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.username"
              @input="$v.content.username.$touch()"
              :error="$v.content.username.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Name
            .correct-text__label.correct-text__label_small  Name
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.fName.label"
              @input="$v.content.fName.label.$touch()"
              :error="$v.content.fName.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.fName.placeholder"
              @input="$v.content.fName.placeholder.$touch()"
              :error="$v.content.fName.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Last Name
            .correct-text__label.correct-text__label_small  Last Name
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.lName.label"
              @input="$v.content.lName.label.$touch()"
              :error="$v.content.lName.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.lName.placeholder"
              @input="$v.content.lName.placeholder.$touch()"
              :error="$v.content.lName.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Notifications
            .correct-text__label.correct-text__label_small  Notifications
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.notifications"
              @input="$v.content.notifications.$touch()"
              :error="$v.content.notifications.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Email
            .correct-text__label.correct-text__label_small  Email
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.email.label"
              @input="$v.content.email.label.$touch()"
              :error="$v.content.email.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.email.placeholder"
              @input="$v.content.email.placeholder.$touch()"
              :error="$v.content.email.placeholder.$error"
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
              v-model="content.phone.label"
              @input="$v.content.phone.label.$touch()"
              :error="$v.content.phone.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.phone.placeholder"
              @input="$v.content.phone.placeholder.$touch()"
              :error="$v.content.phone.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Safety
            .correct-text__label.correct-text__label_small  Safety
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Title
            form-input.correct-text__input(
              v-model="content.safety"
              @input="$v.content.safety.$touch()"
              :error="$v.content.safety.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Current Password
            .correct-text__label.correct-text__label_small  Current Password
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.currentPassword.label"
              @input="$v.content.currentPassword.label.$touch()"
              :error="$v.content.currentPassword.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.currentPassword.placeholder"
              @input="$v.content.currentPassword.placeholder.$touch()"
              :error="$v.content.currentPassword.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Password
            .correct-text__label.correct-text__label_small  Password
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.password.label"
              @input="$v.content.password.label.$touch()"
              :error="$v.content.password.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.password.placeholder"
              @input="$v.content.password.placeholder.$touch()"
              :error="$v.content.password.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden New Password
            .correct-text__label.correct-text__label_small  New Password
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.newPassword.label"
              @input="$v.content.newPassword.label.$touch()"
              :error="$v.content.newPassword.label.$error"
            )
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Placeholder
            form-input.correct-text__input(
              v-model="content.newPassword.placeholder"
              @input="$v.content.newPassword.placeholder.$touch()"
              :error="$v.content.newPassword.placeholder.$error"
            )
    .correct-text__section
      .correct-text__row.flex
        .correct-text__column.correct-text__column_left
          .correct-text__section-head.flex.flex_vertical.flex_justify
            .correct-text__label.h4.min-tablet-hidden Language
            .correct-text__label.correct-text__label_small  Language
        .correct-text__column.correct-text__column_right
          .correct-text__field
            .correct-text__field-head.flex.flex_vertical.flex_justify
              .correct-text__field-title.h4 Label
            form-input.correct-text__input(
              v-model="content.lang.label"
              @input="$v.content.lang.label.$touch()"
              :error="$v.content.lang.label.$error"
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
        title: 'Settings',
        nav: [
          {
            text: 'Profile',
            label: 'Profile',
            to: '/setting',
          },
          {
            to: '/safety',
            label: 'Safety',
            text: 'Safety',
          },
          {
            to: '/blacklist',
            label: 'Blacklist',
            text: 'Blacklist',
          },
        ],
        edit: 'Edit',
        cancel: 'Cancel',
        save: 'Save',
        username: 'Username',
        notifications: 'Notifications',
        language: 'Language',
        safety: 'Safety',
        fName: {
          label: 'First name',
          placeholder: 'Your Name'
        },
        lName: {
          label: 'Last name',
          placeholder: 'Your Last name'
        },
        email: {
          label: 'Email',
          placeholder: 'Your Email'
        },
        phone: {
          label: 'Phone',
          placeholder: 'Your Phone'
        },
        currentPassword: {
          label: 'Your current password',
          placeholder: 'Your current password'
        },
        password: {
          label: 'Password',
          placeholder: 'Your Password'
        },
        newPassword: {
          label: 'New password',
          placeholder: 'Your New password'
        },
        lang: {
          label: 'Language'
        },
      },
    }
  },
  validations: {
    content: {
      title: {required, minLength: minLength(2)},
      nav: {
        $each: {
          text: {required, minLength: minLength(3)}
        }
      },
      edit: {required, minLength: minLength(3)},
      cancel: {required, minLength: minLength(3)},
      save: {required, minLength: minLength(3)},
      username: {required, minLength: minLength(3)},
      notifications: {required, minLength: minLength(3)},
      language: {required, minLength: minLength(3)},
      safety: {required, minLength: minLength(3)},
      fName: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      lName: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      email: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      phone: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      currentPassword: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      password: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      newPassword: {
        label: {required, minLength: minLength(3)},
        placeholder: {required, minLength: minLength(3)}
      },
      lang: {
        label: {required, minLength: minLength(3)}
      },
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
