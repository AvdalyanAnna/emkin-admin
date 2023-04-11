import {minLength, required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      content: {
        vip: {
          title: 'VIP advertise'
        },
        recommend: {
          title: 'Recommend for you'
        },
        search: {
          title: 'Search. Buy. ',
          titleBlue: 'Sell.',
          placeholder: 'Search for ads',
          city: 'City',
          search: 'Search',
        },
        allCategories: 'All categories',
        searchModal: {
          cancel: 'Cancel',
          history: 'History',
          categories: 'Categories',
          results: 'Results',
        }
      },
    }
  },
  validations: {
    content: {
      vip: {
        title: {required, minLength: minLength(2)},
      },
      recommend: {
        title: {required, minLength: minLength(2)},
      },
      search: {
        title: {required, minLength: minLength(2)},
        titleBlue: {required, minLength: minLength(2)},
        placeholder: {required, minLength: minLength(2)},
        city: {required, minLength: minLength(2)},
        search: {required, minLength: minLength(2)},
      },
      allCategories: {required, minLength: minLength(2)},
      searchModal: {
        cancel: {required, minLength: minLength(2)},
        history: {required, minLength: minLength(2)},
        categories: {required, minLength: minLength(2)},
        results: {required, minLength: minLength(2)},
      }
    }
  },
}