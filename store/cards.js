export const state = () => {
  return { listItem: [] }
}

export const mutations = {
  setListItem(state, listItem) {
    state.listItem = listItem
  },
}
