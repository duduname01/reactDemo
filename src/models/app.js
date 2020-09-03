export default {
  namespace: 'app',
  state: {},
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    },
  },
}
