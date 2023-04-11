<template lang="pug">
  .correct-head
    .correct-head__row.flex.flex_vertical.flex_justify
      .correct-head__column.correct-head__column_left
        h1.correct-head__title.h2.h2_big {{title}}
      .correct-head__column.correct-head__column_right.flex.flex_vertical
        button-switcher-links.correct-head__switcher(:items="switchers" blue)
        slot
</template>

<script>
import {mapGetters} from "vuex";

export default {
  props: {
    title: {
      type: String,
      default: 'Web site corrections'
    },
  },
  data() {
    return {
    }
  },
  computed:{

    switchers(){
      const switchers = [
        {
          value: 'Web site',
          text: 'Web site',
          link: '/redaction/web'
        },
        {
          value: 'Categories',
          text: 'Categories',
          link: '/redaction/categories'
        },
        {
          value: 'Gallery',
          text: 'Gallery',
          link: '/redaction/gallery'
        }
      ]
      const index =  this.$auth.user.permissions_ids.findIndex(item => item === 4)
      const index1 =  this.$auth.user.permissions_ids.findIndex(item => item === 3)
      if(index < 0) switchers.splice(1,1)
      if(index1 < 0){
        switchers.splice(0,1)
        switchers.splice(2,1)
      }
      return switchers

    }
  }
}
</script>

<style lang="scss">
.correct-head {
  margin-top: 30rem;

  @include large-mobile {
    margin-top: 15rem;
  }

  &__column {
    @include small-tablet {
      width: 100%;
      display: block;
      &_left {
        display: none;
      }
    }
  }

  &__switcher {
    order: 2;
  }

  &__btn {
    min-width: 180rem;
    margin-right: 10rem;
    order: 1;

    @include small-tablet {
      margin-top: 30rem;
      min-width: 190rem;
    }
  }
}
</style>