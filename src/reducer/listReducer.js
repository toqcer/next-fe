const listReducer = (state , action) => {
    switch (action.type) {
    case "NEXT":
      return { ...state, page: state.page + 1 };
    case "PREV":
      return { ...state, page: state.page - 1 };
    case "SET_PAGE":
      return { ...state, page: action.payload.page };
    case "SET_SEARCH":
      return {...state, page: 1, search: action.payload.search };
    case "SET_SIZE":
      return {...state, page: 1, size: action.payload.size};
    case "SET_ORDER":
      return {...state, order_by: action.payload.order, sort_type: action.payload.sort}
    case "ALL":
      return {...state, ...action.payload}
    default:
      return state
    }
}

export { listReducer };