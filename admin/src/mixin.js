export const uploadMixin = {
  methods: {
    uploadHeader() {
      return {
        Authorization: 'Bearer ' + localStorage.token
      }
    },
  },
}